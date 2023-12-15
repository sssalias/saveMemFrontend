<template>
  <BaseLayout>
    <div class="info">
      <h1>Семейные цитаты</h1>
      <BaseButton class="btn"><BaseLink :data="{name: 'quotesCreate'}">Добавить цитату</BaseLink></BaseButton>
    </div>
    <div class="quotes__wrapper">
      <QuotesItem v-for="item in this.quotes" :author="item.author" :text="item.text"/>
    </div>
  </BaseLayout>
</template>

<script>
import QuotesItem from "@/components/QuotesItem.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseLink from "@/components/BaseLink.vue";
import axios from "axios";

export default {
  components: {BaseLink, BaseButton, BaseLayout, QuotesItem},
  data: () => ({
    quotes: []
  }),
  methods: {
    async getQuotes() {
      const token = localStorage.getItem('token')
      await axios.get('http://127.0.0.1:3070/quote/get', {
        headers: {
          Authorization: 'Bearer ' + token
        }
          }
      )
          .then(res => this.quotes = res.data.quotes)
          .catch(err => console.log(err))
    }
  },
  async beforeMount() {
    await this.getQuotes()
    console.log(this.quotes)
  }
}
</script>

<style lang="scss" scoped>
  .quotes__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
    h1 {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .btn {
      a {
        color: white;
      }
    }
  }
</style>
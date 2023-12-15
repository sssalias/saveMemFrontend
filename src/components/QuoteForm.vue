<template>
  <div class="form__layout">
    <BaseForm class="form" title="Добавить цитаты">
      <BaseInput v-model:value="author" type="text" placeholder="Автор цитаты"/>
      <BaseInput v-model:value="text" type="text" placeholder="Текст цитаты (не более 300 слов)"/>
      <BaseButton @click="createQuote">Добавить</BaseButton>
    </BaseForm>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import axios from "axios";

export default {
  components: {BaseButton, BaseInput, BaseForm},
  data: () => ({
    author: null,
    text: null
  }),
  methods: {
    async createQuote() {
      const token = localStorage.getItem('token')
      console.log({author: this.author, text: this.text})
      await axios.post('http://127.0.0.1:3070/quote/create', {author: this.author, text: this.text}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + token
        }
      })
          .then(res => this.$router.push('/quotes'))
          .catch(err => console.log(err))
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
<template>
  <header>
    <div class="header__container">
      <div class="header__wrapper">
        <BaseLogo/>
        <nav v-if="!isAuth">
          <BaseLink :data="{name: 'login'}">Войти</BaseLink>
          <BaseLink :data="{name: 'create'}">
            <BaseButton>Зарегистрироваться</BaseButton>
          </BaseLink>
        </nav>
        <nav v-else>
          <BaseLink :data="{name: 'album'}">Альбом</BaseLink>
          <BaseLink :data="{name: 'quotes'}">Цитаты</BaseLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import BaseLink from "@/components/BaseLink.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseLogo from "@/components/BaseLogo.vue";

export default {
  components: {BaseLogo, BaseButton, BaseLink},
  data: () => ({
    isAuth: false
  }),
  methods: {
    checkAuth() {
      if (localStorage.getItem('token')) {
        this.isAuth = true
      } else  {
        this.isAuth = false
      }
    }
  },
  mounted() {
    this.checkAuth()
  }
}
</script>

<style lang="scss" scoped>
  header {
    height: 100px;
    width: 100%;
    position: fixed;
    top: 0;

    .header__container {
      width: 80%;
      height: 100%;
      margin: 0 auto;
      background-color: white;

      .header__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;

        }
      }
    }
  }
</style>
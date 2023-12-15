<template>
  <AuthLayout>
    <BaseForm title="Авторизация">
      <BaseInput v-model:value="email" type="text" placeholder="e-mail"/>
      <BaseInput v-model:value="password" type="password" placeholder="Пароль"/>
      <span>Ещё нет аккаунта? <BaseLink :data="{name: 'create'}" class="link">Создать</BaseLink></span>
      <BaseButton @click="login">Войти</BaseButton>
    </BaseForm>
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseForm from "@/components/BaseForm.vue";
import BaseLink from "@/components/BaseLink.vue";
import axios from "axios";

export default {
  components: {BaseLink, BaseForm, BaseButton, BaseInput, AuthLayout},
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    async login() {
      console.log({email: this.email, password:this.password})
      await axios.post('http://localhost:3070/user/login',
          {email: this.email, password:this.password},
          {
            headers: {"Content-Type": "application/json"}
          })
          .then(res => {
            if (Object.entries(res.data.user).length !== 0) {
              console.log(res.data.token)
              localStorage.setItem('token', res.data.token)
              this.$router.push('/album')
            }
          })
          .catch(err => console.log(err))
    }
  }

}
</script>

<style lang="scss" scoped>
.link {
  color: lightcoral;
}
</style>
<template>
  <AuthLayout>
    <BaseForm title="Регистрация">
      <BaseInput v-model:value="email" type="text" placeholder="e-mail"/>
      <BaseInput v-model:value="name" type="text" placeholder="Имя"/>
      <BaseInput v-model:value="surname" type="text" placeholder="Фамилия"/>
      <BaseInput v-model:value="patronymic" type="text" placeholder="Отчество"/>
      <BaseInput v-model:value="password" type="password" placeholder="Пароль"/>
      <BaseInput v-model:value="repassword" type="password" placeholder="Повтор пароля"/>
      <span>Уже есть аккаунт? <BaseLink :data="{name: 'login'}" class="link">Войти</BaseLink></span>
      <BaseButton @click="create">Зарегистрироваться</BaseButton>
    </BaseForm>
  </AuthLayout>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseForm from "@/components/BaseForm.vue";
import BaseLink from "@/components/BaseLink.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import axios from "axios";

export default {
  components: {AuthLayout, BaseLink, BaseForm, BaseButton, BaseInput},
  data: () => ({
    email: null,
    name: null,
    surname: null,
    patronymic: null,
    password: null,
    repassword: null
  }),
  methods: {
    async create() {
      await axios.post('http://localhost:3070/user/create',
          {
            email: this.email,
            password:this.password,
            repassword: this.repassword,
            name: this.name,
            surname: this.surname,
            patronymic: this.patronymic
          },
          {
            headers: {"Content-Type": "application/json"}
          })
          .then(res => {
            localStorage.setItem('token', res.data.token)
            this.$router.push('/album')
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
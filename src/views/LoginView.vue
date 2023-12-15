<template>
  <BaseLayout>
    <LoginForm/>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: {LoginForm, BaseLayout}

}
</script>

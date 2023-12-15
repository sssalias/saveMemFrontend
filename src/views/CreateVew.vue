<template>
  <BaseLayout>
    <CreateForm/>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import BaseForm from "@/components/BaseForm.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import BaseLink from "@/components/BaseLink.vue";
import CreateForm from "@/components/CreateForm.vue";

export default {
  components: {CreateForm, BaseLayout}

}
</script>

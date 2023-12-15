<template>
  <BaseLayout>
    <QuoteForm/>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import QuoteForm from "@/components/QuoteForm.vue";

export default {
  components: {QuoteForm, BaseLayout},
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
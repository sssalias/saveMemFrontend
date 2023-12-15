<template>
  <div class="form">
    <h2>{{ title }}</h2>
    <slot/>
  </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style lang="scss" scoped>
  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    h2 {
      font-size: 1.3rem;
    }
  }
</style>
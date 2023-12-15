<template>
  <router-link class="link" :to="data">
    <span>
      <slot/>
    </span>
  </router-link>
</template>

<script setup>
const props = defineProps(['data'])
</script>

<style lang="scss" scoped>
  .link {
    text-decoration: none;
    color: black;

    span {
      font-size: .9rem;
    }
  }
</style>
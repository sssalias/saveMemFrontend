<template>
  <BaseLink :data="{name: 'index'}">
    <div class="logo">
      <span>Сохрани</span>
      <span>Память</span>
    </div>
  </BaseLink>
</template>

<script setup>

import BaseLink from "@/components/BaseLink.vue";
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  span {
    font-size: 1.5rem;
    &:nth-child(1) {
      color: lightcoral;
      font-weight: bolder;
      font-style: italic;
    }
    &:nth-child(2) {
      color: black;
    }
  }
}
</style>
<template>
  <div class="base__layout">
    <BaseHeader/>
    <div class="content__wrapper">
      <slot/>
    </div>
  </div>
</template>

<script setup>

import BaseHeader from "@/components/BaseHeader.vue";
</script>

<style lang="scss" scoped>
  .base__layout {

    .content__wrapper {
      margin: 100px auto;
      width: 80%;
    }
  }
</style>
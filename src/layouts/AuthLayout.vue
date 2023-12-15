<template>
  <div class="auth__layout">
    <div class="form__container">
      <slot/>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .auth__layout {
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .form__container {
      padding: 4rem 6rem;
      border-radius: 5px;
      box-shadow: 1px 1px 10px 0 lightgray;
    }
  }
</style>
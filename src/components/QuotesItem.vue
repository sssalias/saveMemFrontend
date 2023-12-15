<template>
  <div class="quotes__item">
    <div class="quotes__wrapper">
      <h2>{{ author }}</h2>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['author', 'text'])

</script>

<style lang="scss" scoped>
  .quotes__item {
    width: 100%;
    background-color: #ffe1d6;
    border-radius: 10px;
    .quotes__wrapper {
      width: 100%;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: .35rem;

      h2 {
        font-size: 1.2rem;
        font-weight: bolder;
      }
      p {
        font-size: 1rem;
      }
    }
  }
</style>
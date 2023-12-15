<template>
  <div class="item">
    <div class="item__wrapper">
      <a :href="photoUrl" target="_blank">
        <img :src="photoUrl">
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['path'])
const splitedPath = props.path.split('\\')
const photoUrl = 'http://127.0.0.1:3070/photos/' + splitedPath[splitedPath.length - 1]
console.log(photoUrl)
</script>

<style lang="scss" scoped>
  .item {
    max-height: 550px;
    min-height: 350px;
    max-width: 350px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 1px 0 lightgray;

    .item__wrapper {
      height: 95%;
      width: 95%;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
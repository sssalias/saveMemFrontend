<template>
  <div class="offer">
    <div class="img__wrapper">
      <img src="@/assets/img/offer.png" alt="">
    </div>
    <div class="offer__content">
      <h1>СохраниПамять</h1>
      <h3>Альбом - это больше чем фото!</h3>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .offer {
    height: calc(100vh - 100px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .img__wrapper {
      height: 75%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .offer__content {
      height: 65%;
      padding: 2rem;
      h1 {
        font-size: 2.5rem;
        font-weight: bold;
        color: lightcoral;
      }
      h3 {
        font-size: 2rem;
      }
    }
  }
</style>
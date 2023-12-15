<template>
  <button>
    <slot/>
  </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
 button {
   padding: 1rem 1.7rem;
   background: lightcoral;
   color: white;
   border-radius: 10px;
   border: 1px solid lightcoral;
   cursor: pointer;
 }
</style>
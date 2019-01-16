<template>
  <div class="wrapper" :style="{height: size}" />
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: '.15rem'
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    background-color: #EFEFEF;
  }
</style>
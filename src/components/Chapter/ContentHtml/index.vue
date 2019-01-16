<template>
  <section class="chapter-content" v-html="contentHtml" />
</template>

<script>
  export default {
    props: {
      contentHtml: {
        type: String
      }
    }
  }
</script>

<style>
  .chapter-content {
    padding: .5rem .2rem;
  }

  .chapter-content p {
    line-height: .36rem;
    margin-bottom: .24rem;
    text-indent: 2em;
  }
</style>
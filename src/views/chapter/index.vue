<template>
  <div>
    <nav-bar />
    <content-html :contentHtml="contentHtml" />
    <action-btns />
  </div>
</template>

<script>
  import NavBar from '@/components/Chapter/NavBar'
  import ContentHtml from '@/components/Chapter/ContentHtml'
  import ActionBtns from '@/components/Chapter/ActionBtns'
  import { mapState } from 'vuex'

  export default {
    components: {
      NavBar,
      ContentHtml,
      ActionBtns
    },
    computed: {
      ...mapState({
        contentHtml: state => state.chapterVuex.contentHtml
      })
    }
  }
</script>

<style scoped>
  
</style>
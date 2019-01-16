<template>
  <div>
    <nav-bar />
    <div class="content-wrapper">
      <book-list :dataProvider="list" />
    </div>
  </div>
</template>

<script>
  import BookList from '@/components/history/BookList'
  import { mapState } from 'vuex'
  import NavBar from '@/components/NavBar'

  export default {
    components: {
      BookList,
      NavBar
    },
    computed: {
      ...mapState({
        list: state => state.historyVuex.list
      })
    }
  }
</script>

<style scoped>
  .content-wrapper {
    padding: .28rem .3rem;
  }
</style>
<template>
  <div class="container">
    <book-list :dataProvider="list" />
    <tab-bar />
  </div>
</template>

<script>
  import BookList from '@/components/BookShelf/BookList'
  import { mapState } from 'vuex'
  import TabBar from '@/components/TabBar'

  export default {
    components: {
      BookList,
      TabBar
    },
    computed: {
      ...mapState({
        list: state => state.bookShelfVuex.list
      })
    }
  }
</script>

<style scoped>
  .container {
    padding: .28rem .3rem;
  }
</style>
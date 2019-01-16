<template>
  <div>
    <nav-bar />
    <book-list :dataProvider="list" />
  </div>
</template>

<script>
  import BookList from '@/components/BookCollection/BookList'
  import { mapState } from 'vuex'
  import NavBar from '@/components/NavBar'

  export default {
    components: {
      BookList,
      NavBar
    },
    computed: {
      ...mapState({
        list: state => state.bookCollectionVuex.list
      })
    }
  }
</script>

<style scoped>
  
</style>
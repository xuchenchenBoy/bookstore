<template>
  <div>
    <nav-bar />
    <book-desc :desc="info" />
    <deliver size=".16rem" />
    <category :categorys="categorys" />
    <deliver size=".16rem" />
    <recommand :dataProvider="recommandList" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import NavBar from '@/components/NavBar'
  import Deliver from '@/components/Deliver'
  import BookDesc from '@/components/BookDetail/BookDesc'
  import Category from '@/components/BookDetail/Category'
  import Recommand from '@/components/BookDetail/Recommand'

  export default {
    components: {
      NavBar,
      BookDesc,
      Category,
      Deliver,
      Recommand
    },
    computed: {
      ...mapState({
        info: state => state.bookDetailVuex.info,
        categorys: state => state.bookDetailVuex.categorys,
        recommandList: state => state.bookDetailVuex.recommandList
      })
    }
  }
</script>

<style scoped>
  
</style>
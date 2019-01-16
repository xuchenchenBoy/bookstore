<template>
  <div v-if="true" class="bar-container">
    <swipe :dataProvider="swipeData" />
    <Category />
    <deliver size=".16rem" />
    <editor-recom :dataProvider="editRecomData" />
    <deliver size=".16rem" />
    <new-recom :dataProvider="newRecomData" />
    <tab-bar />
  </div>
  <loading v-else />
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Loading from '@/components/Loading'
import Swipe from '@/components/Home/Swipe'
import Category from '@/components/Home/Category'
import Deliver from '@/components/Deliver'
import EditorRecom from '@/components/Home/EditorRecom'
import NewRecom from '@/components/Home/NewRecom'
import TabBar from '@/components/TabBar'

export default {
  components: {
    Loading,
    Swipe,
    Category,
    Deliver,
    EditorRecom,
    NewRecom,
    TabBar
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      swipeData: (state) => state.homeVuex.swipeData,
      editRecomData: (state) => state.homeVuex.editRecomData,
      newRecomData: (state) => state.homeVuex.newRecomData
    }),
    ...mapGetters(['getCount'])
  },
  methods: {
    ...mapActions(['calcuateAdd', 'calcuateDEC', 'requestStatus'])
  }
}
</script>

<style scoped lang="less">

</style>
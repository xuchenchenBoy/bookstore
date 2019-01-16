<template>
  <div>
    <nav-bar>
      <i class="reversal" @click="reverse"></i>
    </nav-bar>
    <list :dataProvider="list" />
    <pull-refresh :enableNextPage="hasMore" :isNoData="isNoData" @getNextPage="getNextPage"  />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import List from '@/components/Catalog/List'
  import PullRefresh from '@/components/PullRefresh'
  import { mapMutations, mapState, mapActions } from 'vuex'

  export default {
    components: {
      NavBar,
      List,
      PullRefresh
    },
    computed: {
      ...mapState({
        list: state => state.catalogVuex.list,
        hasMore: state => state.catalogVuex.hasMore,
        isNoData: state => state.catalogVuex.isNoData
      })
    },
    methods: {
      ...mapMutations(['reverse']),
      ...mapActions(['getNextPage'])
    }
  }
</script>

<style scoped>
  .reversal {
    width: .38rem;
    height: .44rem;
    margin-right: .19rem;
    background: url(http://img-shop.kkkd.com/FlpwtVo5sSejcn2TxI-eL4sB5gED) no-repeat;
    background-size: 100% 100%;
  }
</style>
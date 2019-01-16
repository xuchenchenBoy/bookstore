<template>
  <div>
    <tab @changeTab="changeTab" :activeType="activeType" />
    <tab-pane :dataProvider="list" />
    <tab-bar />
  </div>
</template>

<script>
  import Tab from '@/components/Rank/Tab'
  import TabPane from '@/components/Rank/TabPane'
  import { mapState, mapMutations } from 'vuex'
  import TabBar from '@/components/TabBar'

  export default {
    components: {
      TabPane,
      Tab,
      TabBar
    },
    computed: {
      ...mapState({
        list: state => state.rankVuex.list,
        activeType: state => state.rankVuex.activeType
      })
    },
    methods: {
      ...mapMutations(['changeTab'])
    }
  }
</script>

<style scoped>
  
</style>
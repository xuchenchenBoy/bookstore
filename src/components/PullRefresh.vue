<template>
  <div className="pull-refresh-wrapper">
    <p v-if="enableNextPage">加载中...</p>
    <p v-else-if="(!enableNextPage && !isNoData)">已经到底啦~</p>
    <data-none v-else-if="(!enableNextPage && isNoData)" />
  </div>
</template>

<script>
  import throttle from 'lodash.throttle'
  import DataNone from '@/components/DataNone'

  export default {
    components: {
      DataNone
    },
    data () {
      return {
        lowerThreshold: 30
      }
    },
    methods: {
      refresh () {
        const { lowerThreshold, enableNext } = this
        const clientH = document.documentElement.clientHeight || document.body.clientHeight
        const scrollH = document.documentElement.scrollHeight || document.body.scrollHeight
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

        if (scrollTop <= 0) return // 无滚动条，禁止执行
        const currentScrollH = scrollTop + clientH
        const isFetch = ((currentScrollH + lowerThreshold) >= scrollH) && enableNext
        if (isFetch) { // 是否可以加载更多
          this.enableNext = false
          this.$emit('getNextPage')
        }
      },

      addEventRefresh () {}
    },
    props: {
      enableNextPage: {
        type: Boolean,
        default: false
      },
      getNextPage: {
        type: Function,
        default: () => {}
      },
      isNoData: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      enableNext () {
        return this.enableNextPage
      }
    },
    beforeDestory () {
      window.removeEventListener('scroll', this.addEventRefresh)
    },
    mounted () {
      this.addEventRefresh = throttle(this.refresh.bind(this), 300)
      window.addEventListener('scroll', this.addEventRefresh)
    }
  }
</script>

<style scoped>
  
</style>
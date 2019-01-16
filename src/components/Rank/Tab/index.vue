<template>
  <ul class="tab-tit flex items-center">
    <li 
      v-for="item in tabConfig" 
      @click="changeTab(item.type)" 
      :class="`flex-1 ${(activeType === item.type) ? 'active' : ''}`"
      :key="item.type"
    >{{item.label}}</li>
  </ul>
</template>

<script>
  import { tabConfig } from '@/constants/rank'

  export default {
    props: {
      activeType: {
        type: String,
        default: 'a'
      }
    },
    data () {
      return {
        tabConfig
      }
    },
    methods: {
      changeTab (type) {
        this.$emit('changeTab', type)
      }
    }
  }
</script>

<style scoped>
  .tab-tit {
    padding: 0 .3rem;
    border-top: .01rem solid #E6E6E6;
    border-bottom: .01rem solid #E6E6E6;
    box-sizing: border-box;
  }

  .tab-tit li {
    position: relative;
    height: .96rem;
    line-height: .96rem;
    font-size: .32rem;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    text-align: center;
  }

  .tab-tit .active {
    color: #E7905D;
  }

  .tab-tit .active:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: .63rem;
    height: .04rem;
    background-color: #E7905D;
  }
</style>
<template>
  <div>
    <nav-bar />
    <div class="content flex flex-wrap">
      <router-link 
        class="card" 
        v-for="item in config" 
        :key="item.id" 
        :to="`/home?from=category&type=${item.id}`" 
        :style="{backgroundColor: item.bgColor, borderColor: item.borderColor}"
      >
        {{item.label}}
        <img class="book-img" :src="item.imgUrl" alt="书籍封面">
      </router-link>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { config } from '@/constants/category'

export default {
  components: {
    NavBar
  },
  data () {
    return {
      config
    }
  }
}
</script>

<style scoped>
  .content {
    padding: .3rem .08rem 0 .3rem;
  }

  .card {
    position: relative;
    width: 3.34rem;
    height: 1.2rem;
    padding-left: .34rem;
    margin-right: .22rem;
    margin-bottom: .24rem;
    line-height: 1.1rem;
    box-sizing: border-box;
    border-style: solid;
    border-width: .05rem;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    font-size: .32rem;
    color: #FFF;
  }

  .book-img {
    position: absolute;
    right: .18rem;
    bottom: -.05rem;
    width: 1.25rem;
    height: .99rem;
  }
</style>
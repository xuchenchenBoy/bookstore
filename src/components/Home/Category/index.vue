<template>
  <div class="wrapper flex justify-center">
    <router-link :to="`bookCollection`" class="item flex flex-column items-center justify-center">
      <i class="icon icon1"></i>
      <span class="item-tit">精品馆</span>
    </router-link>
    <router-link :to="`/category`" class="item flex flex-column items-center justify-center">
      <i class="icon icon2"></i>
      <span class="item-tit">分类</span>
    </router-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .wrapper {
    padding: .18rem 0 .15rem;
  }

  .item {
    width: 3.45rem;
  }

  .icon {
    width: .5rem;
    height: .5rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .icon1 {
    background-image: url(http://img-shop.kkkd.com/FgQuEOTrJbhbVwXz0cMe5TTRbdvJ);
  }

  .icon2 {
    background-image: url(http://img-shop.kkkd.com/FvZ9u7jppHzS8CwyV8bxYIfkh3uo);
  }

  .item-tit {
    line-height: .42rem;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    font-size: .3rem;
  }
</style>
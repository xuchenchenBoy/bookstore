<template>
  <div>
    <router-link :to="`/history`" class="item flex justify-between items-center">
      <span>阅读历史</span>
      <i class="arrow"></i>
    </router-link>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style scoped>
  .item {
    height: 1.44rem;
    padding-left: .3rem;
    padding-right: .53rem;
    box-sizing: border-box;
    background-color: #fff;
    font-size: .36rem;
  }

  .arrow {
    width: .18rem;
    height: .36rem;
    background: url(http://img-shop.kkkd.com/FvFfrgNOc3mYXA0ST40r94H9sUuf) no-repeat center center;
    background-size: 100% 100%;
  }
</style>
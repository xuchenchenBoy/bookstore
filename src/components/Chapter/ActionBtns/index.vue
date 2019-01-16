<template>
  <div class="wrapper flex items-center justify-around">
    <div class="btn flex items-center justify-center">
      <i class="icon-left"></i>
      <span>上一章</span>
    </div>
    <div class="btn flex items-center justify-center">
      <i class="icon-center"></i>
      <span>目录</span>
    </div>
    <div class="btn flex items-center justify-center">
      <span>下一章</span>
      <i class="icon-right"></i>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .wrapper {
    padding: 0 .16rem .7rem;
  }

  .btn {
    width: 2.17rem;
    height: .6rem;
    border: .01rem solid #979797;
    font-size: .3rem;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
  }

  .icon-left {
    width: .23rem;
    height: .26rem;
    margin-right: .11rem;
    background: url(http://img-shop.kkkd.com/FjXiLEg3oHdSVdQs9VR77alvxvJj) no-repeat;
    background-size: 100% 100%;
  }

  .icon-center {
    width: .25rem;
    height: .27rem;
    margin-right: .11rem;
    background: url(http://img-shop.kkkd.com/Fnemzzh8JLJTKNceDszdoSiYsjXp) no-repeat;
    background-size: 100% 100%;
  }

  .icon-right {
    width: .23rem;
    height: .26rem;
    margin-left: .11rem;
    background: url(http://img-shop.kkkd.com/Ftj-7zWUVjeKD4HYUURyXgu905sk) no-repeat;
    background-size: 100% 100%;
  }
</style>
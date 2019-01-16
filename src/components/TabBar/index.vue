<template>
  <div class="wrapper flex justify-center">
    <router-link v-for="(item, index) in barConfig" :to="item.link" :key="index" class="item flex-auto flex flex-column items-center justify-center">
      <i :class="`icon icon${index + 1} ${(activeLink === item.link) ? 'active' : ''}`"></i>
      <span class="item-tit">{{item.label}}</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        barConfig: [
          {
            label: '首页',
            link: '/home'
          },
          {
            label: '排行榜',
            link: '/rank'
          },
          {
            label: '书架',
            link: '/bookShelf'
          },
          {
            label: '我的',
            link: '/userCenter'
          }
        ],
        activeLink: ''
      }
    },
    created () {
      const { path } = this.$route
      this.activeLink = path
    }
  }
</script>

<style scoped lang="less">
  .wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.1rem;
    box-sizing: border-box;
    padding: 0 .3rem;
    border-top: .01rem solid #979797;
    background: #fff;
  }

  .item {
    
  }

  .icon {
    margin-bottom: .04rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .icon1 {
    width: .35rem;
    height: .35rem;
    background-image: url(http://img-shop.kkkd.com/FnWyeujIdipYKu2hb7OdVE7rpxCM);

    &.active {
      background-image: url(http://img-shop.kkkd.com/FrGXejTyTxnBhZrOcJtgNRLNsmHD);
    }
  }

  .icon2 {
    width: .44rem;
    height: .42rem;
    background-image: url(http://img-shop.kkkd.com/FuRZRHIpcETcy9mSOrPSfE9jzBWV);

    &.active {
      background-image: url(http://img-shop.kkkd.com/FirQgbyAE_OgwgIOLoDgCb5NMXkH);
    }
  }

  .icon3 {
    width: .35rem;
    height: .35rem;
    background-image: url(http://img-shop.kkkd.com/FjbpFUBE6tjhME9wZOymHLcjsEKe);

    &.active {
      background-image: url(http://img-shop.kkkd.com/FlG6CeJBjDVVPZPokfTaeCG2sjz8);
    }
  }

  .icon4 {
    width: .35rem;
    height: .35rem;
    background-image: url(http://img-shop.kkkd.com/FkOVaj9dPpp_KDldsCzBgCCNuA_D);

    &.active {
      background-image: url(http://img-shop.kkkd.com/Fm-SwHUAdFYa7HLAeC6t-Kd40wr9);
    }
  }

  .item-tit {
    line-height: .28rem;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    font-size: .2rem;
  }
</style>
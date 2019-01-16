<template>
  <nav-bar :titStyle="titStyle">
    <router-link to="/bookShelf" class="icon book-shelf" />
    <router-link to="/userCenter" class="icon user-center" />
    <router-link to="home" class="icon home" />
  </nav-bar>
</template>

<script>
  import NavBar from '@/components/NavBar'

export default {
    components: {
      NavBar
    },
    data () {
      return {
        titStyle: {
          width: '4.2rem',
          paddingLeft: '.76rem',
          textAlign: 'left',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }
    }
  }
</script>

<style scoped>
  .icon {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .book-shelf {
    width: .48rem;
    height: .46rem;
    margin-right: .27rem;
    background: url(http://img-shop.kkkd.com/Ft9ofNKeFS217sZ23aMueoy4rfDo) no-repeat;
    background-size: 100% 100%;
  }

  .user-center {
    width: .54rem;
    height: .54rem;
    margin-right: .24rem;
    background: url(http://img-shop.kkkd.com/FkxdhVjhM7fuAaiHhkCCDuUph72u) no-repeat;
    background-size: 100% 100%;
  }

  .home {
    width: .54rem;
    height: .54rem;
    margin-right: .04rem;
    background: url(http://img-shop.kkkd.com/FhlNAso_QbYf1qiWIsjsCnwq2pF8) no-repeat;
    background-size: 100% 100%;
  }
</style>
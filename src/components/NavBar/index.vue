<template>
  <div class="container">
    <div class="nav-wrapper">
      <div @click="goBack" class="arrow"></div>
      <div :style="titStyle">{{title || customTitle}}</div>
      <div class="right-solt flex items-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  props: {
    titStyle: {
      type: Object
    },
    customTitle: {
      type: String
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  created () {
    const { name, query } = this.$route
    const { title } = query
    this.title = title || name
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    height: .88rem;
  }

  .nav-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: .88rem;
    line-height: .88rem;
    background-color: #fff;
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: .3rem;
    font-weight: bold;
    border: .01rem solid #F2F2F2;
  }

  .arrow {
    position: absolute;
    left: .41rem;
    top: 0;
    width: .171rem;
    height: 100%;
    background: url(http://img-shop.kkkd.com/FjXiLEg3oHdSVdQs9VR77alvxvJj) no-repeat center center;
    background-size: 100% .291rem;
  }

  .right-solt {
    position: absolute;
    right: .3rem;
    top: 0;
    height: 100%;
  }
</style>
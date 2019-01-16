<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "./style/main.less";
html, body {
  height: 100%;
}

#app {
  height: 100%;
  font-family: PingFang-SC-Medium, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: .26rem;
  color: #4A4A4A;
  background-color: #fff;
}
</style>

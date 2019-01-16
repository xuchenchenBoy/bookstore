<template>
  <div class="container">
    <router-link :to="`/chapter`" v-for="item in dataProvider" :key="item.num" class="item">
      <span class="num">{{item.num}}</span>
      <span>{{item.name }}</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      dataProvider: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 0 .3rem;
  }

  .item {
    display: block;
    height: .72rem;
    padding-left: .3rem;
    line-height: .72rem;
    border-bottom: .01rem solid #C5C5C5;
  }

  .num {
    padding-right: .2rem;
  }
</style>
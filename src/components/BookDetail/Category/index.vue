<template>
  <div>
    <div class="tit">书籍目录</div>
    <div class="category-wrapper">
      <router-link :to="`/chapter`" v-for="item in categorys" :key="item.id" class="category">
        {{item.num}}&nbsp;{{item.name}}
      </router-link>
    </div>
    <router-link :to="`/catalog`" class="all-category">全部目录</router-link>
  </div>
</template>

<script>
  export default {
    props: {
      categorys: {
        props: Object
      }
    }
  }
</script>

<style scoped>
  .tit {
    height: .8rem;
    line-height: .8rem;
    padding: 0 .3rem;
    margin-bottom: .12rem;
    font-size: .3rem;
  }

  .category-wrapper {
    padding: 0 .3rem .3rem;
  }

  .category {
    display: block;
    width: 6.9rem;
    height: .68rem;
    padding-left: .3rem;
    line-height: .68rem;
    margin-bottom: .05rem;
    box-sizing: border-box;
    border: .01rem solid #979797;
    border-radius: .08rem;
  }

  .category:visited {
    background: #EFEFEF;
  }

  .all-category {
    display: block;
    padding-bottom: .34rem;
    text-align: center;
    color: #E7905D;
  }
</style>
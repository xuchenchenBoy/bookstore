<template>
  <div class="container">
    <div class="flex justify-between tit-wrapper items-center">
      <span class="title">主编推荐</span>
    </div>
    <div class="content flex">
      <div v-for="(item, index) in dataProvider" :key="index">
        <div class="book">
          <router-link :to="`/bookDetail`">
            <img class="book-img" :src="item.url" alt="图书">
          </router-link>
        </div>
        <p class="book-tit">{{item.name}}</p>
      </div>
    </div>
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
    padding: 0 .3rem .21rem;
  }

  .tit-wrapper {
    height: .8rem;
  }

  .title {
    font-size: .3rem;
  }

  .content {
    padding-top: .15rem;
  }

  .book {
    width: 1.573rem;
    height: 2.202rem;
    margin-bottom: .14rem;
    margin-right: .15rem;
  }

  .book-img {
    width: 100%;
    height: 100%;
  }

  .book-tit {
    line-height: .34rem;
  }
</style>
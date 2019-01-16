<template>
  <div class="content">
    <router-link :to="`/bookDetail`" v-for="(item, index) in dataProvider" :key="index">
      <div class="item-wrapper flex">
        <img class="book-img" :src="item.url" alt="书籍">
        <div class="flex-1">
          <p class="book-tit">{{item.name}}</p>
          <div class="book-msg">
            <span>{{`${item.lineType} | ${item.size} ${item.type}`}}</span>
          </div>
          <div class="book-msg">
            <span>{{`${item.lineType} | ${item.size} ${item.type}`}}</span>
          </div>
        </div>
      </div>
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
  .content {
  }
  
  .item-wrapper {
    padding-bottom: .28rem;
  }

  .book-img {
    width: 1.08rem;
    height: 1.5rem;
    padding-right: .17rem;
  }

  .book-tit {
    line-height: .42rem;
    padding-bottom: .32rem;
    font-size: .3rem;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
  }

  .book-msg {
    line-height: .37rem;
    margin-bottom: .02rem;
    color: #9B9B9B;
  }
</style>
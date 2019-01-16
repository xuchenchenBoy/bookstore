<template>
  <div class="content">
    <router-link :to="`home`" v-for="(item, index) in dataProvider" :key="index">
      <div class="item-wrapper flex">
        <img class="book-img" :src="item.url" alt="书籍">
        <div class="flex-1">
          <p class="book-tit">{{item.name}}</p>
          <p class="book-desc">{{item.desc}}</p>
          <div class="flex justify-between book-msg">
            <span>{{item.lineType}}</span>
            <span>{{`${item.size} | ${item.type}`}}</span>
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
    padding: .28rem .3rem;
  }
  
  .item-wrapper {
    padding-bottom: .28rem;
  }

  .book-img {
    width: 1.26rem;
    height: 1.75rem;
    padding-right: .17rem;
  }

  .book-tit {
    line-height: .42rem;
    font-size: .3rem;
    font-family: PingFangSC-Semibold;
    font-weight: bold;
    padding-bottom: .03rem;
  }

  .book-desc {
    margin-bottom: .18rem;
    line-height: .37rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    color: #9B9B9B;
  }

  .book-msg {
    line-height: .37rem;
    color: #E7905D;
  }
</style>
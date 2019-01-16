<template>
  <div>
    <div class="desc-container">
      <div class="desc-wrapper flex">
        <img class="book-img" :src="desc.url" alt="书籍">
        <div class="flex-1">
          <p class="book-tit">{{desc.name}}</p>
          <div class="book-msg">
            <span>{{desc.author}}</span>
          </div>
          <div class="book-msg">
            <span>{{`${desc.lineType} | ${desc.size} | ${desc.type}`}}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-between ">
        <div class="btn active-btn" @click="addShelf">加入书架</div>
        <router-link class="btn" :to="`/chapter`">开始阅读</router-link>
      </div>
    </div>
    <deliver size=".16rem" />
    <section class="desc">{{desc.desc}}</section>
  </div>
</template>

<script>
  import Deliver from '@/components/Deliver'

  export default {
    components: {
      Deliver
    },
    props: {
      desc: {
        type: Object,
        default: {}
      }
    },
    methods: {
      addShelf () {
        this.$emit('addShelf')
      }
    }
  }
</script>

<style scoped>
  .desc-container {
    padding: 0 .3rem .31rem;
  }

  .desc-wrapper {
    padding: .16rem 0 .4rem;
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

  .desc {
    padding: .25rem .3rem;
    line-height: .37rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
    color: #9B9B9B;
  }

  .btn {
    width: 3.35rem;
    height: .67rem;
    line-height: .67rem;
    text-align: center;
    box-sizing: border-box;
    border: .02rem solid #E7905D;
    border-radius: .08rem;
    color: #E7905D;
  }

  .btn:active {
    opacity: .75;
  }

  .active-btn {
    background: #E7905D;
    color: #fff;
  }
</style>
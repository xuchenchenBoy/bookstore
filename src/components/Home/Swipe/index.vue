<template>
   <swipe class="swipe">
      <swipe-item v-for="(item, index) in dataProvider" :key="index">
        <router-link :to="`/bookDetail?id=${item.id}`">
          <img :src="item.url" alt="书籍">
        </router-link>
      </swipe-item>
    </swipe>
</template>

<script>
  import 'vue-swipe/dist/vue-swipe.css'
  import { Swipe, SwipeItem } from 'vue-swipe'

  export default {
    components: {
      Swipe,
      SwipeItem
    },
    props: {
      dataProvider: {
        type: Array,
        default: [],
        required: true
      }
    }
  }
</script>

<style lang="less">
  .swipe {
    height: 2.84rem;

    img {
      width: 100%;
      height: 100%;
    }

    .mint-swipe-indicator {
      &.is-active {
        background-color: #EA0007;
        opacity: .5;
      }
    }
  }
</style>
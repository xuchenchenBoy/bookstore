<template>
  <div class="container flex items-center">
    <div class="avatar" :style="{backgroundImage: `url(${avatar})`}"></div>
    <p>{{nickName}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      avatar: {
        type: String
      },
      nickName: {
        type: String
      }
    }
  }
</script>

<style scoped>
  .container {
    height: 1.87rem;
    padding: 0 .3rem;
    box-sizing: border-box;
    background-color: #fff;
    font-size: .3rem;
  }

  .avatar {
    width: 1rem;
    height: 1rem;
    margin-right: .17rem;
    border-radius: 50%;
    background-color: #D8D8D8;
    border: .01rem solid #979797;
    background: #D8D8D8 no-repeat center center;
    background-size: 100% 100%;
  }
</style>
<template>
  <div class="container">
    <profile :avatar="avatar" :nick-name="nickName" />
    <deliver size=".16rem" />
    <profile-nav />
    <tab-bar />
  </div>
</template>

<script>
  import Profile from '@/components/UserCenter/Profile'
  import ProfileNav from '@/components/UserCenter/ProfileNav'
  import { mapState } from 'vuex'
  import Deliver from '@/components/Deliver'
  import TabBar from '@/components/TabBar'

  export default {
    components: {
      Profile,
      Deliver,
      ProfileNav,
      TabBar
    },
    computed: {
      ...mapState({
        avatar: state => state.userVuex.avatar,
        nickName: state => state.userVuex.nickName
      })
    }
  }
</script>

<style scoped>
  .container {
    height: 100%;
    background-color: #EFEFEF;
  }
</style>
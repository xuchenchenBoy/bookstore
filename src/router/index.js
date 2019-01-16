import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Category from '@/views/category'
import UserCenter from '@/views/userCenter'
import Rank from '@/views/rank'
import BookShelf from '@/views/bookShelf'
import History from '@/views/history'
import BookCollection from '@/views/bookCollection'
import Catalog from '@/views/catalog'
import Chapter from '@/views/chapter'
import BookDetail from '@/views/bookDetail'
import Page404 from '@/views/page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '主页',
      component: Home
    },
    {
      path: '/category',
      name: '分类',
      component: Category
    },
    {
      path: '/userCenter',
      name: '个人中心',
      component: UserCenter
    },
    {
      path: '/rank',
      name: '排行榜',
      component: Rank
    },
    {
      path: '/bookShelf',
      name: '书架',
      component: BookShelf
    },
    {
      path: '/history',
      name: '阅读历史',
      component: History
    },
    {
      path: '/bookCollection',
      name: '书籍集合',
      component: BookCollection
    },
    {
      path: '/catalog',
      name: '目录',
      component: Catalog
    },
    {
      path: '/chapter',
      name: '章节',
      component: Chapter
    },
    {
      path: '/bookDetail',
      name: '书籍详情',
      component: BookDetail
    },
    {
      path: '*',
      name: '404页面没找到',
      component: Page404
    }
  ]
})

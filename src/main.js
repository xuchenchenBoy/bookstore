// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Vuex from 'vuex'
import homeVuex from '@/vuexs/home'
import userVuex from '@/vuexs/user'
import rankVuex from '@/vuexs/rank'
import bookShelfVuex from '@/vuexs/bookShelf'
import historyVuex from '@/vuexs/history'
import bookCollectionVuex from '@/vuexs/bookCollection'
import catalogVuex from '@/vuexs/catalog'
import chapterVuex from '@/vuexs/chapter'
import bookDetailVuex from '@/vuexs/bookDetail'
import createLogger from 'vuex/dist/logger'
import 'normalize.css'
import '@/utils/rem.js'
import '@/components/AlertTip'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    homeVuex,
    userVuex,
    rankVuex,
    bookShelfVuex,
    historyVuex,
    bookCollectionVuex,
    catalogVuex,
    chapterVuex,
    bookDetailVuex
  },
  plugins: [createLogger()]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

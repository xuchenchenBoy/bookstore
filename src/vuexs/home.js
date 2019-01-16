import actionMiddleware from '@/utils/actionMiddleware'
import * as services from '@/service/home'

const homeVuex = {
  state: {
    count: 1,
    status: 'nothing status',
    swipeData: [
      {
        url: 'http://img60.ddimg.cn/upload_img/00316/by/1242-546-1547194246.jpg',
        id: 1
      },
      {
        url: 'http://img60.ddimg.cn/upload_img/00705/J/1242x546-1547214983.jpg',
        id: 2
      },
      {
        url: 'http://img57.ddimg.cn/9002790054044307.jpg',
        id: 3
      }
    ],
    editRecomData: [
      {
        url: 'http://ouer-cows.oss-cn-hangzhou.aliyuncs.com/lab-test/book/1547454696042.jpg?x-oss-process=image/resize,m_lfit,h_110,w_78',
        id: 1,
        name: '仙逆'
      },
      {
        url: 'http://ouer-cows.oss-cn-hangzhou.aliyuncs.com/lab-test/book/1547454696042.jpg?x-oss-process=image/resize,m_lfit,h_110,w_78',
        id: 2,
        name: '三体'
      },
      {
        url: 'http://ouer-cows.oss-cn-hangzhou.aliyuncs.com/lab-test/book/1547454696042.jpg?x-oss-process=image/resize,m_lfit,h_110,w_78',
        id: 3,
        name: '心理罪'
      },
      {
        url: 'http://ouer-cows.oss-cn-hangzhou.aliyuncs.com/lab-test/book/1547454696042.jpg?x-oss-process=image/resize,m_lfit,h_110,w_78',
        id: 4,
        name: '霸道王子和霸道总裁'
      }
    ],
    newRecomData: [
      {
        url: 'http://ouer-cows.oss-cn-hangzhou.aliyuncs.com/lab-test/book/1547454696042.jpg?x-oss-process=image/resize,m_lfit,h_110,w_78',
        id: 1,
        name: '仙逆',
        desc: '在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁…',
        lineType: '连载中',
        size: '11万字',
        type: '都市言情'
      },
      {
        url: 'http://ouer-cows.oss-cn-hangzhou.aliyuncs.com/lab-test/book/1547454696042.jpg?x-oss-process=image/resize,m_lfit,h_110,w_78',
        id: 1,
        name: '仙逆',
        desc: '在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁…',
        lineType: '连载中',
        size: '11万字',
        type: '都市言情'
      },
      {
        url: 'http://ouer-cows.oss-cn-hangzhou.aliyuncs.com/lab-test/book/1547454696042.jpg?x-oss-process=image/resize,m_lfit,h_110,w_78',
        id: 1,
        name: '仙逆',
        desc: '在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁…',
        lineType: '连载中',
        size: '11万字',
        type: '都市言情'
      },
      {
        url: 'http://ouer-cows.oss-cn-hangzhou.aliyuncs.com/lab-test/book/1547454696042.jpg?x-oss-process=image/resize,m_lfit,h_110,w_78',
        id: 1,
        name: '仙逆',
        desc: '在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁…',
        lineType: '连载中',
        size: '11万字',
        type: '都市言情'
      }
    ]
  },
  getters: { // 可以缓存计算的值，作为公用的值
    getCount: state => (state.count)
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    onLoading: state => { state.status = 'pending status' },
    onSuccess: state => { state.status = 'success status' },
    onError: state => { state.status = 'error status' }
  },
  actions: {
    requestStatus (store, params) {
      const action = {
        types: ['onLoading', 'onSuccess', 'onError'],
        promise: services.getStatus(params)
      }
      actionMiddleware(action, store)
    },
    calcuateAdd ({state, commit, rootState}, params) {
      commit('increment')
    },
    calcuateDEC ({state, commit, rootState}, params) {
      commit('decrement')
    }
  }
}

export default homeVuex

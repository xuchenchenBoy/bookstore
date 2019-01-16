const catalogVuex = {
  state: {
    list: [
      {
        name: 'xxx',
        num: '第一章'
      },
      {
        name: 'xxx',
        num: '第二章'
      }
    ],
    sort: '',
    hasMore: false,
    isNoData: true
  },
  mutations: {
    reverse (state, sort) {
      state.sort = sort
    }
  },
  actions: {
    getNextPage ({ store, state }, params) {

    }
  }
}

export default catalogVuex

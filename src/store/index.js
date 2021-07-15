import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rows: {
      sellerId: null,
      data: []
    },
    uId: '1111145',
    rooturl: 'http://124.93.196.45:10001',
    address: '选择收货地址',
    // token:'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjE4ZjZkOWVlLWMzNDMtNDhkMC1hMWFkLWEyM2QwZjMxODMzNyJ9.7hrsnnfj_CKNkjKwXrLZHdvl9TJyNkzm-jdjP23h0MxI31miAV64d0tQG531CXHtoHwHTntXSRye1pDSteCsZw'
    token:''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

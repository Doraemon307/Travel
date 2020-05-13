import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 导出vuex创建的仓库
export default new Vuex.Store({
  // state用来存储公用的数据
  state,
  mutations
})

/**
 * Created by Jerry on 2017/11/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    footerVisible: true,
    selectedTab: 'main',
    chartType:'客户分类结构'
  },
  mutations: {
    setChartType(state, param){
      state.chartType = param
    },
    [types.TOGGLE_FOOTER] (state) {
      state.footerVisible = !state.footerVisible
    },
    [types.SELECT_TAB](state, val){
      state.selectedTab = val
    }
  }
});
export default store

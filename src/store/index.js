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
    [types.SET_CHART_TYPE](state, param){
      state.chartType = param
    },
    [types.SELECT_FOOTER_TAB] (state, tabName) {
      if (tabName) {
        state.selectedTab = tabName
        state.footerVisible = true
      } else {
        state.footerVisible = false        
      }
    }
  }
});
export default store

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import store from './store/index.js'
//引入echarts
import echarts from 'echarts'

import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {
  locale: 'zh',
  color: 'lightblue', //Set main color
  className: 'selected-day', // (default: 'selected-day')
  weekStartOn: '1'  // Can be: 1, 2, 3, 4, 5, 6, 0 (default: 0)
}) //可以设置语言，支持中文和英文
//引入font-awesome.css
// import 'font-awesome/css/font-awesome.css'
// 暂时从cdn上获取,此issue以后有时间再研究
Vue.prototype.$echarts = echarts;

Vue.use(MintUI);



new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

/*Vue.config.productionTip = false;*/
/*document.addEventListener('deviceready', function() {
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
  })
  window.navigator.splashscreen.hide()
}, false);*/

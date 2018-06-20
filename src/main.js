// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
//引入mint-ui
import MintUI from 'mint-ui'
//引入echarts
import echarts from 'echarts'
//引入日历组件
import vueEventCalendar from 'vue-event-calendar'
//引入mint-ui的样式
import 'mint-ui/lib/style.css'
//引入font-awesome.css
import 'font-awesome/css/font-awesome.css'
//引入日历组件的样式
import 'vue-event-calendar/dist/style.css'
//引入animate.css的样式
import 'animate.css/animate.css'


Vue.prototype.$echarts = echarts;

Vue.use(MintUI);
Vue.use(vueEventCalendar, {
  locale: 'zh', //可以设置语言，支持中文和英文
  color: 'lightblue', //Set main color
  className: 'selected-day', // (default: 'selected-day')
  weekStartOn: '1'  // Can be: 1, 2, 3, 4, 5, 6, 0 (default: 0)
});



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

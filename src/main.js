// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import store from './store/index.js'
//引入echarts
import echarts from 'echarts'
//引入font-awesome.css
// import 'font-awesome/css/font-awesome.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.prototype.$echarts = echarts;

Vue.use(MintUI);



new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
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

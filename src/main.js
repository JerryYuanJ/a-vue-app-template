// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import store from './store/index.js'
import echarts from 'echarts'
import fullscreen from 'vue-fullscreen'
import ElementUI from 'element-ui'


Vue.prototype.$echarts = echarts;

Vue.use(MintUI);
Vue.use(fullscreen);
Vue.use(ElementUI);

/*Vue.config.productionTip = false;*/


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});

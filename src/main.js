// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import { initPlugins, initI18N } from './init-plugins'
//init the third-party plugins
//初始化第三方的组件
initPlugins();
//get i18n object
const i18n = initI18N('zh');

new Vue({
  el: '#app',
  router,
  i18n,
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

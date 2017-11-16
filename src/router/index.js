import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/main.vue'
import Tool from '../pages/tool.vue'
import My from '../pages/my.vue'
import Memo from '../pages/tool/memo.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/main', component: Main
    }, {
      path: '/tool', component: Tool
    }, {
      path: '/my', component: My
    }, {
      path: '/tool/memo', component: Memo
    }
  ]
})

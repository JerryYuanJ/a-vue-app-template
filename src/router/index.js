import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/main.vue'
import Tool from '../pages/tool.vue'
import My from '../pages/my.vue'
import MemoNew from '../pages/tool/memonew.vue'
import MemoList from '../pages/tool/memolist.vue'
import Loadmore from '../pages/tool/Loadmore.vue'
import MyInfo from '../pages/my/MyInfo.vue'
import Workflow from '../pages/tool/Workflow.vue'


/**
 * 图表
 */
const chartBox = r => require.ensure([], () => r(require('../pages/tool/chart/chartBox')), 'chartBox')
const CustomerCategory = r => require.ensure([], () => r(require('../pages/tool/chart/CustomerCategory')), 'CustomerCategory')
const MonthlySalesStatistics = r => require.ensure([], () => r(require('../pages/tool/chart/MonthlySalesStatistics')), 'MonthlySalesStatistics')
const MonthlyTask = r => require.ensure([], () => r(require('../pages/tool/chart/MonthlyTask')), 'MonthlyTask')
const OppFunnel = r => require.ensure([], () => r(require('../pages/tool/chart/OppFunnel')), 'OppFunnel')
const SaleRank = r => require.ensure([], () => r(require('../pages/tool/chart/SaleRank')), 'SaleRank')


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', component: Main
    },
    {
      path: '/main', component: Main
    }, {
      path: '/tool', component: Tool
    }, {
      path: '/my', component: My
    }, {
      path: '/tool/memonew', component: MemoNew
    }, {
      path: '/tool/memolist', component: MemoList
    },
    {
      path: '/tool/loadmore', component: Loadmore
    },
    {
      path: '/my/myinfo', component: MyInfo
    },
    {
      path: '/tool/workflow', component: Workflow
    },
    {
      path: '/chartBox',
      name: 'chartBox',
      component: chartBox,
      children: [
        {
          name:'CustomerCategory',
          path: 'CustomerCategory',
          component: CustomerCategory
        },
        {
          name:'MonthlySalesStatistics',
          path: 'MonthlySalesStatistics',
          component: MonthlySalesStatistics
        },
        {
          name:'MonthlyTask',
          path: 'MonthlyTask',
          component: MonthlyTask
        },
        {
          name:'OppFunnel',
          path: 'OppFunnel',
          component: OppFunnel
        },
        {
          name:'SaleRank',
          path: 'SaleRank',
          component: SaleRank
        }
      ]
    },
  ]
})

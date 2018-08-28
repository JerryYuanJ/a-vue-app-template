import Vue from 'vue'
import Router from 'vue-router'

// 直接加载
import Main from '../pages/main.vue'
import Tool from '../pages/tool.vue'
import My from '../pages/my.vue'

import ComponentsRouter from './modules/components'

// 按需加载 ： 使用import() 实现
//指定同一个chunkName打包后会打到同一个js中去
const MemoNew = () => import(/* webpackChunkName: 'memo' */'../pages/tool/memo/memonew.vue');
const MemoList = () => import(/* webpackChunkName: 'memo' */'../pages/tool/memo/memolist.vue');

const Loadmore = () => import(/* webpackChunkName: 'Loadmore' */'../pages/tool/Loadmore.vue');
const MyInfo = () => import(/* webpackChunkName: 'MyInfo' */'../pages/my/MyInfo.vue');
const OtherTest = () => import(/* webpackChunkName: 'Other' */'../pages/tool/OtherTest.vue');

// 按需加载：使用require()实现
/**
 * 图表
 */
const chartBox = r => require.ensure([], () => r(require('../pages/tool/chart/chartBox')), 'chartBox')
const CustomerCategory = r => require.ensure([], () => r(require('../pages/tool/chart/CustomerCategory')), 'CustomerCategory')
const MonthlySalesStatistics = r => require.ensure([], () => r(require('../pages/tool/chart/MonthlySalesStatistics')), 'MonthlySalesStatistics')
const MonthlyTask = r => require.ensure([], () => r(require('../pages/tool/chart/MonthlyTask')), 'MonthlyTask')
const OppFunnel = r => require.ensure([], () => r(require('../pages/tool/chart/OppFunnel')), 'OppFunnel')
const SaleRank = r => require.ensure([], () => r(require('../pages/tool/chart/SaleRank')), 'SaleRank')
/*sassTest*/
const SassTest = r => require.ensure([], () => r(require('../pages/tool/SassTest')), 'SassTest')
/*日历组件测试 */
const CalendarTest = r => require.ensure([], () => r(require('../pages/tool/CalendarTest')), 'CalendarTest')
/*国际化测试 */
const I18NTest = r => require.ensure([], () => r(require('../pages/tool/I18NTest')), 'I18NTest')
/*富文本测试 */
const RichTextTest = r => require.ensure([], () => r(require('../pages/tool/RichTextTest')), 'RichTextTest')


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', name: 'home', component: Main
    },
    {
      path: '/main', name: 'main', component: Main
    }, 
    {
      path: '/tool', name: 'tool', component: Tool
    },
    {
      path: '/my', name: 'my', component: My
    },
    {
      path: '/tool/memonew', name: 'memo-new', component: MemoNew
    },
    {
      path: '/tool/memolist', name: 'memo-list', component: MemoList
    },
    {
      path: '/tool/loadmore', name: 'loadmore', component: Loadmore
    },
    {
      path: '/my/myinfo', name: 'my-info', component: MyInfo
    },
    {
      path: '/tool/otherTest', name: 'other-test', component: OtherTest
    },
    {
      path: '/tool/sassTest', name: 'sass-test', component: SassTest
    },
    {
      path: '/tool/calendarTest', name: 'calendar-test', component: CalendarTest
    },
    {
      path: '/tool/I18NTest', name: 'i18n-test' ,component: I18NTest
    },
    {
      path: '/tool/richText', name: 'rich-text', component: RichTextTest
    },
    {
      path: '/chartBox',
      name: 'chartBox',
      component: chartBox,
      children: [
        {
          name: '',
          path: '',
          component: CustomerCategory
        },
        {
          name: 'CustomerCategory',
          path: 'CustomerCategory',
          component: CustomerCategory
        },
        {
          name: 'MonthlySalesStatistics',
          path: 'MonthlySalesStatistics',
          component: MonthlySalesStatistics
        },
        {
          name: 'MonthlyTask',
          path: 'MonthlyTask',
          component: MonthlyTask
        },
        {
          name: 'OppFunnel',
          path: 'OppFunnel',
          component: OppFunnel
        },
        {
          name: 'SaleRank',
          path: 'SaleRank',
          component: SaleRank
        }
      ]
    },
    ...ComponentsRouter
  ]
})

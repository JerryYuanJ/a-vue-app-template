/**
 * author: Jerry
 * creationDate: 2018/4/14
 * usage:组件的测试页面的路由，以模块化思想将路由分类，最后导出到一个index中
 */

const PullToRefreshPage = () => import(/* webpackChunkName: 'PullToRefreshPage' */'../../pages/test/PullToRefreshPage');
const SelectHeader = () => import(/* webpackChunkName: 'SelectHeaderPage' */'../../pages/test/SelectHeaderPage');
export default [
  {
    path: '/test/refresh', component: PullToRefreshPage
  },
  {
    path: '/test/selectHeader', component: SelectHeader
  },
]

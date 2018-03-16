<!--
    @CreationDate:2018/3/16
    @Author:Joker
    @Usage:
-->
<template>
  <div class="pull-to-refresh-page-app">
    <mt-header fixed title="下拉刷新组件测试">
      <router-link to="/tool" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="pull-content">
        <pull-to-refresh></pull-to-refresh>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .pull-to-refresh-page-app {
    .pull-content {

    }
  }
</style>
<script>

  import PullToRefresh from '../../components/PullToRefresh'

  export default {
    name: 'PullToRefreshPage',
    components:{
      PullToRefresh
    }
  }
</script>

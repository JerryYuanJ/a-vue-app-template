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
      <pull-to-refresh @load="load">
        <div v-for="i in players" class="list-item">
          {{ i }}
        </div>
      </pull-to-refresh>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .pull-to-refresh-page-app {
    .pull-content {
      .list-item {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ffffff;
        padding-left: 5px;
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
</style>
<script>

  import PullToRefresh from '../../components/PullToRefresh'

  export default {
    name: 'PullToRefreshPage',
    components: {
      PullToRefresh
    },
    data(){
      return {
        players: ['kobe', 'fisher', 'jordan', 'shark', 'duncun']
      }
    },
    methods: {
      load(resolve){
        setTimeout(() => {
          for (let i = 0; i < 4; i++) {
            this.players.unshift('player No.' + Math.floor(Math.random() * 10) + 1);
          }
          resolve();
        }, 1000)
      }
    }
  }
</script>

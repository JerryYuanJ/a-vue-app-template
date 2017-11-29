<template>
  <div id="loadmore">
    <mt-header fixed title="Loadmore">
      <router-link to="/tool" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-loadmore :top-method="loadTop" :bottom-all-loaded="bottomAllLoaded" :auto-fill="false"
                   @top-status-change="handleTopChange"
                   :bottom-method="loadBottom" ref="loadmore">

        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus === 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'drop'">我在加载数据</span>
          <span v-show="topStatus === 'pull'">下拉我就更新给你看</span>
        </div>

        <mt-cell v-for="(item,index) in list" :title="item+'s'" :key="index"></mt-cell>
      </mt-loadmore>

    </div>
  </div>
</template>
<style scoped>
  .content {
    margin-top: 40px;
    height: auto;
  }
</style>
<script>
  export default {
    data(){
      return {
        bottomAllLoaded: false,
        topStatus: '',
        list: []
      }
    },
    methods: {
      loadTop(){
        let that = this;
        for (let i = 0; i < 10; i++) {
          this.list.unshift('unshift' + i)
        }
        setTimeout(function () {
          that.$refs.loadmore.onTopLoaded();
        }, 1000)

      },
      loadBottom(){
        for (let i = 0; i < 10; i++) {
          this.list.push('push' + i)
        }
        if (this.list.length > 100) {
          this.bottomAllLoaded = true;
        }
        this.$refs.loadmore.onBottomLoaded();
      },
      handleTopChange(status){
        console.info(status)
        this.topStatus = status;
      }
    },
    mounted(){
      for (let i = 0; i < 40; i++) {
        this.list.push(i)
      }
    }
  }
</script>

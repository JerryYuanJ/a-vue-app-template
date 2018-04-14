<template>
  <div id="loadmore">
    <mt-header fixed title="Loadmore使用案例">
      <router-link to="/tool" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-loadmore style="min-height: 100%;overflow: auto"
        :top-method="loadTop"
                   :bottom-all-loaded="bottomAllLoaded"
                   :auto-fill="false"
                   @bottom-status-change="handleBottomChange"
                   @top-status-change="handleTopChange"
                   :bottom-method="loadBottom" ref="loadmore">

        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus === 'loading'">
            数据加载中<i class="fa fa-spinner fa-pulse"></i>
          </span>
          <span v-show="topStatus === 'drop'">我在加载数据</span>
          <span v-show="topStatus === 'pull'">下拉我就更新给你看</span>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom" v-show="!bottomAllLoaded">
          <span v-show="bottomStatus === 'drop'">释放更新</span>
          <span v-show="bottomStatus === 'pull'">上拉加载更多</span>
          <span v-show="bottomStatus === 'loading'">
            数据加载中<i class="fa fa-spinner fa-pulse"></i>
          </span>
        </div>
        <mt-cell-swipe
          @click.native="clickMe"
          v-for="(item,index) in list"
          :right="[
              {content: '发布',style: {background: 'red', color: '#fff', textAlign: 'center'},handler(){release(index)}},
              {content: '删除',style: {background: 'green', color: '#fff', textAlign: 'center'},handler(){delete1(index)}}
          ]"
          :title="item+'s'"
          :key="index">
        </mt-cell-swipe>
        <!--<mt-cell v-for="(item,index) in list" :title="item+'s'" :key="index"></mt-cell>-->
      </mt-loadmore>

    </div>
  </div>
</template>
<style lang="scss">
  .content {
    margin-top: 40px;
    height: auto;
    .mint-cell-wrapper{
      border-bottom: 1px solid #eaeaea;
    }
  }
</style>
<script>
  import {Toast} from 'mint-ui'

  export default {
    data(){
      return {
        bottomAllLoaded: false,
        topStatus: '',
        bottomStatus:'',
        list: []
      }
    },
    methods: {
      release(val){
        console.info('release:' + val)
      },
      delete1(val){
        console.info('delete:' + val)
      },
      clickMe(){
        console.info('click me')
      },
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
        for (let i = 0; i < 2; i++) {
          this.list.push('push' + i)
        }
        if (this.list.length > 100) {
          this.bottomAllLoaded = true;
        }
        this.$refs.loadmore.onBottomLoaded();
      },
      handleTopChange(status){
        this.topStatus = status;
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
    },
    mounted(){
      for (let i = 0; i < 10; i++) {
        this.list.push(i)
      }
    },
    created(){
      let _footer = this.$store.state.footerVisible;
      if (_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    }
  }
</script>

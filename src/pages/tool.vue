<template>
  <div id="tool">
    <!--头部-->
    <mt-header fixed title="应用中心"></mt-header>
    <!---内容区域-->
    <div class="content">
      <!--图片轮播展示-->
      <div class="slider-img">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="../assets/tool/swipe1.jpg" height="120" width="100%"/>
          </mt-swipe-item>
          <mt-swipe-item><img src="../assets/tool/swipe2.jpg" height="120" width="100%"/></mt-swipe-item>
          <mt-swipe-item><img src="../assets/tool/swipe3.jpg" height="120" width="100%"/></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="group-title">| - 常用应用</div>
      <!--一条分割线-->
      <div class="line"></div>
      <!--应用展示-->
      <div class="apps">
        <div @click="go('chart')">
          <img src="static/chart.png"/>
          <span>业务统计</span>
        </div>
        <div @click="go('loadmore')">
          <img src="static/data.png"/>
          <span>测试数据</span>
        </div>
        <div @click="go('memolist')">
          <img src="static/note.png"/>
          <span>我的备忘</span>
        </div>
        <div @click="go('workflow')">
          <img src="static/workflow.png"/>
          <span>工作流</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

  .mint-button {
    display: flex;
    flex-direction: column;
  }

  .content {
    margin-top: 40px;
    text-align: left;
  }

  .group-title {
    margin-top: 10px;
    font-size: 11px;
    color: #0c60ee;
  }

  .line {
    margin-top: 10px;
    height: 1px;
    background-color: #c4e3f3;
  }

  .apps {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .apps div {
    display: flex;
    height: 70px;
    width: 70px;
    justify-content: center;
    align-items: center;
  }

  .apps div {
    display: flex;
    flex-direction: column;
  }

  .apps div span {
    margin-top: 5px;
    font-size: 10px;
  }

  .apps img {
    height: 40px;
    width: 40px;
  }

  .slider-img {
    height: 120px;
    width: 100%;
  }
</style>
<script>
  export default {
    methods: {
      go(index){
        this.$router.push('/tool/' + index);
      }
    },
    created(){
      let _footer = this.$store.state.footerVisible;
      if (!_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
      this.$store.commit('SELECT_TAB', 'tool')
    }
  }
</script>

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
      <div class="group-title">常用测试</div>
      <!--一条分割线-->
      <div class="line"></div>
      <!--应用展示-->
      <div class="apps">
        <div @click="go('/chartBox')">
          <img src="../assets/tool/chart.png"/>
          <span>统计图表</span>
        </div>
        <div @click="go('/tool/loadmore')">
          <img src="../assets/tool/data.png"/>
          <span>加载更多</span>
        </div>
        <div @click="go('/tool/memolist')">
          <img src="../assets/tool/note.png"/>
          <span>我的备忘</span>
        </div>
        <div @click="go('/tool/otherTest')">
          <img src="../assets/tool/workflow.png"/>
          <span>其它测试</span>
        </div>
      </div>

      <div class="apps">
        <div @click="go('/tool/sassTest')">
          <img src="../assets/tool/css3.png"/>
          <span>Sass测试</span>
        </div>
        <div @click="go('/tool/I18NTest')">
          <img src="../assets/tool/i18n.png"/>
          <span>国际化测试</span>
        </div>
        <div @click="go('/tool/calendarTest')">
          <img src="../assets/tool/calendar.png"/>
          <span>日历测试</span>
        </div>
        <div @click="go('/tool/richText')">
          <img src="../assets/tool/editor.png"/>
          <span>富文本测试</span>
        </div>
      </div>
    </div>

    <div class="group-title">自定义组件</div>
    <div class="line"></div>
    <div class="apps">
      <div @click="go('/test/refresh')">
        <img src="../assets/tool/refresh.png"/>
        <span>下拉刷新</span>
      </div>
      <div @click="go('/test/selectHeader')">
        <img src="../assets/components/select.png"/>
        <span>SelectHeader</span>
      </div>
      <div></div>
      <div></div>
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
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    color: #0c60ee;
    padding-left: 5px;
    border-left: 5px solid #0c60ee;
  }

  .line {
    margin-top: 5px;
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
    width: 25%;
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
        this.$router.push(index);
      }
    }
  }
</script>

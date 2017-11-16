<template>
  <div id="tool">
    <mt-header fixed title="应用中心"></mt-header>
    <div class="content">
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
      <div class="line"></div>
      <div class="apps">
        <div @click="go('app',$event)">
          <img src="static/app.png"/>
          <span>生活助手</span>
        </div>
        <div @click="go('bed',$event)">
          <img src="static/bed.ico"/>
          <span>住宿申请</span>
        </div>
        <div @click="go('hr',$event)">
          <img src="static/hr.png"/>
          <span>资源查询</span>
        </div>
        <div @click="go('note',$event)">
          <img src="static/note.png"/>
          <span>我的备忘</span>
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
      handleChange(){
        console.info('change')
      },
      go(index, $event){
        if (index === 'note') {
          this.$router.push('/tool/memo');
        }
        console.info(`click ${index}`);
        console.info($event.target)
      }
    },
    created(){
       let _footer = this.$store.state.footerVisible;
      if (!_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    }
  }
</script>

<template>
  <div id="my">
    <mt-header fixed title="个人中心"></mt-header>
    <div class="content">
      <div class="user-head">
        <div class="user-img">
        </div>
        <div class="right-arrow">
          <img src="../assets/my/right.png" height="10" width="10"/>
        </div>
      </div>
      <div class="user-option">
        <mt-cell is-link>
          <span slot="title">设置</span>
          <img slot="icon" src="../assets/my/setting.png" width="20" height="20">
        </mt-cell>
        <mt-cell>
          <span slot="title">关于</span>
          <span>当前版本V1.0</span>
          <img slot="icon" src="../assets/my/info.png" width="20" height="20">
        </mt-cell>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .content {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  }

  .user-head {
    height: 100px;
    width: 100%;
    background-color: #73ccff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-img {
    background-image: url("../assets/my/user.jpg");
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: solid #ffffff 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-option {
    background-color: #dbdbdb;
  }

  .mint-cell {
    min-height: 40px;
  }

  .right-arrow{
    margin-left: 10px;
  }

  .user-option span {
    font-size: 13px;
  }

  .mint-cell:last-child {
    background-position-x: 10px;
  }


</style>
<script>
  export default {
    created(){
      let _footer = this.$store.state.footerVisible;
      if (!_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    }
  }
</script>

<!--
    @CreationDate:2018/3/16
    @Author:Joker
    @Usage: sass使用测试界面
-->
<template>
  <div class="sass-test">
    <mt-header fixed title="Sass测试界面">
      <router-link to="/tool" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="sass-content">
      <div class="s1">你好</div>
      <div class="s2">你好</div>
      <div class="s3">你好</div>
      <div class="s4">你好</div>
    </div>
  </div>
</template>
<style scoped lang="scss">

  @import "../../assets/css/common";

  .sass-test {
    .sass-content {
      margin-top: 40px;
      .s1 {
        font-size: $fontTitleColor;
      }
      .s2 {
        @include commonCell
      }
      .s3 {
        @include commonCell(#55ff22)
      }
      .s4 {
        @include commonCell;
        color: darken(red, 20%);
      }
    }
  }
</style>
<script>
  export default {
    name: 'sassTest',
    created(){
      let _footer = this.$store.state.footerVisible;
      if (_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    }
  }
</script>

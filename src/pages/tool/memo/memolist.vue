<template>
  <div id="memo-list">
    <mt-header fixed title="我的备忘列表">
      <router-link to="/tool" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" @click="newMemo"><i class="fa fa-plus"></i></mt-button>
    </mt-header>
    <div class="content">
      <template v-for="(item,index) in memoList">
        <mt-cell isLink @click.native="showDetail(item)">
          <span slot="title">{{item.title}}</span>
          <span>{{item.content}}</span>
        </mt-cell>
      </template>
    </div>
  </div>
</template>
<style scoped>
  .content {
    margin-top: 40px;
  }

  span {
    font-size: 13px;
    /**设置文字超出元素宽度后的省略号**/
    width: 150px; /*必须设置宽度*/
    overflow: hidden; /*溢出隐藏*/
    text-overflow: ellipsis; /*以省略号...显示*/
    white-space: nowrap; /*强制不换行*/
  }
</style>
<script>
  import {MessageBox} from 'mint-ui';

  export default {
    created(){
      let _footer = this.$store.state.footerVisible;
      if (_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    },
    methods: {
      newMemo(){
        this.$router.push('/tool/memonew');
      },
      showDetail(item){
        MessageBox(item.title, item.content);
      }
    },
    mounted(){

    },
    data(){
      return {
        memoList: [{
          title: '周报',
          content: '周五之前记得提交周报和周总结周五之前记得提交周报和周总结周五之前记得提交周报和周总结周五之前记得提交周报和周总结周五之前记得提交周报和周总结'
        }, {title: '锻炼提醒', content: '晚上记得三俯卧撑'}]
      }
    }
  }
</script>

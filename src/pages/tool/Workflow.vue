<!--
    @CreationDate:2017/12/16
    @Author:袁杰
    @Function:工作流测试界面
-->
<template>
  <div id="work-flow">

    <my-tab :selectedIndex="selectTabIndex" @select="selectTab" :textField="textField" :valueField="valueField"
            :tabData="tabData"></my-tab>

    <div class="approve-bar">
      <div plain size="small" class="approve-bar-yes" @click="approve('y')">同意</div>
      <div plain size="small" class="approve-bar-no" @click="approve('n')">拒绝</div>
      <div plain size="small" class="approve-bar-back" @click="approve('b')">回退</div>
      <div plain size="small" class="approve-bar-abort" @click="approve('s')">终止</div>
    </div>
  </div>
</template>
<style>
  .approve-bar {
    display: flex;
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background-color: whitesmoke;
  }

  .approve-bar-yes {
    color: green;
    width: 25%;
    text-align: center;
    height: 100%;
    line-height: 50px;
  }

  .approve-bar-no {
    color: red;
    width: 25%;
    text-align: center;
    height: 100%;
    line-height: 50px;
  }

  .approve-bar-back {
    color: blue;
    width: 25%;
    text-align: center;
    height: 100%;
    line-height: 50px;
  }

  .approve-bar-abort {
    color: maroon;
    width: 25%;
    text-align: center;
    height: 100%;
    line-height: 50px;
  }

  input {
    height: 30px;
  }
</style>
<script>

  import Tabbar from '../../components/Tabbar'
  import {Toast, Indicator, MessageBox} from 'mint-ui';

  export default {
    data(){
      return {
        selectTabIndex: 0,
        textField: 'text',
        valueField: 'id',
        tabData: [{text: '湖人', id: '01'}, {text: '勇士', id: '02'}, {text: '火箭', id: '03'}, {text: '尼克斯', id: '04'}]
      }
    },
    components: {
      'my-tab': Tabbar
    },
    created(){
      let _footer = this.$store.state.footerVisible;
      if (_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    },
    methods: {
      selectTab(tabIndex){
        console.info('select ' + tabIndex);
        if (tabIndex === 'all') {
          this.selectTabIndex = -1
        } else {
          this.selectTabIndex = tabIndex
        }

      },
      approve(flag){
        switch (flag) {
          case 'y':
            MessageBox.confirm('确认同意?', '提示').then(() => {
            }, () => {
            });
            break;
          case 'n':
            MessageBox.prompt('请输入拒绝原因', '', {closeOnClickModal: false}).then(({value}) => {
              console.info('原因为:' + value)
            }, () => {

            });
            break;
          case 'b':
            MessageBox.prompt('请输入回退原因', '', {closeOnClickModal: false}).then(({value}) => {
              console.info('原因为:' + value)
            }, () => {

            });
            break;
          case 's':
            MessageBox.prompt('请输入终止原因', '', {closeOnClickModal: false}).then(({value}) => {
              console.info('原因为:' + value)
            }, () => {

            });
            break;
          default:
            break
        }
      }
    }
  }
</script>

<template>
  <div id="index">
    <mt-header fixed title="首页"></mt-header>
    <div class="content">
      <mt-cell-swipe
        :right="right"
        title="未读通知">
        <span><mt-badge type="error">10</mt-badge></span>
      </mt-cell-swipe>

      <mt-cell title="请选择英雄">
        <div @click="choose">{{chooseText}}</div>
      </mt-cell>


      <mt-button type="danger" size="small" @click="showDialog">测试Dialog</mt-button>


      <single-selector :popupVisible="showPop" :slotsData="sData" @toggle="toggleSelector"
                       :valueKey="valueKey"></single-selector>

    </div>
  </div>
</template>
<style scoped>


  .content {
    margin-top: 40px;
  }

  .el-table td, .el-table th {
    padding: 0;
  }
</style>
<script>
  import {Toast} from 'mint-ui';
  import SingleSelector from '../components/singleSelector.vue'
  import DialogUtil from '../common/DialogUtil'

  export default {
    methods: {
      showDialog(){
        DialogUtil.showPrompt('请输入密码',function (v1, v2) {
          console.info('value='+v1+';action='+v2)
        })
      },
      toggle(){
        this.showCheckbox = !this.showCheckbox;
        this.showOperator = !this.showOperator;
      },
      choose(){
        this.showPop = true
      },
      toggleSelector(text, value){
        this.showPop = false;
        this.chooseText = text;
        this.chooseValue = value
      }
    },
    components: {
      SingleSelector
    },
    data(){
      return {
        showOperator: true,
        showCheckbox: false,
        valueKey: 'text',
        showPop: false,
        chooseText: '请选择',
        chooseValue: '',
        sData: [
          {
            flex: 1,
            values: [
              {id: 100, text: '美国队长'}, {id: 101, text: '钢铁侠'}, {id: 103, text: '绿巨人'},
              {id: 104, text: '幻视'}, {id: 105, text: '猩红女巫'}, {id: 106, text: '洛基'},
              {id: 107, text: '雷神'}, {id: 108, text: '鹰眼'}],
            className: 'slot1',
            textAlign: 'center'
          }
        ],
        right: [
          {
            content: '删除',
            style: {background: 'red', color: '#fff', width: '50px', textAlign: 'center'},
            handler: () => this.$messagebox({
              title: '提示',
              message: '确定执行此操作?',
              showCancelButton: true
            }).then((action) => {
              if (action === 'confirm') {
                Toast({message: '删除成功'})
              } else {

              }
            })
          }
        ]
      }
    },
    created(){
      let _footer = this.$store.state.footerVisible;
      if (!_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
      this.$store.commit('SELECT_TAB', 'main')
    }
  }
</script>

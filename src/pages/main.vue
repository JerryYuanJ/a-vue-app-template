<template>
  <div id="index">
    <mt-header fixed title="首页"></mt-header>
    <div class="content">
      <mt-cell-swipe
        :right="right"
        title="未读通知">
        <span><mt-badge type="error">10</mt-badge></span>
      </mt-cell-swipe>

      <div class="line-divider"></div>



    </div>
  </div>
</template>
<style scoped>


  .content {
    margin-top: 40px;
  }

</style>
<script>
  import {Toast, MessageBox} from 'mint-ui';
  import SingleSelector from '../components/singleSelector.vue'
  import DialogUtil from '../common/DialogUtil'

  export default {
    methods: {
      showDialog(){
        DialogUtil.showPrompt('请输入密码', function (v1, v2) {
          console.info('value=' + v1 + ';action=' + v2)
        })
      },
      showPrompt(){
        let that = this;
        //inputPattern: /^\d+$/
        MessageBox.prompt('请输入密码', {
          inputValidator: (val) => {
            if (val === null) {
              return true;//初始化的值为null，不做处理的话，刚打开MessageBox就会校验出错，影响用户体验
            }
            return !(val.length < 6 || val.length > 8)
          }, inputErrorMessage: '密码长度必须在6~8位'
        }).then((val) => {
          console.info('confirm,value is' + val.value)
        }, () => {
          console.info('cancel')
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
        errMsg: '请输入正确的内容',
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

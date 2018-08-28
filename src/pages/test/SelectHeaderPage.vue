<!--
    @CreationDate:2018/4/3
    @Author:Jerry
    @Usage: SelectHeader的使用界面
-->
<template>
  <div class="select-header-page">
    <select-header :options="headerOption1" @selectOption="clickOp1"
                   tipTitle="请选择类型">
      <div slot="left" @click="goBack">
        <i class="fa fa-chevron-left"></i>
      </div>
      <div slot="right">
        <i class="fa fa-cog"></i>
      </div>
    </select-header>
    <div class="content-box">
      {{ '选择了:' + op1Text }}
    </div>
    <div class="divider-line"></div>
    <select-header :options="headerOption2" @selectOption="clickOp2" textColor="blue" bgColor="#79CDCD55">
      <div slot="left" @click="goBack">返回</div>
      <div slot="right">
        <i class="fa fa-plus"></i>
      </div>
    </select-header>
    <div class="content-box">
      {{ '选择了:' + op2Text }}
    </div>
  </div>
</template>
<style scoped lang="scss">

  .select-header-page {
    .divider-line {
      height: 100px;
    }

  }
</style>
<script>

  import SelectHeader from '../../components/coms/select-header.vue'

  export default {
    name: 'SelectHeaderPage',
    components: {
      SelectHeader
    },
    data(){
      return {
        headerOption1: [{text: '收入', value: 1}, {text: '支出', value: 2}],
        headerOption2: [{text: '洛杉矶湖人', value: 1}, {text: '休斯顿火箭', value: 2}, {text: '金州勇士', value: 3}],
        op1Text: '',
        op2Text: ''
      }
    },
    created(){
      let _footer = this.$store.state.footerVisible;
      if (_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    },
    methods: {
      clickOp1(item){
        this.op1Text = item.text;
      },
      clickOp2(item){
        this.op2Text = item.text;
      },
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

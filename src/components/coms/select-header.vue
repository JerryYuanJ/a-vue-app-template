<!--
    @CreationDate:2018/3/29
    @Author:Joker
    @Usage:带下拉框的header,但是也可以作为普通的header使用
-->
<template>
  <div class="select-header">

    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center" @click="toggleOptions">
      <div class="center-text">{{title}}</div>
      <span><i :class="['fa',arrow]"></i></span>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>

    <transition enterActiveClass="animated zoomIn" leaveActiveClass="animated zoomOut">
      <div v-if="showOptions" class="option-box">
        <span class="option-arrow" :style="{borderBottomColor:bgColor}"></span>
        <template v-for="(item,index) in options">
          <div  :key="index" class="option-item" @click="clickOption(item)"
               :style="{backgroundColor:bgColor,color:textColor}">
            {{item.text}}
          </div>
        </template>
      </div>
    </transition>

  </div>
</template>
<style scoped lang="scss">
  @import "../../assets/css/common";

  .select-header {

    .animated {
      animation-duration: 0.5s;
    }

    position: relative;
    @include alignCenter('block');
    height: $header-height;
    background-color: $header-bg-color;
    justify-content: space-between;
    padding: 0 10px;
    color: white;

    .center {
      display: flex;
      align-items: center; 
      .center-text {
        float: left;
        margin-right: 3px;
        @include textOverflow(150px);
      }
    }
    .option-box {
      z-index: 9999999;
      @include alignCenter('block');
      position: absolute;
      top: 45px;
      color: red;
      width: 50%;
      left: 25%;
      flex-direction: column;
      .option-arrow {
        margin-top: -20px;
        z-index: 99999;
        @include triangle('bottom', 10px, rgba(#EAEAEA, 0.5));
      }
      .option-item {
        background-color: rgba(#EAEAEA, 0.5);
        width: 100%;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #EAEAEA;
      }
      :nth-child(2) {
        border-radius: 5px 5px 0 0;
      }
      :last-child {
        border-radius: 0 0 5px 5px;
      }
    }
  }
</style>
<script>
  export default {
    name: 'SelectHeader',
    data(){
      return {
        arrow: 'fa-angle-down',
        arrowDown: 'fa-angle-down',
        arrowUp: 'fa-angle-up',
        showOptions: false,
        title: '请选择'
      }
    },
    props: {
      options: {
        type: Array,
        required: true
      },
      tipTitle: {
        type: String
      },
      bgColor: {
        type: String,
        default: '#878787'
      },
      textColor: {
        type: String,
        default: 'white'
      }
    },
    methods: {
      toggleOptions(){
        this.arrow === this.arrowDown ? this.arrow = this.arrowUp
          : this.arrow = this.arrowDown;
        this.showOptions = !this.showOptions
      },
      clickOption(item){
        this.$emit('selectOption', item);
        this.toggleOptions();
        this.title = item.text
      }
    }
  }
</script>

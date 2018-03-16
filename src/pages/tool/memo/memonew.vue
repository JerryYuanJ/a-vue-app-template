<template>
  <div id="memo">
    <mt-header fixed title="我的备忘">
      <router-link to="/tool/memolist" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" @click="saveMemo">保存</mt-button>
    </mt-header>
    <div class="content">
      <mt-field label="标题" v-model="title"></mt-field>
      <mt-field label="是否提醒">
        <mt-switch v-model="isRemind"></mt-switch>
      </mt-field>
      <mt-cell title="提醒时间" v-show="isRemind">
        <div @click="chooseDatetime">{{dateTimeText}}</div>
      </mt-cell>
      <mt-field class="memo-content" placeholder="备忘录" type="textarea" rows="8" v-model="content"></mt-field>
      <mt-datetime-picker
        @confirm="confirm"
        ref="picker"
        type="datetime"
        v-model="datetime">
      </mt-datetime-picker>
    </div>
  </div>
</template>
<style scoped>
  .content {
    margin-top: 40px;
  }

  .mint-cell {
    min-height: 40px;
  }

  .memo-content {
    border-bottom: 1px solid #b9def0;
  }
</style>
<script>
  import * as types from '../../../store/index.js'

  export default {
    data(){
      return {
        title: '',
        content: '',
        datetime: '',
        dateTimeText: '请选择提醒时间',
        isRemind: false
      }
    },
    created(){
      let _footer = this.$store.state.footerVisible;
      if (_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    },
    methods: {
      chooseDatetime(){
        this.$refs.picker.open();
      },
      confirm(val){
        this.dateTimeText = val.toLocaleString()
      },
      saveMemo(){
        localStorage.setItem('memo', JSON.stringify({
          title: this.title,
          content: this.content,
          dateTime: this.dateTimeText
        }));
        console.info(localStorage.getItem('memo'))
      }
    }
  }
</script>

<template>
  <div class="my-info">
    <mt-header fixed title="我的个人信息">
      <router-link to="/my" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="content">
      <mt-cell title="姓名">
        <span>{{my.name}}</span>
      </mt-cell>
      <mt-cell title="性别">
        <span>{{my.gender}}</span>
      </mt-cell>
      <mt-cell title="年龄">
        <span>{{my.age}}</span>
      </mt-cell>
      <mt-cell title="部门">
        <span>{{my.dept}}</span>
      </mt-cell>
      <mt-cell title="职位">
        <span>{{my.job}}</span>
      </mt-cell>
      <mt-cell title="级别">
        <span>{{my.level}}</span>
      </mt-cell>
      <mt-cell title="入职日期">
        <span>{{my.joinDate}}</span>
      </mt-cell>
      <mt-cell title="联系方式">
        <span>{{my.tel}}</span>
      </mt-cell>
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
  span{
    font-size: 13px;
  }
</style>
<script>
  import axios from 'axios';

  export default {
    data(){
      return {
        my: {
          name: 'aa'
        }
      }
    },
    methods: {
      getUser(){
        let that = this;
        axios.get('/api/my').then((res) => {
          that.my = res.data.data
        });
      }
    },
    mounted(){
      this.getUser();
    },
    created(){
      let _footer = this.$store.state.footerVisible;
      if (_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    }
  }
</script>

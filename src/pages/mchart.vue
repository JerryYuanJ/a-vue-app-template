<!--
    @CreationDate:2018/3/14
    @Author:Joker
    @Usage:测试crm的图表及菜单
-->
<template>
  <div class="chart-1">
    <mt-header fixed title="左侧菜单+图表测试" style="z-index: 99">
        <span slot="left">
            <img src="../assets/chart/menu.png" width="20" @click="toggleMenu"/>
        </span>
    </mt-header>

      <div class="chart-content">
        <div class="card-box">
          <div class="card">
            <div>新增转正客户</div>
            <div>1</div>
          </div>
          <div class="card" style="background-color: orange">
            <div>新增流失客户</div>
            <div>42</div>
          </div>
        </div>
        <div class="card-box">
          <div class="card" style="background-color: darkseagreen">
            <div>新增工作任务</div>
            <div>3</div>
          </div>
          <div class="card" style="background-color: burlywood">
            <div>新增商机数量</div>
            <div>25</div>
          </div>
        </div>
      </div>

  </div>
</template>
<style scoped>

  .left-menu ul{
    margin-top: 60px;
    margin-left: -40px;
  }

  .left-menu li:hover {
    background-color: #73ccff;
  }
  .left-menu li {
    border-bottom: 1px solid #f5f5f5;
    height: 50px;
    line-height: 50px;
    list-style: none;
    background-color: #dbdbdb;
  }

  .card-box {
    padding-top: 20px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
  }

  .card {
    border-radius: 10px;
    width: 44%;
    height: 70px;
    background-color: #b9def0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .left-menu {
    left: 0;
    top: 0;
    z-index: 97;
    position: fixed;
    background-color: #b9def0;
    width: 70%;
    height: calc(100% - 55px);
    text-align: left;
  }

  .chart-content {
    margin-top: 60px;
  }
</style>
<script>
  export default {
    data(){
      return {menuShow: false}
    },
    methods: {
      toggleMenu(){
        this.menuShow = !this.menuShow
      }
    }
  }
</script>

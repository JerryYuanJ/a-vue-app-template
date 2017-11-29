<template>
  <div id="chart">
    <mt-header fixed title="统计图表">
      <router-link to="/tool" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" @click="showSheet">切换</mt-button>
    </mt-header>
    <div id="chart-container">
      <div id="myChart" :style="{  height: '300px'}"></div>
    </div>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>
<style>
  .chart-container {
    margin-top: 40px;
    display: flex;
  }
</style>
<script>
  import axios from 'axios';

  export default {
    data(){
      let that = this;
      return {
        sheetVisible: false,
        actions: [{
          name: '柱状图', method(){
            that.chartType = 'bar';
            that.drawLine();
          }
        }, {
          name: '折线图', method(){
            that.chartType = 'line';
            that.drawLine();
          }
        }],
        chartType: 'bar'
      }
    },
    created(){
      let _footer = this.$store.state.footerVisible;
      if (_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      showSheet() {
        this.sheetVisible = true
      },
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
          color: ['#3398DB','#ef1111'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            x: 'center',
            data:['第一季度','第二季度'],
            top:50,
            selectedMode: 'multiple',
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子"]
          },
          grid:{
            show:true,
            top:80,//grid 组件离容器上侧的距离,默认60;上同
          },
          yAxis: {},
          series: [{
            name: '第一季度',
            type: this.chartType,
            data: [5, 20, 9, 360]
          },{
            name: '第二季度',
            type: this.chartType,
            data: [51, 2, 190, 26]
          }]
        });
      }
    }
  }
</script>

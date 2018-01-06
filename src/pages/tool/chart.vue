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
  #chart-container {
    margin-top: 40px;
  }

  #myChart {
    margin: 0 auto;
    width: calc(100% - 20px);
    height: 162px;
    border-radius: 5px;
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
            //在切换图类型时重画表格
            that.chartType = 'bar';
            that.drawLine();
          }
        }, {
          name: '折线图', method(){
            //在切换图类型时重画表格
            that.chartType = 'line';
            that.drawLine();
          }
        }],
        chartType: 'line',
        chart: {},
        legendData: [],
        xData: [],
        yData: []
      }
    },
    created(){
      let _footer = this.$store.state.footerVisible;
      if (_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    },
    mounted(){
      let that = this;
      axios.get('/api/chart').then((res) => {
        that.chart = res.data.data;
        this.drawLine(that.chart);
      });
    },
    methods: {
      showSheet() {
        this.sheetVisible = true
      },
      drawLine(chartData){

        let legendData = [];
        let xData = [];
        let seriesData = [];

        for (let item of chartData) {
          legendData.push(item['contrastDimension']);
          let temp = [];
          for (let cItem of item.chart) {
            temp.push(cItem.contrastValue);
          }
          let obj = {
            name: item['contrastDimension'],
            type: 'line',
            data: temp
          }
          seriesData.push(obj);
        }
        console.info('seriesData=' + JSON.stringify(seriesData));
        for (let one of chartData[0].chart) {
          xData.push(one.numDateStr);
        }
        console.info('xData='+xData);
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        let option = {
          color: ['#3398DB', '#ef1111'],
          title: {
            show: true,
            text: chartData[0].chartName,
            left: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          //提示块，可点击
          legend: {
            x: 'center',
            data: legendData,
            top: 30,
            //selectedMode: false,
          },
          //X轴
          xAxis: {
            data: xData
          },
          grid: {
            show: true,//grid 组件离容器上侧的距离,默认60;上同
            top: 60,
            left: '10%',
            right: 10
          },
          yAxis: {},
          //显示数据
          series: seriesData
        };
        myChart.setOption(option);
      }
    }
  }
</script>

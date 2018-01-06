<template>
  <div id="chart">
    <mt-header fixed title="统计图表">
      <router-link to="/tool" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div id="chart-container">
      <!--<template v-for="i in chartCount">
      <div :id="'myChart'+i" :style="{  height: '300px'}"></div>
    </template>-->
      <!--<div id="myChart" :style="{  height: '300px'}"></div>-->
    </div>
  </div>
</template>
<style>
  #chart-container {
    margin-top: 40px;
  }
</style>
<script>

  import axios from 'axios';


  export default {
    data(){
      return {
        chartType: 'line',
        trend: [],
        contrast: [],
        chartCount: 0
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
      axios.get('/api/contrast').then((res) => {
        that.trend = res.data.data;
        this.drawTable(that.trend);
      });
      axios.get('/api/trend').then((res) => {
        that.contrast = res.data.data;
        this.drawTable(that.contrast);
      });
    },
    methods: {
      drawTable(chartData){
        let that = this;
        //首先chartData是一个数组，每一个数组项是一张图
        for (let j = 0, len = chartData.length; j < len; j++) {
          //要的数据有表格名称(title.text),提示块(legend), 线条颜色(color),x轴显示的标题(xAxis),显示数据(series)
          let chart = chartData[j];
          let lines = chart.xxgxChartHeaders;
          //表格名称
          let tableName = chart.trentName || chart.contrastName;
          //提示块
          let legendData = [];
          //x轴
          let xData = [];
          //显示数据
          let seriesData = [];

          //循环的是线条的数据，里面包含所有有效数据
          for (let line of lines) {
            //提示块(legend)
            legendData.push(line['contrastDimension']);
            //x轴显示的标题(xAxis)
            let temp = [];
            for (let x of line.charts) {
              temp.push(x.contrastValue);
            }

            let obj = {
              name: line['contrastDimension'],
              type: 'line',
              data: temp
            };
            //显示数据(series)
            seriesData.push(obj);
          }

          for (let x of lines[0].charts) {
            xData.push(x.numDateStr);
          }

          console.info('====================');
          console.info(JSON.stringify(tableName));
          console.info(JSON.stringify(legendData));
          console.info(JSON.stringify(xData));
          console.info('seriesData.length=' + JSON.stringify(seriesData.length));
          console.info('legendData.length=' + JSON.stringify(legendData.length));
          console.info(JSON.stringify(seriesData));
          console.info('=====================');


          //====填充数据进行表格显示====//
          let option = {
            title: {
              show: true,
              text: tableName,
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
              selectedMode: false,
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

          // 基于准备好的dom，初始化echarts实例
          let tableContainer = document.getElementById('chart-container');

          let mDiv = document.createElement('div');
          mDiv.style.height = '300px';
          mDiv.style.borderBottom = '1px solid #cccccc';
          mDiv.setAttribute('id', 'div-' + j);

          tableContainer.appendChild(mDiv);

          let myChart = that.$echarts.init(mDiv);
          // 绘制图表
          myChart.setOption(option);
        }
      }
    }
  }
</script>

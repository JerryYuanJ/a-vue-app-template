<!--
    @CreationDate:2018/3/14
    @Author:Joker
    @Usage:每月销量统计
-->
<template>
  <div class="monthly-sales-statistics">
    每月销量统计
    <div id="chart-1" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>
<style scoped lang="scss">
  .monthly-sales-statistics {

  }
</style>
<script>
  import {Indicator} from 'mint-ui'

  export default {
    name: 'MonthlySalesStatistics',
    mounted(){
      this.drawLine(this.initData);
    },
    data(){
      return {
        initData: {
          x1: [3, 5, 7.0, 23.2, 57, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          x2: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }
      }
    },
    methods: {
      drawLine(param){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('chart-1'));
        // 绘制图表
        let option = {
          tooltip: {
            trigger: 'axis'
          },
          calculable: true,
          legend: {
            data: ['目标完成率', '发货量']
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name: '目标完成率',
              type: 'bar',
              data: param.x1,
              itemStyle: {normal: {label: {show: true}}}
            },
            {
              name: '发货量',
              type: 'line',
              data: param.x2,
              itemStyle: {normal: {label: {show: true}}}
            }
          ]
        };

        myChart.setOption(option);
      }
    }
  }
</script>

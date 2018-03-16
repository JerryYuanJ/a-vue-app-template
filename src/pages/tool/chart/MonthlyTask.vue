<!--
    @CreationDate:2018/3/14
    @Author:Joker
    @Usage:每月任务量其完成情况
-->
<template>
  <div class="monthly-task">
    每月任务量其完成情况
    <div id="chart-8-1" :style="{width: '100%', height: '250px'}"></div>
  </div>
</template>
<style scoped lang="scss">
</style>
<script>
  export default {
    name: 'MonthlyTask',
    mounted(){
      this.drawLine1();
    },
    methods: {
      drawLine1(){
        let myChart = this.$echarts.init(document.getElementById('chart-8-1'));
        // 绘制图表
        let option = {
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['计划工作', '完成工作']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis:  {
            type: 'category',
            data: ['张三','李四','王五','赵六','科比','周杰伦','你好']

          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '计划工作',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
              name: '完成工作',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            }
          ]
        };


        myChart.setOption(option);
      }
    }
  }
</script>

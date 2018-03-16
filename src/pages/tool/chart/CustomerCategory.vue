<!--
    @CreationDate:2018/3/14
    @Author:Joker
    @Usage:客户分类结构
-->
<template>
  <div class="customer-category">
    客户分类情况
    <div id="chart-5-1" :style="{width: '100%', height: '250px'}"></div>
    <div id="chart-5-2" :style="{width: '100%', height: '200px'}"></div>
  </div>
</template>
<style scoped lang="scss">
</style>
<script>
  export default {
    name: 'CustomerCategory',
    mounted(){
      this.drawLine1();
      this.drawLine2();
    },
    methods: {
      drawLine2(){

        let myChart = this.$echarts.init(document.getElementById('chart-5-2'));
        let option = {
          tooltip: {
            trigger: 'axis'
          },
          grid:{
              top:10
          },
          legend: {
            data: ['数量', '销量'],
            y: 'bottom'
          },
          xAxis: [
            {
              type: 'category',
              data: ['加油站', '分销商', '工矿单位', '新能源', '物流公司', '企业单位']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '数量',
              type: 'bar',
              data: [23, 12, 45, 28, 56, 20]
            },
            {
              name: '销量',
              type: 'bar',
              data: [3, 5, 22, 22, 17, 12],
            }
          ]
        };
        myChart.setOption(option);
      },
      drawLine1(){
        let myChart = this.$echarts.init(document.getElementById('chart-5-1'));
        // 绘制图表
        let option = {
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['30%', '50%'],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    formatter: ' {b} \n {c}'
                  },
                  labelLine: {
                    show: true
                  }
                }
              },
              data: [
                {value: 15, name: '分销商'},
                {value: 23, name: '工矿单位'},
                {value: 12, name: '加油站'},
                {value: 45, name: '新能源'},
                {value: 67, name: '物流公司'},
                {value: 3, name: '企业单位'}
              ]
            }
          ]
        };


        myChart.setOption(option);
      }
    }
  }
</script>

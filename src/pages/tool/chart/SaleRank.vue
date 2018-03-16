<!--
    @CreationDate:2018/3/14
    @Author:Joker
    @Usage:销售排名
-->
<template>
  <div class="sale-rank">
    <div class="chart-box">
      <div id="chart-3-1" :style="{width: '100%', height: '250px'}"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .sale-rank {
    .chart-box {
      background-color: rgba(24, 183, 208, 0.33);
      margin: 20px 10px 0 10px;
      border-radius: 10px;
    }
  }
</style>
<script>
  export default {
    name: 'SaleRank',
    mounted(){
      this.drawLine(this.initData);
    },
    data(){
      return {
        initData: {
          x: [34, 11, 34, 56, 12, 44, 23]
        }
      }
    },
    methods: {
      drawLine(params){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('chart-3-1'));
        // 绘制图表
        let option1 = {
          tooltip: {
            trigger: 'axis'
          },
          title: {
            text: '按订单量',
            left: '40%'
          },
          grid: {
            left: 50
          },
          xAxis: [
            {
              type: 'value',
              boundaryGap: [0, 0.01]
            }
          ],
          yAxis: [
            {
              type: 'category',
              data: ['张三', '李四', '周杰伦', '陈奕迅', '戳爷', '梦龙', 'Taylor']
            }
          ],
          series: [
            {
              type: 'bar',
              data: params.x,
              itemStyle: {normal: {label: {show: true}}}
            }
          ]
        };
        myChart1.setOption(option1);
      }
    }
  }
</script>

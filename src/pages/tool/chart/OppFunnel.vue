<!--
    @CreationDate:2018/3/14
    @Author:Joker
    @Usage:商机漏斗图
-->
<template>
  <div class="opp-funnel">
    商机漏斗图
    <div id="chart-7" :style="{height:'400px',width:'100%'}"></div>
  </div>
</template>
<style scoped lang="scss">
</style>
<script>
  export default {
    name: 'OppFunnel',
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){

        let myChart = this.$echarts.init(document.getElementById('chart-7'));
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
          },
          legend: {
            data: ['展现','点击','访问','咨询','订单']
          },
          series: [
            {
              name: '预期',
              type: 'funnel',
              left: '10%',
              width: '60%',
              label: {
                normal: {
                  formatter: '{b}预期'
                },
                emphasis: {
                  position:'inside',
                  formatter: '{b}预期: {c}%'
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  opacity: 0.7
                }
              },
              data: [
                {value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}
              ]
            },
            {
              name: '实际',
              type: 'funnel',
              left: '10%',
              width: '60%',
              maxSize: '80%',
              label: {
                normal: {
                  position: 'inside',
                  formatter: '{c}%',
                  textStyle: {
                    color: '#fff'
                  }
                },
                emphasis: {
                  position:'inside',
                  formatter: '{b}实际: {c}%'
                }
              },
              itemStyle: {
                normal: {
                  opacity: 0.5,
                  borderColor: '#fff',
                  borderWidth: 2
                }
              },
              data: [
                {value: 30, name: '访问'},
                {value: 10, name: '咨询'},
                {value: 5, name: '订单'},
                {value: 50, name: '点击'},
                {value: 80, name: '展现'}
              ]
            }
          ]
        };

        myChart.setOption(option);
      }
    }
  }
</script>

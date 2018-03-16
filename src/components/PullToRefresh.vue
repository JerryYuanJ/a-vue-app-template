<!--
    @CreationDate:2018/3/16
    @Author:Joker
    @Usage:下拉刷新组件
-->
<template>
  <div class="pull-to-refresh-app">
    <div class="content-box">
      <div class="refreshing-box">
        <div>{{tipText}}</div>
      </div>
      <div class="present-box">

      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .pull-to-refresh-app {
    .content-box {
      height: 300px;
      position: relative;
      .refreshing-box {
        background-color: white;
        line-height: 40px;
        height: 40px;
        text-align: center;
      }
      .present-box {

      }
    }
  }
</style>
<script>

  import {Indicator} from 'mint-ui'

  export default {
    name: 'PullToRefresh',
    data(){
      return {
        startX: '',
        endX: '',
        startY: '',
        endY: '',
        moveDistance: 0,
        tipText: '下拉刷新',
      }
    },
    methods: {
      /**
       * 绑定touch事件
       */
      bindTouchEvent(){
        let el = document.getElementsByClassName("content-box")[0],
          that = this;
        el.addEventListener('touchstart', function (e) {
          let touch = e.changedTouches[0];
          that.startX = touch.clientX;
          that.startY = touch.clientY;
        });

        el.addEventListener('touchmove', function (e) {
          let touch = e.changedTouches[0];
          //div块移动的距离，就是手势下拉的距离
          let _move = touch.clientY - that.startY;
          if (_move > 0 && _move < 100) {
            el.style.marginTop = _move + 'px';
            that.moveDistance = touch.clientY - that.startY;
            if (_move > 50) {
              that.tipText = '松开即可刷新'
            }
          }
        });

        el.addEventListener('touchend', function (e) {
          let touch = e.changedTouches[0];
          that.endX = touch.clientX;
          that.endY = touch.clientY;
          console.info('move =' + that.moveDistance);
          if (that.moveDistance > 50) {
            Indicator.open('loading');
            that.tipText = '数据加载中';
            setTimeout(() => {
              Indicator.close();
            }, 2000)
          }
          if (that.moveDistance > 0) {
            let timer = setInterval(function () {
              el.style.marginTop = --that.moveDistance + 'px';
              if (Number(el.style.marginTop.split('px')[0]) <= 0) clearInterval(timer);
            }, 1)
          }
        })
      },
      _touchStart(){},
      _touchMove(){},
      _touchEnd(){}
    },
    mounted(){
      this.bindTouchEvent();
    }
  }
</script>

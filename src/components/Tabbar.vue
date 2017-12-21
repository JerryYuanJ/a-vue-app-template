<!--
    @CreationDate:2017/12/21
    @Author:袁杰
    @Function:tabbar,可以横向滚动
-->
<template>
  <div class="tab-bar" :style="{width:hWidth}" :selectedIndex="selectedIndex">
    <div class="tab-item" @click="selectTab('all')"
         :style="{backgroundColor:selectedIndex===-1?'#ecf5ff':'white',
                    color:selectedIndex===-1?'#67c23a':'#0c60ee',
                    borderBottom:selectedIndex===-1?'2px solid #67c23a':'none'}">
      全部
    </div>
    <template v-for="(item,index) in tabData">
      <div class="tab-item"
           :style="{backgroundColor:selectedIndex===index?'#ecf5ff':'white',
                    color:selectedIndex===index?'#67c23a':'#0c60ee',
                    borderBottom:selectedIndex===index?'2px solid #67c23a':'none'}"
           @click="selectTab(index)">{{item[textField]}}
      </div>
    </template>
  </div>
</template>
<style>
  .tab-bar {
    width: 375px;
    overflow-x: auto;
    display: flex;
  }

  .tab-item {
    display: flex;
    justify-content: center;
    border-right: 1px solid #cccccc;
    width: 200px;
    height: 40px;
    line-height: 40px;
    background-color: whitesmoke;
    color: #0c60ee;
  }

</style>
<script>
  export default {
    data(){
      return {
        hWidth: '400px'
      }
    },
    props: {
      selectedIndex: Number,
      select: Function,
      textField: String,
      valueField: String,
      tabData: Array
    },
    mounted(){
      this.hWidth = (this.tabData.length * 100) + 'px';
      console.info(this.selectedIndex)
    },
    methods: {
      selectTab(tab){
        console.info(tab);
        this.$emit('select', tab)
      }
    }
  }
</script>

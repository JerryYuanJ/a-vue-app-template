<!--
    @CreationDate:2017/12/11
    @Author:袁杰
    @Function:单列选择下拉框
    @Usage:
          popupVisible,组件的显示状态
          slotsData,组件加载的数据
          toggle,组件关闭的回调
          valueKey,组件显示item的字段名称
-->
<template>
  <div id="single-selector">
    <mt-popup style="width: 100%" v-show="popupVisible"
              position="bottom">
      <mt-picker :slots="slotsData" @change="onValuesChange" :visible-item-count="5" :showToolbar="true"
                 :value-key="valueKey">
        <div class="selector-toolbar">
          <mt-button size="small" @click="menuCancel">取消</mt-button>
          <mt-button size="small" @click="menuConfirm">确定</mt-button>
        </div>
      </mt-picker>
    </mt-popup>
  </div>
</template>
<style scoped>
  .selector-toolbar {
    display: flex;
    justify-content: space-around;
  }
</style>
<script>
  export default {
    data(){
      return {
        selectText: '',
        selectValue: ""
      }
    },
    props: {
      popupVisible: Boolean,
      slotsData: Array,
      toggle: Function,
      valueKey: String
    },
    methods: {
      onValuesChange(picker, values) {
        console.info(values);
        if (values[0]) {
          this.selectValue = values[0][this.valueKey]
        } else {
          this.selectValue = '无数据'
        }

      },
      menuCancel(){
        this.$emit('toggle', this.selectValue, this.selectText);
      },
      menuConfirm(){
        this.$emit('toggle', this.selectValue, this.selectText);

      }
    }
  }
</script>

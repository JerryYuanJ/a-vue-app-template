<template>
  <div id="memo">
    <mt-header fixed title="我的备忘"></mt-header>
  </div>
</template>
<style>
</style>
<script>
  import * as types from '../../store/index.js'
  export default {
    data(){
      return {}
    },
    created(){
      let _footer = this.$store.state.footerVisible;
      if (_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    }
  }
</script>

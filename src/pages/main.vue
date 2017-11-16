<template>
  <div id="index">
    <mt-header fixed title="首页"></mt-header>
    <div class="content">

    </div>
  </div>
</template>
<style scoped>
  .content {
    margin-top: 40px;
  }
</style>
<script>
  import axios from 'axios';

  export default {
    data(){
      return {}
    },
    methods: {},
    created(){
      let _footer = this.$store.state.footerVisible;
      if (!_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    }
  }
</script>

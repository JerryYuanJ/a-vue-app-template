<template>
  <div id="memo-list">
    <mt-header fixed title="我的备忘列表">
      <router-link to="/tool" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" @click="newMemo">-|-</mt-button>
    </mt-header>
  </div>
</template>
<style>
</style>
<script>
  export default {
    created(){
      let _footer = this.$store.state.footerVisible;
      if (_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
    },
    methods: {
      newMemo(){
        this.$router.push('/tool/memonew');
      }
    }
  }
</script>

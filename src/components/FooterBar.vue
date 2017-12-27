<template>
  <div id="tab-bar">
    <mt-tabbar v-model="selected" v-show="isShow" fixed class="border-1px-top">
      <mt-tab-item id="main">
        <img :src="img1" slot="icon">首页
      </mt-tab-item>
      <mt-tab-item id="tool">
        <img :src="img3" slot="icon">应用中心
      </mt-tab-item>
      <mt-tab-item id="my">
        <img :src="img5" slot="icon">我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data(){
      return {
        selected: this.$store.state.selectedTab,
        img1: "/src/assets/tool/home_selected.png",
        img3: "/src/assets/tool/tool.png",
        img5: "/src/assets/tool/user.png"
      }
    },
    computed: {
      isShow: function () {
        return this.$store.state.footerVisible;
      }
    },
    watch: {
      'selected': {
        handler(){
          if (this.selected === "main") {
            this.$router.push('/main');
            this.img1 = "/src/assets/tool/home_selected.png"
          } else {
            this.img1 = "/src/assets/tool/home.png"
          }
          if (this.selected === "tool") {
            this.$router.push('/tool');
            this.img3 = '/src/assets/tool/tool_selected.png'
          } else {
            this.img3 = '/src/assets/tool/tool.png'
          }
          if (this.selected === "my") {
            this.$router.push('/my');
            this.img5 = "/src/assets/tool/user_selected.png";
          } else {
            this.img5 = "/src/assets/tool/user.png";
          }
        }
      }
    }
  }
</script>

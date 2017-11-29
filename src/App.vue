<template>
  <div id="app">
    <div class="content-div">
      <!--<transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">-->
        <router-view/>
      <!--</transition>-->
    </div>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
  import Footer from './components/FooterBar.vue'
  export default {
    name: 'app',
    components: {
      'footer-bar': Footer
    },
    computed: {}
  }
</script>

<style scoped="">
  .content-div {
    margin-bottom: 55px;
  }
</style>

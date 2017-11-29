<template>
  <div id="index">
    <mt-header fixed title="首页"></mt-header>
    <div class="content">
      <mt-cell-swipe
        :right="right"
        title="未读通知">
        <span><mt-badge type="error">10</mt-badge></span>
      </mt-cell-swipe>



      <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        正在发送内容...
      </mt-popup>

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
      return {
        popupVisible: false,
        right: [
          {
            content: 'Delete',
            style: {background: 'red', color: '#fff', width: '50px'},
            handler: () => this.$messagebox('delete')
          }
        ]
      }
    },
    methods: {
      pop(){
        this.popupVisible = true
      }
    },
    created(){
      let _footer = this.$store.state.footerVisible;
      if (!_footer) {
        this.$store.commit('TOGGLE_FOOTER');
      }
      this.$store.commit('SELECT_TAB', 'main')
    }
  }
</script>

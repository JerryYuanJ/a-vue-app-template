<template>
  <div class="i18n">
      <mt-header fixed :title="$t('title')">
        <router-link to="/tool" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="content">
         <div>来自全局:<h4>{{ $t("person.name") }}</h4></div>
         <div>来自组件:<h4>{{ $t("hello") }}</h4></div>
         <div>
           输出html:<h4 v-html="$t('html')"></h4>
         </div>
         <div>
           命名格式化:<h4>{{ $t('named-formatting',{ name: '朱辰迪'}) }}</h4>
         </div>
         <div>
           复数形式:
           <h4>{{ $tc('apple',11, { count:11 } ) }}</h4>/
           <h4>{{ $tc('apple',1) }}</h4>/
           <h4>{{ $tc('apple',0 ) }}</h4>
         </div>
         <div>
           日期国际化:
           <h4>{{ $d(new Date(), 'short','en-US') }}</h4>
           <h4>{{ $d(new Date(), 'long', 'zh-CN') }}</h4>
         </div>
         <div>
           v-t指令国际化:
           <h4>
             <p v-t="{path,args:{param:'KOBE'}}"></p>
           </h4>
         </div>
      </div>
  </div>
</template>

<i18n>
{
  "en": {
    "hello": "hello world!",
    "title": "For i18n use",
    "apple": "no apples | one apple | {count} apples"
  },
  "ja": {
    "hello": "こんにちは、世界！"
  },
  "zh": {
    "hello": "你好，世界!",
    "title": "国际化使用",
    "html": "换 <span style='color:blue'>行</span>",
    "named-formatting": "{name} 很好",
    "directive": "来自指令 参数:{param}"
  }
}
</i18n>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      name: this.$t('hello'),
      path: 'directive'
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    let _footer = this.$store.state.footerVisible;
    if (_footer) {
      this.$store.commit("TOGGLE_FOOTER");
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
.i18n{
  *{
    margin: 0;
  }
  .content{
    margin-top: 40px;
    div{
      padding: 10px;
      border-bottom: 1px solid lightgray;
      h4{
        display: inline-block
      }
    }
  }
}
</style>
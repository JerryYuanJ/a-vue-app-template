import Vue from 'vue';
//引入mint-ui
import MintUI from 'mint-ui'
//引入echarts
import echarts from 'echarts'
//引入vue-event-calendar组件
import vueEventCalendar from 'vue-event-calendar'
//引入v-calendar组件
import VCalendar from 'v-calendar'
//引入国际化插件
import VueI18n from 'vue-i18n'
//引入mint-ui的样式
import 'mint-ui/lib/style.css'
//引入font-awesome.css
import 'font-awesome/css/font-awesome.css'
//引入日历组件的样式
import 'vue-event-calendar/dist/style.css'
//引入animate.css的样式
import 'animate.css/animate.css'
//引入v-calendar的样式
import 'v-calendar/lib/v-calendar.min.css'
//引入富文本编辑器
import VueHtml5Editor from 'vue-html5-editor'



export const initPlugins = function() {
    Vue.use(MintUI);
    initRichText()
    Vue.use(VCalendar, {
        locale:'zh-CN'
    });
    Vue.use(vueEventCalendar, {
        locale: 'zh', //可以设置语言，支持中文和英文
        color: 'lightblue', //Set main color
        className: 'selected-day', // (default: 'selected-day')
        weekStartOn: '1'  // Can be: 1, 2, 3, 4, 5, 6, 0 (default: 0)
    });
    Vue.prototype.$echarts = echarts;
}

const initRichText =  function () {
    let opt = {
      // 全局组件名称，使用new VueHtml5Editor(options)时该选项无效
      // global component name
      name: "vue-html5-editor",
      // 是否显示模块名称，开启的话会在工具栏的图标后台直接显示名称
      // if set true,will append module name to toolbar after icon
      showModuleName: true,
      // 自定义各个图标的class，默认使用的是font-awesome提供的图标
      // custom icon class of built-in modules,default using font-awesome
      icons: {
        text: "fa fa-pencil",
        color: "fa fa-paint-brush",
        font: "fa fa-font",
        align: "fa fa-align-justify",
        list: "fa fa-list",
        link: "fa fa-chain",
        unlink: "fa fa-chain-broken",
        tabulation: "fa fa-table",
        image: "fa fa-file-image-o",
        hr: "fa fa-minus",
        eraser: "fa fa-eraser",
        undo: "fa-undo fa",
        "full-screen": "fa fa-arrows-alt",
        info: "fa fa-info",
      },
      // 配置图片模块
      // config image module
      image: {
        // 文件最大体积，单位字节  max file size
        sizeLimit: 512 * 1024 * 10,
        // 上传参数,默认把图片转为base64而不上传
        // upload config,default null and convert image to base64
        upload: {
          url: null,
          headers: {},
          params: {},
          fieldName: {}
        },
        // 压缩参数,默认使用localResizeIMG进行压缩,设置为null禁止压缩
        // compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG)
        // set null to disable compression
        compress: {
          width: 600,
          height: 600,
          quality: 80
        },
        // 响应数据处理,最终返回图片链接
        // handle response data，return image url
        uploadHandler(responseText){
          //default accept json data like  {ok:false,msg:"unexpected"} or {ok:true,data:"image url"}
          var json = JSON.parse(responseText);
          console.info(json);
          if (!json.ok) {
            alert(json.msg)
          } else {
            return json.data
          }
        }
      },
      // 语言，内建的有英文（en-us）和中文（zh-cn）
      //default en-us, en-us and zh-cn are built-in
      language: "zh-cn",
      // 自定义语言
      i18n: {
        //specify your language here
        "zh-cn": {
          "align": "对齐方式",
          "image": "图片",
          "list": "列表",
          "link": "链接",
          "unlink": "去除链接",
          "table": "表格",
          "font": "文字",
          "full screen": "全屏",
          "text": "排版",
          "eraser": "格式清除",
          "info": "关于",
          "color": "颜色",
          "please enter a url": "请输入地址",
          "create link": "创建链接",
          "bold": "加粗",
          "italic": "倾斜",
          "underline": "下划线",
          "strike through": "删除线",
          "subscript": "上标",
          "superscript": "下标",
          "heading": "标题",
          "font name": "字体",
          "font size": "文字大小",
          "left justify": "左对齐",
          "center justify": "居中",
          "right justify": "右对齐",
          "ordered list": "有序列表",
          "unordered list": "无序列表",
          "fore color": "前景色",
          "background color": "背景色",
          "row count": "行数",
          "column count": "列数",
          "save": "确定",
          "upload": "上传",
          "progress": "进度",
          "unknown": "未知",
          "please wait": "请稍等",
          "error": "错误",
          "abort": "中断",
          "reset": "重置"
        }
      },
      // 隐藏不想要显示出来的模块
      // the modules you don't want
      hiddenModules: [],
      // 自定义要显示的模块，并控制顺序
      // keep only the modules you want and customize the order.
      // can be used with hiddenModules together
      visibleModules: [
        /*"text",*/
        /*"color",*/
        "font",
        "align",
        /*"list",*/
        /*"link",*/
        /*"unlink",*/
        /*"tabulation",*/
        "image",
        /*"hr",*/
        /*"eraser",*/
        "undo",
        /*"full-screen",*/
        /*"info",*/
      ],
      // 扩展模块，具体可以参考examples或查看源码
      // extended modules
      modules: {
        //omit,reference to source code of build-in modules
      }
    };
    Vue.use(VueHtml5Editor, opt);
  }
  

export const initI18N = function(lang) {
    Vue.use(VueI18n);
    let dateTimeFormats = {
        'en-US': {
          short: {
            year: 'numeric', month: 'short', day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric'
          }
        },
        'zh-CN': {
          short: {
            year: 'numeric', month: 'short', day: 'numeric'
          },
          long: {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                weekday: 'short',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
          }
        }
      }
    return new VueI18n({
        locale:lang,
        fallbackLocale: 'en',
        dateTimeFormats,
        silentTranslationWarn:true, // seems it doesn't work well...
        messages:{
            zh: require('./common/i18n/app-zh.json'),
            en: require('./common/i18n/app-en.json'),
            jp: require('./common/i18n/app-jp.json')
        }
    })
}

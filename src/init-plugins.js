import Vue from 'vue';
//引入mint-ui
import MintUI from 'mint-ui'
//引入echarts
import echarts from 'echarts'
//引入vue-event-calendar组件
import vueEventCalendar from 'vue-event-calendar'
//引入v-calendar组件
import VCalendar from 'v-calendar'

//引入mint-ui的样式
import 'mint-ui/lib/style.css'
//引入font-awesome.css
import 'font-awesome/css/font-awesome.css'
//引入日历组件的样式
import 'vue-event-calendar/dist/style.css'
//引入animate.css的样式
import 'animate.css/animate.css'
//引入v-calendar的样式
import 'v-calendar/lib/v-calendar.min.css';

export default function() {
    Vue.use(MintUI);
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

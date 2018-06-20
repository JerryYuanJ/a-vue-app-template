<template>
  <div class="calendar-test">
      <select-header :options="headerOption1" @selectOption="clickOp1"
                   tipTitle="切换组件">
      <div slot="left" @click="goBack">
        <i class="fa fa-chevron-left"></i>
      </div>
    </select-header>
      <div class="content">
        <div class="c-1" v-show="show1">
          <vue-event-calendar :events="demoEvents" @month-changed="monthChange" @day-changed="dayChange"></vue-event-calendar>
        </div>
        <div class="c-2" v-show="show2">
            <Calendar
              v-on:choseDay="clickDay"
              v-on:changeMonth="changeDate"
              :markDateMore="arr"
            ></Calendar>
            <div class="event-box">
                <div class="event-title">
                    <span>{{ selectDay }} Event list </span>
                </div>
                <div class="event-list">
                    No events yet , click to add one                    
                    <i class="fa fa-plus"></i>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";
import SelectHeader from "../../components/coms/select-header.vue";

export default {
  components: { Calendar, SelectHeader },
  props: {},
  data() {
    return {
      show1: false,
      show2: true,
      selectDay:'',
      arr: [
        { date: "2018/06/11", className: "mark1" },
        { date: "2018/04/13", className: "mark2" }
      ],
      demoEvents: [
        {
          date: "2018/06/15",
          title: "eat",
          desc: "longlonglong description"
        },
        {
          date: "2018/06/12",
          title: "this is a title"
        }
      ],
      headerOption1: [{ text: "组件1", value: 1 }, { text: "组件2", value: 2 }]
    };
  },
  methods: {
    monthChange(month) {
      console.log(month);
    },
    dayChange(day) {
      console.log(day);
    },
    clickDay(data) {
      console.log(data); //选中某天
      this.selectDay = data
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    },
    clickOp1(item) {
      if (item.value === 1) {
        this.show1 = true;
        this.show2 = false;
      } else if (item.value === 2) {
        this.show1 = false;
        this.show2 = true;
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  watch: {},
  computed: {},
  created() {
    let _footer = this.$store.state.footerVisible;
    if (_footer) {
      this.$store.commit("TOGGLE_FOOTER");
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
.calendar-test {
  .content {
    margin-top: 60px;
  }
  .mark1 {
    background-color: #0000ff55;
    border-radius: 50%;
  }
  .mark2 {
    background-color: #00ff00;
    border-radius: 50%;
  }
  .wh_content_item {
    border-bottom: 1px solid #ffffff55;
  }
  .wh_isToday {
    background-color: lightblue;
    color: black;
  }
  .wh_content_all {
    background-color: lightblue;
  }
  .event-box {
    background-color: lightblue;
    width: 100%;
    height: auto;
    min-height: 30px;
    margin-top: 20px;
    .event-title {
      text-align: center;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid whitesmoke;
    }
    .event-list {
      text-align: center;
      height: 35px;
      line-height: 35px;
      color: gray;
    }
  }
}
</style>
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
        <div class="c-3" v-show="show3">
            <v-calendar is-expanded :attributes='attrs' @dayclick='dayClicked' @update:frompage="changeMonth">
              <span slot='header-title' slot-scope='{ shortMonthLabel, yearLabel }'>
                {{ shortMonthLabel }} {{ yearLabel }}
              </span>
               <span slot="day-content" slot-scope="{ day }">
                {{ day.day }}
               <template v-if="day.day===7||day.day===14">
                 <span style="color:red;height:2px;width:2px">*</span>
               </template>
              </span> <!---->
            </v-calendar>
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
      show2: false,
      show3: true,
      selectDay: "",
      // for calendar
      arr: [
        { date: "2018/06/11", className: "mark1" },
        { date: "2018/04/13", className: "mark2" }
      ],
      // for vue-event-calendar
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
      headerOption1: [
        { text: "vue-event-calendar", value: 1 },
        { text: "calendar", value: 2 },
        { text: "v-calendar", value: 3 }
      ],
      //for v-calendar
      attrs: [
        {
          key: "server",
          highlight: {
            backgroundColor: "#ff8080"
          },
          dates: [new Date(2018, 5, 1), "2018-06-08"]
        },
        {
          key: "local",
          highlight: {
            backgroundColor: "#8080ff"
          },
          dates: [new Date(2018, 5, 11), "2018-06-18"]
        },
        {
          key: "dot",
          dot: {
            diameter: "5px",
            backgroundColor: "red"
          },
          dates: [new Date(2018, 5, 21), "2018-06-28"]
        },
        {
          key: "dot2",
          dot: {
            diameter: "5px",
            backgroundColor: "brown"
          },
          dates: ["2018-06-28"]
        },
        {
          key: "dot3",
          dot: {
            diameter: "5px",
            backgroundColor: "green"
          },
          dates: ["2018-06-28"]
        },
        {
          key: "dot4",
          dot: {
            diameter: "5px",
            backgroundColor: "yellow"
          },
          dates: ["2018-06-28"]
        },
        {
          key: "dot5",
          dot: {
            diameter: "5px",
            backgroundColor: "gray"
          },
          dates: ["2018-06-28"]
        },
        {
          key: "bar",
          bar: {
            height: "5px"
          },
          dates: [new Date(2018, 5, 19)]
        }
      ]
    };
  },
  methods: {
    // for vue-event-calendar
    monthChange(month) {
      console.log(month);
    },
    dayChange(day) {
      console.log(day);
    },
    // for calendar
    clickDay(data) {
      console.log(data); //选中某天
      this.selectDay = data;
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    // for v-calendar
    dayClicked(day) {
      console.info(day);
      this.attrs[1].dates.push(day.date);
    },
    changeMonth(date) {
      console.info(date);
    },
    clickOp1(item) {
      if (item.value === 1) {
        this.show1 = true;
        this.show2 = false;
        this.show3 = false;
      } else if (item.value === 2) {
        this.show1 = false;
        this.show2 = true;
        this.show3 = false;
      } else if (item.value === 3) {
        this.show1 = false;
        this.show2 = false;
        this.show3 = true;
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  watch: {},
  created() {
    let _footer = this.$store.state.footerVisible;
    if (_footer) {
      this.$store.commit("TOGGLE_FOOTER");
    }
  },
  computed: {},
  mounted() {}
};
</script>
<style lang="scss">
.calendar-test {
  .content {
    margin-top: 0;
  }
  .c-2 {
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
}
</style>
<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
  import * as echarts from 'echarts';
  require("echarts/theme/macarons"); // echarts theme
  import resize from "./resize";

  export default {
    name: "LineChart",
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: "chart",
      },
      width: {
        type: String,
        default: "100%",
      },
      height: {
        type: String,
        default: "450px",
      },
      autoResize: {
        type: Boolean,
        default: true,
      },
      chartData: {
        type: Object,
        required: true,
      },
      dimension: {
        type: Array,
        default: () => ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      indicators: {
        type: Array,
        default: () => ["采购额", "销售额", "支出", "利润"],
      },
    },
    data() {
      return {
        chart: null,
      };
    },
    watch: {
      chartData: {
        deep: true,
        handler(val) {
          this.setOptions(val);
        },
      },

    },
    mounted() {
      this.$nextTick(() => {
        this.initChart();
      });
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$el, "macarons");
        this.setOptions(this.chartData);
      },
      setOptions({ purchases, sales, expenses, profits } = {}) {
        this.chart.setOption({
          xAxis: {
            data: this.dimension,
            boundaryGap: false,
            axisTick: {
              show: false,
            },
          },
          grid: {
            left: 50,
            right: 50,
            bottom: 20,
            top: 30,
            containLabel: true,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
            },
            padding: [5, 10],
          },
          yAxis: {
            axisTick: {
              show: false,
            },
          },
          legend: {
            data: this.indicators,
          },
          series: [
            {
              name: "采购额",
              smooth: true,
              type: "line",
              itemStyle: {
                normal: {
                  color: "#f48fb1",  // 修改为粉色
                  lineStyle: {
                    color: "#f48fb1",  // 修改为粉色
                    width: 2,
                  },
                },
              },
              data: purchases,
              animationDuration: 2800,
              animationEasing: "quadraticOut",
            },
            {
              name: "销售额",
              itemStyle: {
                normal: {
                  color: "#f06292",  // 修改为粉色
                  lineStyle: {
                    color: "#f06292",  // 修改为粉色
                    width: 2,
                  },
                },
              },
              smooth: true,
              type: "line",
              data: sales,
              animationDuration: 2800,
              animationEasing: "cubicInOut",
            },
            {
              name: "支出",
              itemStyle: {
                normal: {
                  color: "#e91e63",  // 修改为粉色
                  lineStyle: {
                    color: "#e91e63",  // 修改为粉色
                    width: 2,
                  },
                },
              },
              smooth: true,
              type: "line",
              data: expenses,
              animationDuration: 2800,
              animationEasing: "cubicInOut",
            },
            {
              name: "利润",
              itemStyle: {
                normal: {
                  color: "#d81b60",  // 修改为粉色
                  lineStyle: {
                    color: "#d81b60",  // 修改为粉色
                    width: 2,
                  },
                },
              },
              smooth: true,
              type: "line",
              data: profits,
              animationDuration: 2800,
              animationEasing: "cubicInOut",
            },
          ],
        });
      },
    },
  };
</script>

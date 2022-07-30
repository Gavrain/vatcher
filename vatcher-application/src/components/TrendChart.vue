<template>
  <div :class="'TrendChart'+trendData.id" style="width:8.3333rem; height: 100%"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'TrendChart',
  props: {
    trendData: {
      type: Object
    }
  },
  mounted() {
    const myChart = echarts.init(document.querySelector(`.TrendChart${this.trendData.id}`)) 
    const option = {
      color: '#EE7850',
      xAxis: {
        show: false,
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        show: false,
        type: 'value'
      },
      series: [
        {
          // 最多只能展示7条数据，多了显示不下
          data: [1,2,3,4,5,4,3],
          type: 'bar',
          emphasis: {
            focus: 'self'
          }
        }
      ]
    }
    myChart.setOption(option)
  }
}
</script>

<style lang='less' scoped>
:deep(canvas) {
  position: absolute;
  top: -1.1667rem !important;
}
</style>

<template>
  <div ref="echarts_link"></div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      this.initChart()
    },
    methods:{
      initChart() {
        this.MyEcharts = this.$echarts.init(this.$refs.echarts_link)

          const option = {
            xAxis: {
            type: 'category',
            data: ['1月', '3月', '5月', '7月', '9月', '11月']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [600, 800, 700, 620, 555, 470],
              type: 'bar'
            }]
          }
          this.MyEcharts.setOption(option)
      }
    }
  }
</script>

<style scoped>
div{
  width: 400px;
  height: 400px;
}
</style>

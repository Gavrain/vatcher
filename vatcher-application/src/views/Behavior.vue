<template>
  <div id="box">
        <div id='pu-echart'></div>
        <div id="uv-echart"></div>
        <div id="vv-echart"></div>
        <div id="ip-echart"></div>
</div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'
import chinaMap from '../../src/assets/china.json'
export default {
  name: 'Behavior',
  data () {
    return {
    }
  },
  mounted () {
    echarts.registerMap("china", { geoJSON: chinaMap });
    var myChart = echarts.init(document.getElementById('pu-echart'))
    myChart.setOption({
      title: {
        text: 'PU（页面浏览量）'
      },
      tooltip: {},
      xAxis: {
        data: [' 7.23', ' 7.24', ' 7.25', ' 7.26', ' 7.27', ' 7.28']
      },
      yAxis: {},
      series: [
        {
          name: '浏览量',
          type: 'line',
          data: [50, 20, 36, 10, 10, 20]
        }
      ]
    })

    var myChart1=echarts.init(document.getElementById('uv-echart'))
    myChart1.setOption({
      title:{
        text: 'UV（独立访客数）'
      },
      tooltip:{},
      xAxis:{
        data:[' 7.23', ' 7.24', ' 7.25', ' 7.26', ' 7.27', ' 7.28']
      },
      yAxis:{},
      series:[{
        name:'访客数',
        type:'line',
        data:[20, 40, 60, 80, 10, 50]
      }]
    })

    var myChart2=echarts.init(document.getElementById('vv-echart'))
    myChart2.setOption({
      title:{
        text: 'VV（访问量）'
      },
      tooltip:{},
      xAxis:{
        data:[' 7.23', ' 7.24', ' 7.25', ' 7.26', ' 7.27', ' 7.28']
      },
      yAxis:{},
      series:[{
        name:'访客的访问次数',
        type:'line',
        data:[100, 30, 70, 20, 40, 80]
      }]
    })



    var myChart3 = echarts.init(document.getElementById('ip-echart'));
    myChart3.setOption({

        title : {
            text: 'IP归属地',
            x:'center'
        },
        tooltip : {
            trigger: 'item'
        },

        series : [
            {
                name: '数量',
                type: 'map',
                mapType: 'china',
                roam: false,
                itemStyle:{
                    normal:{
                        label:{
                            show:true,
                            textStyle: {
                                color: "rgb(249, 249, 249)"
                            }
                        }
                    },
                    emphasis:{
                        label:{show:true}
                    }
                },
                data:[
                    {name: '北京',value: 100},
                    {name: '天津',value: Math.round(Math.random()*2000)},
                    {name: '上海',value: Math.round(Math.random()*2000)},
                    {name: '重庆',value: Math.round(Math.random()*2000)},
                    {name: '河北',value: 100},
                    {name: '河南',value: Math.round(Math.random()*2000)},
                    {name: '云南',value: 5},
                    {name: '辽宁',value: 305},
                    {name: '黑龙江',value: Math.round(Math.random()*2000)},
                    {name: '湖南',value: 200},
                    {name: '安徽',value: Math.round(Math.random()*2000)},
                    {name: '山东',value: Math.round(Math.random()*2000)},
                    {name: '新疆',value: Math.round(Math.random()*2000)},
                    {name: '江苏',value: Math.round(Math.random()*2000)},
                    {name: '浙江',value: Math.round(Math.random()*2000)},
                    {name: '江西',value: Math.round(Math.random()*2000)},
                    {name: '湖北',value: Math.round(Math.random()*2000)},
                    {name: '广西',value: Math.round(Math.random()*2000)},
                    {name: '甘肃',value: Math.round(Math.random()*2000)},
                    {name: '山西',value: Math.round(Math.random()*2000)},
                    {name: '内蒙古',value: Math.round(Math.random()*2000)},
                    {name: '陕西',value: Math.round(Math.random()*2000)},
                    {name: '吉林',value: Math.round(Math.random()*2000)},
                    {name: '福建',value: Math.round(Math.random()*2000)},
                    {name: '贵州',value: Math.round(Math.random()*2000)},
                    {name: '广东',value: Math.round(Math.random()*2000)},
                    {name: '青海',value: Math.round(Math.random()*2000)},
                    {name: '西藏',value: Math.round(Math.random()*2000)},
                    {name: '四川',value: Math.round(Math.random()*2000)},
                    {name: '宁夏',value: Math.round(Math.random()*2000)},
                    {name: '海南',value: Math.round(Math.random()*2000)},
                    {name: '台湾',value: Math.round(Math.random()*2000)},
                    {name: '香港',value: Math.round(Math.random()*2000)},
                    {name: '澳门',value: Math.round(Math.random()*2000)}
                ]
            }
        ]
    })

  }

}





</script>

<style lang='less' scoped>
#box{
    width: 100%;
    height: 100px;
    border:0px solid grey ;
    border-radius: 5px;
}
  #pu-echart{
    width: 500px;
    height: 300px;
    position: absolute;
    left: 280px;
    top: 100px;
  }
  #uv-echart{
    width: 500px;
    height: 300px;
    position: absolute;
    left: 750px;
    top: 100px
  }
  #vv-echart{
    width: 500px;
    height: 300px;
    position: absolute;
    left: 280px;
    top: 370px;
  }
  #ip-echart{
    width: 500px;
    height: 300px;
    position: absolute;
    left: 750px;
    top: 370px;
  }
</style>
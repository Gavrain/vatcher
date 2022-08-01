<template>
  <div class="Performance">
    <div class="head">
      <div class="left">
        <el-select class="days" placeholder="Select" v-model="value_day" clear-icon>
          <template #prefix>
            <el-icon style="color: black;"><Clock /></el-icon>
          </template>
          <el-option v-for="item in option_days" :key="item.value" :label="item.label" :value="item.value" style="display: flex; align-items: center;">
              <el-icon><Clock /></el-icon>
              <span style="padding: 0 0 0 .5556rem">{{ item.label }}</span>
          </el-option>
        </el-select>
      </div>
      <div class="right">
        <el-input class="keywords" placeholder="请输入关键字" v-model="value_keywords" clear-icon/>
        &nbsp;&nbsp;&nbsp;
        <el-select class="time" placeholder="Select" v-model="value_time" clear-icon>
          <template #prefix>
            <el-icon style="color: black"><RefreshRight /></el-icon>
          </template>
          <el-option v-for="item in option_time" :key="item.value" :label="item.label" :value="item.value">
            <el-icon><RefreshRight /></el-icon>
            <span style="padding: 0 0 0 .5556rem">{{ item.label }}</span>
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="body">
      <el-table :data="getPerformanceData" empty-text="无数据">
        <el-table-column prop="num" label="数量" width="180" />
        <el-table-column prop="Apdex" label="Apdex " width="180">
            <template #default="scope">
            <div class="Apdex-room" >
               <span>
                 {{scope.row.Apdex.split(' ')[0]}}
                 <sub>
                  {{scope.row.Apdex.split(' ')[1]}}
                 </sub>
               </span>
            </div>
            </template>
        </el-table-column>
        <el-table-column prop="userNum" label="用户数量" width="180"/>
        <el-table-column prop="content" label="内容">
          <template #default="scope">
            <a :href="scope.row.content" >{{scope.row.content}}</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import TrendChart from '../components/TrendChart.vue'
export default {
  name: 'Performance',
  components: {
    TrendChart
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    getPerformanceData() {
      const data = this[`performanceData${this.id}`]
      if (!data) return null
      if (this.value_keywords === '') return data
      return data.filter(item => JSON.stringify(item.content).includes(this.value_keywords))
    }
  },
  data() {
    return {
      value_day: 3,
      option_days: [
        { value: 1, label: '今天' },
        { value: 2, label: '近 60 分钟' },
        { value: 3, label: '近 4 小时' },
        { value: 4, label: '近 6 小时' },
        { value: 5, label: '近 12 小时' },
        { value: 6, label: '近 24 小时' },
        { value: 7, label: '近 2 天' },
        { value: 8, label: '近 3 天' },
        { value: 8, label: '近 7 天' },
        { value: 8, label: '近 1 天' }
      ],
      value_keywords:'',
      value_time: 5,
      option_time: [
        { value: 1, label: '30s' },
        { value: 2, label: '60s' },
        { value: 3, label: '90s' },
        { value: 4, label: '120s' },
        { value: 5, label: '3m' },
        { value: 6, label: '5m' },
        { value: 7, label: '10m' }
      ],
      // 表格数据
      performanceData1: [
        {
          id: 1,
          num: 215,
          lastTime: '20:09',
          content: 'http://baidu.com',
          userNum: 24,
          Apdex:'1 0.5'
        },
        {
          id: 2,
          num: 215,
          lastTime: '20:09',
          content: 'http://baidu.com',
          userNum: 24,
          Apdex:'0.5 0.5'
        },
        {
          id: 3,
          num: 215,
          lastTime: '20:09',
          content: 'http://baidu.com',
          userNum: 24,
          Apdex:'0.5 0.25'
        },
        {
          id: 4,
          num: 215,
          lastTime: '20:09',
          content: 'http://baidu.com',
          userNum: 24,
          Apdex:'0.25 0.25'
        }
      ],
      performanceData2: [
        {
          id: 1,
          num: 215,
          lastTime: '20:09',
          content: 'wwwwxxxxx',
          userNum: 24,
          Apdex:'0.67 0.5'
        },
        {
          id: 2,
          num: 215,
          lastTime: '20:09',
          content: 'wwwwxxxxx',
          userNum: 24,
          Apdex:'1 0.25'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: space-between;
  height: 2.2222rem;
  padding: 0 2.7778rem 0 1.6667rem;

  .left {
    display: flex;
    .days {
      :deep(.el-input__wrapper) {
        width: 7.7778rem;
      }
    }
  }

  .right {
    display: flex;
    flex-flow:row,wrap;
    justify-content: space-between;
     
    .keywords{
      :deep(.el-input__wrapper) {
        height:min-content;
      }
     }
    .time {
      :deep(.el-input__wrapper) {
        width: 5.5556rem;
      }
    }
  }
}

.body {
  margin: .8333rem 1.6667rem 0;
  border: .0556rem solid var(--el-border-color);
  border-radius: .2778rem;
  border-collapse: collapse;
  
  :deep(.el-table__header) {
    th {
      color: black;
      background-color: #f1f3f7;
    }
  }
  :deep(.el-scrollbar) {
    overflow: scroll;
    max-height: 44.4444rem;
   .el-table__body {
      .el-table__row {
        font-size: .8333rem;
        height: 2.7778rem;
        .Apdex-room{
              display:"inline-flex";
              align-items:"center"; 
              font-family:"PingFang SC";
              color:"rgb(255,255,255)";
              background-color:"rgb(255,202,40)"; 
              border-radius:"16px";
              white-space:"nowrap";
              vertical-align:"center";
              justify-content:"center";
              text-decoration:"none";
          }
        .el-table_1_column_3.el-table__cell .cell {
          color: #519ef5;
          white-space: nowrap;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
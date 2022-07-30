<template>
  <div class="Abnormal">
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
        <el-select class="types" placeholder="Select" v-model="value_type" clear-icon>
          <el-option v-for="item in get_option_types" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="right">
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
      <el-table :data="getAbnormalData" empty-text="无数据">
        <el-table-column prop="num" label="数量" width="180" />
        <el-table-column prop="lastTime" label="最后出现" width="180" />
        <el-table-column prop="content" label="内容"  />

        <el-table-column prop="numVisitAffect" label="影响访客数" width="180"/>
        <el-table-column prop="trend" label="趋势" width="220">
          <template #default="scope">
            <div class="trendChart" style="max-height: 2.2222rem; max-width: 13.3333rem;">
              <TrendChart :trendData="scope.row"></TrendChart>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import TrendChart from '../components/TrendChart.vue'
export default {
  name: 'Abnormal',
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
    get_option_types() {
      return this[`option_types_${this.id}`]
    },
    getAbnormalData() {
      const data = this[`abnormalData${this.id}`]
      if (!data) return null
      if (this.value_type === 1) return data
      return data.filter(item => item.type === this.value_type)
    }
  },
  
  data() {
    return {
      value_day: 2,
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
      value_type: 1,
      option_types_1: [
        { value: 1, label: '全部' },
        { value: 2, label: '日志' },
        { value: 3, label: '警告' },
        { value: 4, label: '错误' }
      ],
      option_types_2: [
        { value: 1, label: '全部' },
        { value: 2, label: '服务器异常' },
        { value: 3, label: '网络异常' },
        { value: 4, label: '其他异常' }
      ],
      option_types_3: [
        { value: 1, label: '全部' },
        { value: 2, label: '渲染函数报错' },
        { value: 3, label: '路由组件异常' },
        { value: 4, label: '加载超时' }
      ],
      option_types_4: [
        { value: 1, label: '全部' },
        { value: 2, label: '资源下载' },
        { value: 3, label: '资源下载失败' }
      ],
      value_time: 1,
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
      abnormalData1: [
        {
          id: 1,
          num: 215,
          lastTime: '20:09',
          content: 'wwwwxxxxx',
          numVisitAffect: 24,
          type: 2
        },
        {
          id: 2,
          num: 215,
          lastTime: '20:09',
          content: 'wwwwxxxxx',
          numVisitAffect: 24,
          type: 2
        },
        {
          id: 3,
          num: 215,
          lastTime: '20:09',
          content: 'wwwwxxxxxxxxxxxxxxxwwwwxxxxxxxxxxxxxxxwwwwxxxxxxxxxxxxxxxwwwwxxxxxxxxxxxxxxx',
          numVisitAffect: 24,
          trend: 10,
          type: 3
        },
        {
          id: 4,
          num: 215,
          lastTime: '20:09',
          content: 'wwwwxxxxx',
          numVisitAffect: 24,
          trend: 10,
          type: 4
        }
      ],
      abnormalData2: [
        {
          id: 1,
          num: 215,
          lastTime: '20:09',
          content: 'wwwwxxxxx',
          numVisitAffect: 24,
          type: 2
        },
        {
          id: 2,
          num: 215,
          lastTime: '20:09',
          content: 'wwwwxxxxx',
          numVisitAffect: 24,
          trend: 10,
          type: 2
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

    .types {
      :deep(.el-input__wrapper) {
        margin: 0 1.1111rem;
        width: 7.5rem;
      }
    }
  }

  .right {
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

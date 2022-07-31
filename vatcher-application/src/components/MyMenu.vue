<template>
  <div class="Mymenu">
    <div class="box">
      <el-icon><VideoCamera /></el-icon>
      <span class="menu-title">前端监控平台</span>
    </div>
    <el-menu default-active="/survey" class="el-menu-vertical-demo" :router="true">
      <el-menu-item index="/survey">
        <el-icon><Menu /></el-icon>
        <span>概况</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><WarningFilled /></el-icon>
          <span>异常</span>
        </template>
        <el-menu-item index="/abnormal1">js异常</el-menu-item>
        <el-menu-item index="/abnormal2">接口异常</el-menu-item>
        <el-menu-item index="/abnormal3">白屏异常</el-menu-item>
        <el-menu-item index="/abnormal4">资源异常</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Platform /></el-icon>
          <span>性能数据</span>
        </template>
        <el-menu-item index="/performance1">网络请求</el-menu-item>
        <el-menu-item index="/performance2">资源下载</el-menu-item>
        <el-menu-item index="/performance3">页面</el-menu-item>
        <el-menu-item index="/performance4">页面（路由）</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/behavior">
        <el-icon><List /></el-icon>
        <span>用户行为</span>
      </el-menu-item>
      <el-menu-item index="/request">
        <el-icon><TrendCharts /></el-icon>
        <span>HTTP请求</span>
      </el-menu-item>
      <el-sub-menu index="6">
        <template #title>
          <el-icon><PictureFilled /></el-icon>
          <span>可视化</span>
        </template>
        <el-menu-item index="6-1">图表工具</el-menu-item>
        <el-menu-item index="6-2">可视化</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <el-icon><Warning /></el-icon>
          <span>警报</span>
        </template>
        <el-menu-item index="7-1">警报规则</el-menu-item>
        <el-menu-item index="7-2">警报通知</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="8">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>设置</span>
        </template>
        <el-menu-item index="8-1">常规</el-menu-item>
        <el-menu-item index="8-2">SDK</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'MyMenu',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.Mymenu {
  height: 100%;
  width: 250px;
  background-color: #f1f3f7;
  border-right: .0556rem solid var(--el-border-color);

  // 修改下拉矩形框的样式
  :deep(ul.el-menu.el-menu--inline) {
    padding: .5556rem 0 .2778rem 0;
    border-radius: .2778rem;
  }

  // 标题盒子
  .box {
    display: flex;
    align-items: center;
    height: 2.7778rem;
    padding-top: .5556rem;
    padding-left: 2.5rem;

    .menu-title {
      font-size: 1rem;
      font-weight: 400;
      margin-left: .8333rem;
      text-align: center;
    }

    .el-icon {
      font-size: 1rem;
    }
  }

  // 菜单栏
  .el-menu {
    padding: 0 .5556rem;
    height: 100%;
    background-color: #f1f3f7;
    border: 0;

    // 单标签
    .el-menu-item {

      // 选中
      &.is-active {
        background-color: #fff;
        border-radius: .2778rem;
      }
    }

    // 复合标签
    .el-sub-menu {

      // 复合标签内的单标签
      .el-menu-item {
        margin: .4444rem .5556rem;
        border-radius: .2778rem;

        &:first-child {
          margin-top: 0;
        }

        // 选中
        &.is-active {
          background-color: #f1f3f7;
        }
      }
    }
  }
}
</style>

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
        <el-menu-item index="/abnormal">脚本异常</el-menu-item>
        <el-menu-item index="">资源下载</el-menu-item>
        <el-menu-item index="">网络请求</el-menu-item>
        <el-menu-item index="">卡顿</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Platform /></el-icon>
          <span>性能数据</span>
        </template>
        <el-menu-item index="/performance">网络请求</el-menu-item>
        <el-menu-item index="">资源下载</el-menu-item>
        <el-menu-item index="">页面</el-menu-item>
        <el-menu-item index="">页面（路由）</el-menu-item>
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
  border-right: 1px solid var(--el-border-color);

  // 修改下拉矩形框的样式
  :deep(ul.el-menu.el-menu--inline) {
    padding: 10px 0 5px 0;
    border-radius: 5px;
  }

  // 标题盒子
  .box {
    display: flex;
    align-items: center;
    height: 50px;
    padding-top: 15px;
    padding-left: 45px;

    .menu-title {
      font-size: 18px;
      font-weight: 400;
      margin-left: 15px;
      text-align: center;
    }

    .el-icon {
      font-size: 18px;
    }
  }

  // 菜单栏
  .el-menu {
    padding: 0 10px;
    height: 100%;
    background-color: #f1f3f7;
    border: 0;

    // 单标签
    .el-menu-item {

      // 选中
      &.is-active {
        background-color: #fff;
        border-radius: 5px;
      }
    }

    // 复合标签
    .el-sub-menu {

      // 复合标签内的单标签
      .el-menu-item {
        margin: 8px 10px;
        border-radius: 5px;

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

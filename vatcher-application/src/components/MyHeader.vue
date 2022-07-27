<template>
  <div class="MyHeader">
    <div class="left">
      <el-link type="primary">text1</el-link>
      <el-link type="primary">text2</el-link>
      <el-link type="primary">text3</el-link>
      <el-link type="primary">text4</el-link>
      <el-link type="primary">text5</el-link>
    </div>
    <div class="right">
      <el-link type="primary">登陆</el-link>
      <el-link type="primary">注册</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style lang='less' scoped>
.MyHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 60px;
  border-bottom: 1px solid var(--el-border-color);

  .left {
    .el-link {
      margin: 0 15px;
    }
  }

  .right {
    .el-link {
      margin: 0 10px;
    }
  }
}
</style>
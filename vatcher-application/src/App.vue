<template>
  <div class="common-layout">
    <el-container>
        <MyMenu></MyMenu>
      <el-container class="right_box">
          <MyHeader></MyHeader>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyMenu from './components/MyMenu.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',
  components: {
    MyMenu,
    MyHeader
  },
  mounted() {
    console.log(document.body.scrollHeight);
  }
}
</script>

<style lang="less" scoped>
.common-layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .el-container {
    height: 100%;
  }

  .right_box {
    display: block;
  }
}
</style>

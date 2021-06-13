<template>
  <page-management></page-management>
</template>

<script>
  import PageManagement from './components/PageManagement.vue'

  export default {
    name: 'App',
    components: {
      PageManagement
    }
  }
</script>

<style>
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
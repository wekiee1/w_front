<template>
  <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
    <el-menu-item index="plan">开发计划</el-menu-item>
    <el-menu-item index="component">组件库</el-menu-item>
    <el-menu-item index="server">服务器</el-menu-item>
    <el-menu-item index="waiting">待开发</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "MicroAppBars",
  data() {
    return {
      activeIndex: "1",
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped></style>

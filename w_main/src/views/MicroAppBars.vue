<template>
  <el-menu
    mode="horizontal"
    :default-active="activeIndex"
    :ellipsis="false"
    router
    @select="handleSelect"
  >
    <el-menu-item index="main">
      <div class="el-menu-item">
        <img src="@/assets/logo.png" class="logo" />
      </div>
    </el-menu-item>
    <div class="flex-grow" />
    <div class="search_div">
      <el-input
        class="base_transition"
        :style="{ height: '42px', width: searchInputWidth + 'px' }"
        v-model="searchInfo"
        placeholder="搜索内容"
        @blur="searchBlur"
        @focus="searchFocus"
        suffix-icon="Search"
      />
    </div>
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
      searchInfo: "",
      searchInputWidth: 100,
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    searchFocus() {
      this.searchInputWidth = 300;
    },
    searchBlur() {
      if (!this.searchInfo) {
        this.searchInputWidth = 100;
      }
    },
  },
};
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.search_div {
  line-height: var(--el-menu-item-height);
}
.search_input {
  height: 42px;
  width: 100px;
}
</style>

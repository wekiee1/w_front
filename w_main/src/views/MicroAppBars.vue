<template>
  <el-menu
    mode="horizontal"
    :default-active="activeIndex"
    :ellipsis="false"
    router
    @select="handleSelect"
  >
    <el-menu-item key="main" index="/" @click="pushState('/')">
      <div class="el-menu-item">
        <img src="@/assets/logo.png" class="logo" />
      </div>
    </el-menu-item>
    <div class="flex-grow" />
    <div class="search_div">
      <el-input
        class="base_transition"
        :style="{ height: '36px', marginRight: '10px', width: searchInputWidth + 'px' }"
        v-model="searchInfo"
        placeholder="搜索内容"
        @blur="searchBlur"
        @focus="searchFocus"
        suffix-icon="Search"
      />
    </div>
    <el-menu-item key="note" index="/w/note">笔记</el-menu-item>
    <el-menu-item key="component" index="/w/component/">组件库</el-menu-item>
    <el-menu-item key="server" index="/w/server/">服务器</el-menu-item>
    <el-menu-item key="waiting" index="/w/waiting/">待开发</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "MicroAppBars",
  data() {
    return {
      activeIndex: "/plan",
      searchInfo: "",
      searchInputWidth: 100,
    };
  },
  computed: {},
  watch: {},
  methods: {
    pushState(url) {
      console.log("pushState", url);
      window.history.pushState(null, "", url);
    },
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
</style>

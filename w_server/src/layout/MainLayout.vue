<template>
  <el-container style="height: 100%">
    <el-header height="60px">
      <Header />
    </el-header>
    <el-container>
      <el-aside style="width: fit-content; height: 100%; overflow-y: auto">
        <sider-layout />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./Header.vue";
import SiderLayout from "./SiderLayout.vue";

export default {
  name: "MainLayout",
  components: { Header, SiderLayout },

  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    clickTest() {
      console.log("click Test");
    },
  },
};
</script>

<style scoped></style>

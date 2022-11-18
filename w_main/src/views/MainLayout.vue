<template>
  <el-container direction="vertical" style="height: 100%">
    <el-header>
      <micro-app-bars />
    </el-header>
    <el-main><develop-plan /></el-main>
  </el-container>
</template>

<script>
import DevelopPlan from "./DevelopPlan.vue";
import MicroAppBars from "./MicroAppBars.vue";
export default {
  components: { MicroAppBars, DevelopPlan },
  name: "MainLayout",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped></style>

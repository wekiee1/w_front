<template>
  <el-container direction="vertical" style="height: 100%">
    <el-header>
      <micro-app-bars />
    </el-header>
    <el-main id="microAppContainer">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>
  </el-container>
</template>

<script>
import MicroAppBars from "./views/MicroAppBars.vue";
export default {
  components: { MicroAppBars },
  name: "App",
};
</script>

<style></style>

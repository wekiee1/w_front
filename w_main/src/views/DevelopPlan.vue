<template>
  <el-scrollbar height="400px">
    <span v-for="(item, index) in planList" :key="item" class="scrollbar-demo-item">
      {{ `${index + 1}、 ${item.title}` }}
    </span>
  </el-scrollbar>
</template>

<script>
export default {
  name: "DevelopPlan",
  data() {
    return {
      planList: [
        { title: "完成主体框架搭建，通过标签栏完成子应用切换" },
        { title: "开发自己的笔记应用" },
        { title: "在开发过程中完善自己的组件库" },
        { title: "..." },
        { title: "..." },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  width: 500px;
  text-align: left;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>

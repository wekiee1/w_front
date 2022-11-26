<template>
  <el-container class="full">
    <el-aside class="left-border" width="300px"><note-list /></el-aside>
    <el-main><note-editor /> </el-main>
  </el-container>
</template>

<script>
import NoteEditor from "./NoteEditor.vue";
import NoteList from "./NoteList.vue";
export default {
  components: { NoteList, NoteEditor },
  name: "NoteMain",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
.left-border {
  border-right: solid 2px var(--el-menu-border-color);
}
</style>

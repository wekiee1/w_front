<template>
  <el-dialog title="保存笔记" v-model="visible" width="300px" :before-close="handleClose">
    <el-form label-width="90px">
      <el-form-item label="标题">
        <el-input :value="noteTitle" placeholder="请输入标题"></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: "SaveNoteDialog",
  props: {
    dialogVisible: {
      required: true,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      noteTitle: "",
      parentId: "",
    };
  },
  computed: {},
  watch: {
    dialogVisible(val) {
      this.visible = val;
    },
  },
  methods: {
    confirm() {},
    handleClose() {
      this.visible = false;
      this.$emit("update:dialogVisible", false);
    },
  },
};
</script>

<style scoped></style>

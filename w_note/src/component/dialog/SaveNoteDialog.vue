<script setup>
import { ref, defineEmits, watch, reactive, computed } from "vue";

const props = defineProps({
  dialogVisible: {
    required: true,
    default: false,
  },
});

watch(
  () => props.dialogVisible,
  (newValue) => {
    visible.value = newValue;
  }
);

const emit = defineEmits(["update:dialogVisible"]);

const visible = ref(props.dialogVisible);
const noteTitle = ref("");
const parentId = ref("");

const confirm = () => {
  console.log("save!");
};
const handleClose = () => {
  console.log("handleClose");
  emit("update:dialogVisible", false);
};
</script>

<style scoped></style>

<template>
  <el-dialog title="保存笔记" v-model="visible" width="30vw" @close="handleClose">
    <el-form label-width="60px" label-position="left">
      <el-col :span="20">
        <el-form-item label="标题">
          <el-input :value="noteTitle" placeholder="请输入标题" />
        </el-form-item>
      </el-col>
      <el-col :span="16">
        <el-form-item label="分类">
          <el-select :value="noteTitle" placeholder="请输入标题" />
        </el-form-item>
      </el-col>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button icon="RefreshLeft">重置</el-button>
        <el-button type="primary" @click="confirm">保存</el-button>
      </span>
    </template>
  </el-dialog>
</template>

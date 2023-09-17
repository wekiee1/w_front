<template>
  <div id="editor">
    <mavon-editor style="height: 100%" v-model="noteText" @save="saveDialogVisible = true" />
    <save-note-dialog :dialogVisible.sync="saveDialogVisible" />
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import SaveNoteDialog from "../component/dialog/SaveNoteDialog.vue";
export default {
  components: { mavonEditor, SaveNoteDialog },
  name: "NoteEditor",
  data() {
    return {
      noteText: "",
      saveDialogVisible: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    save() {
      console.log("save~ ", this.noteText);
    },
  },
};
</script>

<style scoped>
#editor {
  height: 100%;
}
</style>

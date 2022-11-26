<template>
  <div id="editor">
    <mavon-editor style="height: 100%" v-model="noteText"></mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  components: { mavonEditor },
  name: "NoteEditor",
  data() {
    return {
      noteText: "",
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
#editor {
  margin: auto;
  width: 80%;
  height: 580px;
}
</style>

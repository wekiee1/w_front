<template>
  <div class="about">
    <h1>This is an about page1</h1>
    <el-row :align="center">
      <el-col>
        <el-button @click="add">添 加</el-button>
        <el-button @click="remove">移 除</el-button>
        <el-button @click="remove">修改</el-button>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-select v-model="value" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-input v-model="options[0].label"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
    };
  },
  computed: {},
  watch: {
    options: {
      deep: true,
      handler(val) {
        console.log("数组变化", val);
      },
    },
  },
  methods: {
    add() {
      let len = this.options.length;
      this.options.push({
        value: `Option${len + 1}`,
        label: `Option${len + 1}`,
      });
    },
    remove() {
      this.options.pop();
    },
    edit() {},
  },
};
</script>

<style scoped></style>

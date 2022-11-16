<template>
  <router-view />
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

#app {
  overflow: hidden;
}
/* 全局滚动条 */
::-webkit-scrollbar {
  width: 6px !important;
}

/*滚动条里面小方块*/
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
</style>

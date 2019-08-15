<template>
  <div class="wrapper">
    <i class="el-icon-minus" @click="controlWindow('min')"></i>
    <i class="el-icon-money" @click="controlWindow('max')"></i>
    <i class="el-icon-close" @click="controlWindow('close')"></i>
  </div>
</template>
<script>
let ipcRenderer = require("electron").ipcRenderer;

export default {
  name: "close",
  components: {},
  methods: {
    controlWindow(type) {
      if (type === "min") {
        ipcRenderer.send("window-min");
      } else if (type === "max") {
        ipcRenderer.send("window-max");
      } else if (type === "close") {
        ipcRenderer.send("window-close");
      }
    }
  }
};
</script>
<style scoped lang="scss">
.wrapper {
  top: 0;
  position: fixed;
  right: 0;
  font-size: 22px;
  color: white;
  z-index: 10000;
  cursor: pointer;
  i {
    margin-right: 5px;
  }
}
</style>

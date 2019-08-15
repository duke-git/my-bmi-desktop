<template>
  <div id="wrapper">
    <div class="header">
      <ul class="img-ctn">
        <li>
          <img src="@/assets/01.gif" alt="scroll" />
        </li>
        <li>
          <img src="@/assets/02.gif" alt="img1" />
        </li>
        <li>
          <img src="@/assets/03.gif" alt="img1" />
        </li>
        <li>
          <img src="@/assets/04.gif" alt="img1" />
        </li>
        <li>
          <img src="@/assets/05.gif" alt="img1" />
        </li>
      </ul>
    </div>
    <div class="text-ctn">
      <p>计算你的BMI值。哈哈哈，就是你身体的肉肉值</p>
      <div class="start-btn" @click="start">
        <span>开</span>
        <img class="start-img" src="@/assets/start.gif" alt="scroll" />
        <span>始</span>
      </div>
    </div>
    <div class="header">
      <ul class="img-ctn">
        <li>
          <img src="@/assets/06.gif" alt="scroll" />
        </li>
        <li>
          <img src="@/assets/07.gif" alt="img1" />
        </li>
        <li>
          <img src="@/assets/08.gif" alt="img1" />
        </li>
        <li>
          <img src="@/assets/09.gif" alt="img1" />
        </li>
        <li>
          <img src="@/assets/10.gif" alt="img1" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  components: {},
  methods: {
    start() {
      this.$router.replace({ path: "/bmicalculator" });
    }
    // open(link) {
    //   this.$electron.shell.openExternal(link);
    // }
  }
};
</script>

<style scoped>
#wrapper {
  display: block;
  background: #7ebb85;
}
.header {
  background: #7ebb85;
  height: 200px;
  margin: 0 4%;
}
.img-ctn li {
  float: left;
  list-style: none;
}

.img-ctn li > img {
  width: 180px;
  height: 180px;
}

.text-ctn {
  text-align: center;
  font-size: 30px;
  font-family: "黑体";
}
.start-img {
  width: 100px;
  height: 100px;
  vertical-align: middle;
}
.start-btn {
  width: 200px;
  margin: 0 auto;
  border: 1px solid #fff;
  margin-top: 22px;
  margin-bottom: 24px;
  box-shadow: 5px 5px 10px 6px #2f5024;
  border-radius: 50px;
  color: white;
  cursor: pointer;
}
</style>

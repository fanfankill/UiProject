<template>
  <div id="app">
    <div class="container is-vertal">
      <div class="head">
        <logo></logo>
        <top></top>
      </div>
      <div class="container">
        <div class="aside">
          <asider></asider>
        </div>
        <div class="main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import top from "./components/top";
import logo from "./components/logo";
import asider from "./components/asider";


export default {
  name: "App",
  components: {
    top,
    logo,
    asider,
  },
};

</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100vh;
}
.is-vertal {
  flex-direction: column;
}
.head {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background-color: white;
  border-bottom: solid 1px gainsboro;
}
.aside {
  overflow: auto;
  width: 240px;
  background-color: white;
  margin-top: 80px;
  border-right: solid 1px gainsboro;
}
.main {
  margin-top: 80px;
  padding: 20px 0 0 40px;
  flex: 1;
  background-color: white;
  overflow: auto;
}
.main::-webkit-scrollbar {
  width: 0;
}
</style>

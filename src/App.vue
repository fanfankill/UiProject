<template>
  <div id="app">
    <div class="showsmlicon">
      <span class="iconfont icon-youceanniushouqi"></span>
    </div>
    <div class="container is-vertal">
      <div class="head-wrapper">
        <div class="head">
          <logo></logo>
          <top></top>
        </div>
      </div>
      <div class="container">
        <div class="aside">
          <asider></asider>
        </div>
        <div class="main">
          <h3 v-animate="'queue-top'" class="iscenter"><a href="#/mainview/concat">联系我们</a></h3>
          <router-view> </router-view>

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
  data() {
    return {};
  },
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

.head-wrapper {
  margin-top: 80px;
}

.head {
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 99;
  background-color: #fff;
  top: 0;
  border-bottom: solid 1px gainsboro;
}

.aside {
  overflow: auto;
  width: 240px;
  border-right: solid 1px gainsboro;
}

.main {
  padding: 20px 0 60px 40px;
  flex: 1;
  overflow: auto;
}

.main::-webkit-scrollbar {
  width: 0;
}

.showsmlicon {
  display: none;
}

@media screen and(max-width:900px) {
  .aside {
    display: none;
  }
  .showsmlicon {
    display: block;
    position: fixed;
    top: 90px;
    font-weight: 800;
    font-size: 2rem;
    text-align: center;
    width: 4rem;
    transform: rotate(180deg);
    background-color: white;
    box-shadow: 2px 0 8px #00000026;
  }
}


.iscenter {
  opacity: 0;
  &.queue-top {
    opacity: 1;
    transition: 0.6s all;
  }
}
</style>

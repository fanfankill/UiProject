<template>
  <div>
    <div class="showsmlicon">
      <span class="iconfont icon-youceanniushouqi"></span>
    </div>
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
          <keep-alive><router-view> </router-view></keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top from "../components/top";
import logo from "../components/logo";
import asider from "../components/asider";
export default {
  components: {
    top,
    logo,
    asider,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.is-vertal {
  flex-direction: column;
}

.head {
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 2001;
  top: 0;
  background-color: #fff;
  border-bottom: solid 1px gainsboro;
}

.aside {
  overflow: auto;
  height: calc(100vh - 80px);
  width: 240px;
  border-right: solid 1px gainsboro;
}

.main {
  padding: 20px 0 60px 40px;
  flex: 1;
  overflow: auto;
  height: calc(100vh - 80px);
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
</style>

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
          <show-component
            title="基础用法"
            subtitle="按钮的基础用法"
            :attributes="['type', 'size']"
            ctname="Button"
            :codes="codes"
          >
            <template v-slot:showarea>
              <ct-container>
                <ct-aside></ct-aside>
                <ct-container>
                  <ct-header></ct-header>
                  <ct-main>
                    <ct-panel></ct-panel>
                  </ct-main>
                  <ct-footer></ct-footer>
                </ct-container>
              </ct-container>
            </template>
          </show-component>
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

import ShowComponent from "./components/showcomponent";

export default {
  data() {
    return {
      codes: `
<template>
  <ct-button>按钮</ct-button>
</template>
      `,
    };
  },
  name: "App",
  components: {
    top,
    logo,
    asider,
    ShowComponent,
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
  overflow: auto;
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

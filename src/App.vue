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
            <show-parameter :title="title" :contents="contents"></show-parameter>
          <router-view>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import top from "./components/top";
import logo from "./components/logo";
import asider from "./components/asider";
import ShowParameter from "./components/showparameter/ShowParameter";

export default {
  name: "App",
  components: {
    top,
    logo,
    asider,
    ShowParameter
  }, data() {
    return {
      title: ['参数', '说明', '类型', '可选值', '默认值'],
      contents: [
        ['title', '标题', 'String', '—', '—'],
        ['confirm-button-text', '确认按钮的文字', 'String', '—', '—'],
        ['cancel-button-text', '取消按钮的文字', 'String', '—', '—'],
        ['title', '标题', 'String', '—', '—'],
        ['title', '标题', 'String', '—', '—'],
        ['title', '标题', 'String', '—', '—'],
        ['title', '标题', 'String', '—', '—']
      ]
    }
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

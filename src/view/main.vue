<template>
  <div>
    <div class="container is-vertal">
      <div class="head">
        <head-title></head-title>
        <headul></headul>
      </div>
      <div class="container">
        <div class="aside">
          <aside-ul></aside-ul>
        </div>
        <div class="main">
          <ct-panel title="基础用法" subtitle="基础的按钮用法"></ct-panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/basecss/layout.css";
import headul from "./page/top";
import HeadTitle from "./page/HeadTitle";
import AsideUl from "./aside/AsideUl";
import CtPanel from "./page/CtPanel.vue";
export default {
  components: {
    headul,
    HeadTitle,
    AsideUl,
    CtPanel
  }
};
</script>

<style>
.mainrightshowdiv {
  height: 1000px;
  width: 100%;
  background-color: white;
}
.center {
  width: 700px;
  height: 500px;
  background-color: red;
}
</style>
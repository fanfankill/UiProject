<template>
  <div>
    <div class="container is-vertal">
      <div class="head">
        <head-title></head-title>
        <headul></headul>
      </div>
      <div class="container">
        <div>
          <aside-ul></aside-ul>
        </div>
        <div class="main">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headul from "./page/top";
import HeadTitle from "./page/HeadTitle";
import AsideUl from "./aside/AsideUl";
export default {
  components: {
    headul,
    HeadTitle,
    AsideUl
  }
};
</script>

<style>
.head{
  position: relative;
}
.center {
  width: 700px;
  height: 500px;
  background-color: red;
}
.icon-youceanniushouqi{
  transform: rotate(180deg);
}
</style>
<template>
  <div class="main">
    <h1>What's CreateUI</h1>
  </div>
</template>

<script>
// import top from "../components/top";
// import logo from "../components/logo";
// import whyuse from "../components/mainchild/whyuse";
// import showperson from "../components/mainchild/showperson";
export default {
  name: "main",
  components: {
    // top,
    // logo,
    // whyuse,
    // showperson,
  },
}
</script>
<style scoped lang="less">
.head {
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 2001;
  background-color: #fff;
  top: 0;
  border-bottom: solid 1px gainsboro;
}
.main_block {
  width: 60%;
  margin: 80px auto;
}
@media screen and (max-width: 900px) {
  .main_block {
    width: 80%;
  }
}
</style>

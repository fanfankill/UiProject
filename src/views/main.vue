<template>
  <div class="main">
<<<<<<< HEAD
    <h1 @click="ddd">What's CreateUI</h1>
    
=======
    <div class="head">
      <logo></logo>
      <top></top>
    </div>
    <div class="main_block">
      <whyuse></whyuse>
      <showperson></showperson>
    </div>
>>>>>>> 7a3d1011e4eca3bf80af2827b471ac1ade43b9d2
  </div>
</template>

<script>
import top from "../components/top";
import logo from "../components/logo";
import whyuse from "../components/mainchild/whyuse";
import showperson from "../components/mainchild/showperson";
export default {
  name: "main",
<<<<<<< HEAD
  methods: {
    ddd(){
      this.$notify({
        title:'eee',
         duration: 1
      })
    }
=======
  components: {
    top,
    logo,
    whyuse,
    showperson,
>>>>>>> 7a3d1011e4eca3bf80af2827b471ac1ade43b9d2
  },
};
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

<template>
  <ul class="headul">
    <li><router-link to="/style">指南</router-link></li>
    <li><router-link to="/">组件</router-link></li>
    <li><router-link to="/">资源</router-link></li>
    <li class="iconfont icon-lights" @click="toggleMode"></li>
    <li class="iconfont icon-zhongwen"><a></a></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      mode: "light",
    };
  },
  methods: {
    toggleMode() {
      if (this.mode === "light") {
        document.body.style.backgroundColor = "#272727";
        document.body.style.color = "white";
        this.mode = "dark";
      } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        this.mode = "light";
      }
    },
  },
};
</script>

<style scoped>
.headul {
  float: right;
  height: 100%;
  list-style: none;
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.headul li {
  flex: 1;
  height: 80px;
  font-size: 16px;
  font-weight: 300;
  line-height: 80px;
  position: relative;
}
.headul a {
  display: block;
  text-decoration: none;
  color: #a8ddfa;
}

.headul a:visited::after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 1px;
  background: #409eff;
}
.headul a:hover {
  color: #21a8f3;
}
.headul a:hover::after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: calc(50% - 24px);
  width: 50px;
  height: 1px;
  background: #409eff;
}
</style>

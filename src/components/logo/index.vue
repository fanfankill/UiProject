<template>
  <div>
    <div class="headtital" @click="gotoMain">
      <span class="iconfont icon-chuangzaoli"></span>
      CreateUI
    </div>

    <ct-dropdown class="droptop" trigger="click">
      <span class="iconfont icon-hanbaoanniu"></span>
      <ct-dropdown-menu>
        <ct-dropdown-item>指南</ct-dropdown-item>
        <ct-dropdown-item>组件</ct-dropdown-item>
        <ct-dropdown-item>资源</ct-dropdown-item>
      </ct-dropdown-menu>
    </ct-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleshow() {
      console.log(1);
    },
    gotoMain() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.headtital {
  float: left;
  font-size: 28px;
  line-height: 80px;
  margin-left: 50px;
  color: #21a8f3;
  cursor: pointer;
}
.headtital span {
  font-size: 28px;
  color: #21a8f3;
}
.icon-hanbaoanniu {
  display: none;
}
.droptop {
  display: none;
}
@media screen and (max-width: 900px) {
  .headtital {
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .droptop {
    display: block;
    position: absolute;
    right: 30px;
    top: 50%;
  }
  .icon-hanbaoanniu {
    display: block;
    font-size: 2rem;
    transform: translate(0, -50%);
  }
}
</style>

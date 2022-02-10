<template>
  <ul class="headul">
    <li v-for="(item, index) in mylist" :key="index">
      <router-link :to="item.to" active-class="is-active" :class="['base_link']"
        >{{ item.name }}
      </router-link>
    </li>

    <li class="iconfont icon-github myicon" @click="togithub"></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      mylist: [
        {
          to: "/main",
          name: "指南",
        },
        {
          to: "/examples",
          name: "组件",
        },
        {
          to: "/style",
          name: "色彩",
        },
      ],
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
    togithub() {
      window.open("https://github.com/fanfankill/UiProject", "_blank");
    },
  },
};
</script>

<style scoped lang="less">
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
  text-align: center;
}
.headul li {
  flex: 1;
  height: 80px;
  font-size: 16px;
  font-weight: 300;
  line-height: 80px;
  position: relative;
}
.base_link {
  display: block;
  text-decoration: none;
  color: @info-color;
}

.base_link:hover {
  color: @info-font-color;
}
.base_link:hover::after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: calc(50% - 24px);
  width: 50px;
  height: 1px;
  background: @info-font-color;
}
.is-active {
  color: @info-font-color;
}
.is-active::after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: calc(50% - 24px);
  width: 50px;
  height: 1px;
  background: @info-font-color;
}
.myicon {
  cursor: pointer;
}
@media screen and (max-width: 900px) {
  .headul {
    display: none;
  }
}
</style>

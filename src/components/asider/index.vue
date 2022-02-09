<template>
  <div class="LeftBlock">
    <vue-scroll>
      <ul>
        <li v-for="(item, index) in sideNav" :key="index">
          <router-link
            :to="'/examples/' + item.eName"
            tag="li"
            active-class="ct-aside-active"
            >{{ `${item.name} ${item.eName}` }}</router-link
          >
        </li>
      </ul>
    </vue-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: require("./list.json"),
    };
  },
};
</script>

<style scoped lang="less">
.ct-aside-active {
  color: @main-color;
}
ul {
  width: 100%;
  margin: 10px auto;
  cursor: pointer;
}
ul li {
  height: 40px;
  line-height: 40px;
}
ul li + li {
  margin-top: 4px;
}
ul li:hover {
  background-color: #f4f7f8;
}
ul li > li {
  padding-left: 50px;
}

@media screen and (max-width: 900px) {
}
</style>

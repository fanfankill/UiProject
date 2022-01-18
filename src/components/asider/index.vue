<template>
  <div>
    <vue-scroll>
      <ul>
        <li v-for="(item, index) in sideNav" :key="index">
          <router-link :to="'/components/'+item.eName" tag="li" active-class="ct-aside-active">{{`${item.name} ${item.eName}`}}</router-link>
        </li>
      </ul>
    </vue-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: [
        {
          name: "容器",
          eName: 'container',
          href: "#",
        },
        {
          name: "标记",
          eName: 'badge',
          href: "#",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.ct-aside-active {
  color: @main-color;
  background-color: #f4f8fa;
}
ul {
  width: 100%;
  margin: 10px auto;
  cursor: pointer;
}
ul li {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
ul li+li {
  margin-top: 4px;
}
ul li:hover {
  background-color: #f4f7f8;
}

</style>

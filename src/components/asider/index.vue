<template>
  <div>
    <vue-scroll>
      <ul>
        <li v-for="(item, index) in sideNav" :key="index">
          <router-link :to="item.eName" tag="li" active-class="ct-aside-active">{{`${item.name} ${item.eName}`}}</router-link>
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
          name: "按钮",
          eName: 'button',
          href: "#",
        },
        {
          name: "链接",
          eName: 'link',
          href: "#",
        },
        {
          name: "卡片",
          eName: 'card',
          href: "#",
        },
        {
          name: "滚动",
          eName: 'roll',
          href: "#",
        },
        {
          name: "面包屑",
          eName: 'button',
          href: "#",
        },
        {
          name: "滑块",
          eName: 'button',
          href: "#",
        },
        {
          name: "气泡",
          eName: 'button',
          href: "#",
        },
        {
          name: "模态框",
          eName: 'button',
          href: "#",
        },
        {
          name: "输入框",
          eName: 'button',
          href: "#",
        },
        {
          name: "评分",
          eName: 'button',
          href: "#",
        },
        {
          name: "表格",
          eName: 'button',
          href: "#",
        },
        {
          name: "标签",
          eName: 'button',
          href: "#",
        },
        {
          name: "提示",
          eName: 'button',
          href: "#",
        },
        {
          name: "弹出框",
          eName: 'button',
          href: "#",
        },
        {
          name: "按钮",
          eName: 'button',
          href: "#",
        },
        {
          name: "链接",
          eName: 'button',
          href: "#",
        },
        {
          name: "卡片",
          eName: 'button',
          href: "#",
        },
        {
          name: "滚动",
          eName: 'button',
          href: "#",
        },
        {
          name: "面包屑",
          eName: 'button',
          href: "#",
        },
        {
          name: "滑块",
          eName: 'button',
          href: "#",
        },
        {
          name: "气泡",
          eName: 'button',
          href: "#",
        },
        {
          name: "模态框",
          eName: 'button',
          href: "#",
        },
        {
          name: "输入框",
          eName: 'button',
          href: "#",
        },
        {
          name: "评分",
          eName: 'button',
          href: "#",
        },
        {
          name: "表格",
          eName: 'button',
          href: "#",
        },
        {
          name: "标签",
          eName: 'button',
          href: "#",
        },
        {
          name: "提示",
          eName: 'button',
          href: "#",
        },
        {
          name: "弹出框",
          eName: 'button',
          href: "#",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.ct-aside-active {
  color: #62bae2;
  background-color: #f4f8fa;
}
ul {
  width: 88%;
  margin: 10px auto;
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

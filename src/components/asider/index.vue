<template>
  <div>
    <ul>
      <li v-for="(item, index) in Uiname" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Uiname: [
        {
          name: "按钮",
          href: "#",
        },
        {
          name: "链接",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  width: 100%;
}
ul li {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>

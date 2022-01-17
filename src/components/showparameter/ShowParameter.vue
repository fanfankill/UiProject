<template>
  <div>
    <table>
      <thead>
      <tr>
        <td v-for="(item,index) in title" v-bind:key="index">{{ item }}</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(content,index) in contents" :key="index">
        <td v-for="(item,index) in content" :key="index">{{ item }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ShowParameter",
  props: {
    title: Array,
    contents: Array
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  margin: 50px 0 0 50px;
  table-layout: fixed;
  width: 90%;
}

thead td {
  color: #909399;
}

tr {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #dcdfe6;
  /*white-space: nowrap;*/
}

td {
  color: #606266;
  font-size: 14px;
  font-weight: 400;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  text-align: left;
  padding-right: 100px;
  word-break: break-all;
}
</style>

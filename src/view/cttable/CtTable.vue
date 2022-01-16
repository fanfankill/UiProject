<template>
  <div>
    <table>
      <thead>
      <tr>
        <td v-for="(item,index) in title" :key="index">{{ item }}</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="content in contents" :key="content">
        <td v-for="(item,index) in content" v-bind:key="index">{{ item }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CtTable",
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
}

thead td {
  color: #909399;
}

tr {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #dcdfe6;
  white-space: nowrap;
}

td {
  color: #606266;
  font-size: 14px;
  font-weight: 400;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  text-align: left;
  padding-right: 100px;
  width: 100px;
   word-wrap: break-word;
   
  
}
</style>

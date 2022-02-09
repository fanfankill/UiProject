<template>
  <div class="main">
    <h1 @click="ddd">What's CreateUI</h1>
    
  </div>
</template>

<script>
export default {
  name: "main",
  methods: {
    ddd(){
      this.$notify({
        title:'eee',
         duration: 1
      })
    }
  },
};
</script>
<style scoped lang="less"></style>


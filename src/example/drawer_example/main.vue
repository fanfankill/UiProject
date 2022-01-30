<template>
  <div>
      <ct-button @click="opendraw=true">打开</ct-button>
    

      <ct-drawer
      title="ww"
     direction="top"
     :visible.sync="opendraw"></ct-drawer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            opendraw:false
        }
    },
}
</script>

<style>

</style>
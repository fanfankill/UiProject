<template>
  <main
  class="ct-main"
  :style="{width}">
      main
  </main>
</template>

<script>
export default {
    name:'CtMain',
    props:{
      width:String
    }
}
</script>

<style>
.ct-main{
  background-color: gold;
  flex: 1;
}
</style>
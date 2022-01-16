<template>
  <aside class="ct-aside" :style="{width}">
     aside
  </aside>
</template>

<script>

export default {
    name:'CtAside',
    props:{
      width:String
    },
}
</script>

<style>
.ct-aside{
  background-color: #21A8F3;
  display: block;
  width: 200px;
}
</style>
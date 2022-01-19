<template>
  <aside class="ct-aside" :style="{width}">
     aside
  </aside>
</template>

<script>
import '../../../theme/aside.less'
export default {
    name:'CtAside',
    props:{
      width:String
    },
}
</script>


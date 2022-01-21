<template>
  <div class="mycontainer">
    <ct-rate
        :num=num
        :size=size
        @getStarNum=getStarNum>
    </ct-rate>
  </div>
</template>

<script>

export default {
  name: 'showcompont',
  data() {
    return {
      num: 3,
      size: 16
    }
  },
  methods:{
    getStarNum(number){
      console.log(number)
    },
  }
}

</script>

<style scoped lang="less">
.mycontainer {
  // border: 2px solid @vice-color1;
  // background-color: @blue-bg-color1;
  height: 3000px;
}

.showdiv {
  height: 400px;
  width: 80%;
}

</style>

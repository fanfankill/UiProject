<template>
  <div>
    <show-comp
      title="基本滚动"
      subtitle="滚动区域的实现"
      ctname="滚动区域"
      :codes="mycode"
    >
      <template v-slot:showarea>
        <CtScrollbar :height="180">
          <p v-for="i in 40" :key="i">
            对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便
          </p>
        </CtScrollbar>
      </template>

      <template v-slot:desc>
        <div>
          可以通过
          <code>height</code>
          和
          <code>width</code>设置宽高
        </div>
      </template>
    </show-comp>
  </div>
</template>

<script>
import ShowComp from "../../../components/showcomponent";
export default {
  data() {
    return {
      mycode: `  <CtScrollbar :height="180">
    <p v-for="i in 40" :key="i">
    对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便</p>
  </CtScrollbar>`,
    };
  },
  components: {
    ShowComp,
  },
};
</script>

<style></style>

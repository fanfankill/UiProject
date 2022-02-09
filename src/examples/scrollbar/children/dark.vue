<template>
  <div>
    <show-comp
      title="黑暗主题风格"
      subtitle="滚动区域的实现"
      ctname="滚动区域"
      :codes="mycode"
    >
      <template v-slot:showarea>
        <CtScrollbar :height="180" dark>
          <div v-for="i in 40" :key="i" style="padding: 10px; font-size: 1rem">
            对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便
          </div>
        </CtScrollbar>
      </template>

      <template v-slot:desc>
        <div>通过传入<code>dark</code>使主题色变成暗色模式</div>
      </template>
    </show-comp>
  </div>
</template>

<script>
import ShowComp from "../../../components/showcomponent";
export default {
  components: {
    ShowComp,
  },
  data() {
    return {
      mycode: `<CtScrollbar :height="180" dark>
    <div  v-for="i in 40" :key="i" style="padding:10px;fontSize:1rem">
    对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便</div>
</CtScrollbar>`,
    };
  },
};
</script>

<style></style>

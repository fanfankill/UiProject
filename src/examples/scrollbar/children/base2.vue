<template>
  <div>
    <show-comp
      title="自定义样式"
      subtitle="滚动区域的实现"
      ctname="滚动区域"
      :codes="mycode"
    >
      <template v-slot:showarea>
        <CtScrollbar
          :height="180"
          :thumbstlye="thumbstlye"
          :barstyle="barStyle"
        >
          <p v-for="i in 40" :key="i">
            对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便
          </p>
        </CtScrollbar>
      </template>

      <template v-slot:desc>
        <div>
          <code>thumbstlye</code>和
          <code>barstyle</code>来自定义自己喜欢的滚动条样式
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
      mycode:
        `<template>
  <CtScrollbar
        :height="180"
        :thumbstlye="thumbstlye"
        :barstyle="barStyle">
        <p   v-for="i in 40" :key="i">
        对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便
        </p>
  </CtScrollbar>
</template>
<script>
  export default {
    data () {
      return {
       thumbstlye: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
        barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      }
      }
    }
  }
<` +
        `/` +
        `script>`,
      thumbstlye: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75,
      },
      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#027be3",
        width: "9px",
        opacity: 0.2,
      },
    };
  },
  components: {
    ShowComp,
  },
};
</script>

<style></style>

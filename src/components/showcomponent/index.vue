<template>
  <div class="panel">
    <h3>{{ this.title }}</h3>
    <p>{{ this.subtitle }}</p>
    <div class="demoblock">
      <div class="source">
        <slot name="showarea"></slot>
      </div>
      <div
        class="meta"
        id="codeblock"
        ref="ayheight"
        :style="{ height: ToBlockCodeheight + 'px' }"
      >
        <div class="description">
          <div>
            <p>
              <!-- 需要标记的属性用code标签包裹 -->
              <slot name="desc"></slot>
            </p>
          </div>
        </div>
        <div class="highlight">
          <div class="codearea">
            <!-- codeareas -->
            <pre v-highlight="codes"><code></code></pre>
          </div>
        </div>
      </div>
      <div class="demo-block-control" @click="blockControl">
        <i
          class="iconfont"
          :class="[isClose ? 'icon-downarrow' : 'icon-uparrow']"
        ></i>
        <span v-if="isClose">显示代码</span>
        <span v-else>隐藏代码</span>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/showcomponent/index.less";
export default {
  data() {
    return {
      isClose: false,
      BlockCodeheight: "",
    };
  },
  props: {
    // 标题
    title: {
      type: String,
    },
    // 副标题
    subtitle: {
      type: String,
    },
    // 组件描述
    des: {
      type: String,
    },
    // 组件名称
    ctname: {
      type: String,
    },
    // 属性列表，字符串数组
    attributes: {
      type: Array,
    },
    //需要展示的代码，建议用模板字符串
    codes: {
      type: String,
    },
  },
  computed: {
    ToBlockCodeheight: function () {
      return this.isClose ? "0" : this.BlockCodeheight;
    },
  },
  methods: {
    blockControl() {
      this.isClose = !this.isClose;
    },
  },
  mounted() {
    //先展开状态获取高度 再关闭
    this.BlockCodeheight = this.$refs.ayheight.offsetHeight;
    this.isClose = true;
  },
};
</script>
<style lang="less" scoped></style>

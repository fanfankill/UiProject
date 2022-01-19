<template>
  <div class="panel">
    <h3>{{ this.title }}</h3>
    <p>{{ this.subtitle }}</p>
    <div class="demoblock">
      <div class="source">
        <slot name="showarea"></slot>
      </div>
      <!-- <transition> -->
      <div
        class="meta"
        id="codeblock"
        ref="ayheight"
        :style="{ height: ToBlockCodeheight + 'px' }"
      >
        <div class="description">
          <div>
            <p>
              使用<code v-for="item in this.attributes" :key="item">{{
                item
              }}</code
              >属性来定义 {{ this.ctname }} 的样式。
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
      <!-- </transition> -->
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
import "../../assets/basecss/global.less";
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
      required: true,
    },
    // 属性列表，字符串数组
    attributes: {
      type: Array,
      required: true,
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
<style lang="less">
#codeblock {
  transition: all 0.3s;
}
.hljs {
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing: auto;
}
.hljs-built_in,
.hljs-keyword,
.hljs-name,
.hljs-selector-tag,
.hljs-tag {
  color: @info-font-color!important;
}
.hljs-string,
.hljs-meta,
.hljs-symbol,
.hljs-template-tag,
.hljs-template-variable,
.hljs-addition {
  color: @code-string-color!important;
}
.hljs,
.hljs-subst,
.hljs-attr {
  color: #000 !important;
}
.hljs-tag .hljs-attr {
  color: @info-font-color!important;
}
.panel {
  width: 65%;
}
.panel h3 {
  margin: 55px 0 20px;
  font-size: 22px;
  color: #1f2f3d;
  font-weight: 400;
}
.panel p {
  font-size: 14px;
  font-weight: 400;
  color: #5e6d82;
  margin: 14px 0;
}
.panel .demoblock {
  width: 100%;
  margin-bottom: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
}
.panel .demoblock:hover {
  box-shadow: 0 0 8px 0 rgb(232, 237, 250, 60%);
}
.panel .demoblock .source {
  width: 100%;
  height: auto;
  padding: 24px;
}

.panel .demoblock .source:hover ~ .demo-block-control > span {
  display: inline-block;
}

.panel .demoblock .meta {
  width: 100%;
  background-color: #fafafa;
  border-top: 1px solid #eaeefb;
  overflow: hidden;
}
.panel .demoblock .meta .description {
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  font-size: 14px;
  line-height: 22px;
  color: #666;
  word-break: break-word;
  margin: 10px;
  background-color: #fff;
}
.panel .demoblock .meta .description p {
  margin: 0;
  line-height: 26px;
  font-size: 14px;
  color: #5e6d82;
}
.panel .demoblock .meta .description code {
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-weight: 400;
  color: #5e6d82;
  background-color: #e6effb;
  margin: 0 4px;
  display: inline-block;
  padding: 1px 5px;
  font-size: 12px;
  border-radius: 3px;
  height: 18px;
  line-height: 18px;
}
.panel .demoblock .meta .highlight .codearea {
  width: 100%;
  line-height: 1.8;
  font-size: 12px;
  margin: 0;
  border: none;
  max-height: none;
  background-color: #fafafa;
  border-radius: 0;
  padding: 18px 24px;
  color: #000;
}

.panel .demoblock .demo-block-control {
  border-top: 1px solid #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  cursor: pointer;
  position: relative;
  color: #d3dce6;
}
.demo-block-control {
  transition: all 0.3s;
  overflow: hidden;
}
.panel .demoblock .demo-block-control:hover {
  color: #21a8f3;
  background-color: #f9fafc;
}
.panel .demoblock .demo-block-control:hover > span {
  opacity: 1;
  top: 0px;
}
.panel .demoblock .demo-block-control i {
  font-size: 16px;
  line-height: 44px;
}
.panel .demoblock .demo-block-control span {
  transition: all 0.3s;
  position: absolute;
  top: -20px;
  font-size: 14px;
  line-height: 44px;
  opacity: 0;
  padding-left: 8px;
}
</style>
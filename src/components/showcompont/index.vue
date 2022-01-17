<template>
  <div class="panel">
    <h3>{{ this.title }}</h3>
    <p>{{ this.subtitle }}</p>
    <div class="demoblock">
      <div class="source">
        组件展示区域
        <slot name="showarea"></slot>
      </div>
      <!-- <transition> -->
      <div class="meta" id="codeblock">
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
            codeareas
            <slot name="showarea"></slot>
          </div>
        </div>
      </div>
      <!-- </transition> -->
      <div class="demo-block-control" @click="blockControl($event)">
        <i class="iconfont icon-downarrow" @click="iblockControl($event)"></i>
        <span @click="spanblockControl($event)">显示代码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClose: false,
    };
  },
  methods: {
    blockControl(e) {
      let event1 = e.currentTarget;
      let event2 = e.target;
      let codeBlock = document.getElementById("codeblock");
      if (event1 === event2) {
        if (this.isClose) {
          codeBlock.style.height = "auto";
          e.target.children[0].classList.remove("icon-downarrow");
          e.target.children[0].classList.add("icon-uparrow");
          e.target.children[1].innerText = "隐藏代码";
          this.isClose = !this.isClose;
        } else {
          e.target.children[0].classList.add("icon-downarrow");
          e.target.children[0].classList.remove("icon-uparrow");
          e.target.children[1].innerText = "显示代码";
          codeBlock.style.height = "0";
          this.isClose = !this.isClose;
        }
      }
    },
    iblockControl(e) {
      let codeBlock = document.getElementById("codeblock");
      if (this.isClose) {
        codeBlock.style.height = "auto";
        e.target.classList.remove("icon-downarrow");
        e.target.classList.add("icon-uparrow");
        e.currentTarget.parentElement.children[1].innerText = "隐藏代码";
        this.isClose = !this.isClose;
      } else {
        codeBlock.style.height = "0";
        e.target.classList.add("icon-downarrow");
        e.target.classList.remove("icon-uparrow");
        e.currentTarget.parentElement.children[1].innerText = "显示代码";
        this.isClose = !this.isClose;
      }
    },
    spanblockControl(e) {
      let codeBlock = document.getElementById("codeblock");
      if (this.isClose) {
        codeBlock.style.height = "auto";
        e.currentTarget.parentElement.children[0].classList.remove(
          "icon-downarrow"
        );
        e.currentTarget.parentElement.children[0].classList.add("icon-uparrow");
        e.target.innerText = "隐藏代码";
        this.isClose = !this.isClose;
      } else {
        e.currentTarget.parentElement.children[0].classList.add(
          "icon-downarrow"
        );
        e.currentTarget.parentElement.children[0].classList.remove(
          "icon-uparrow"
        );
        e.target.innerText = "显示代码";
        codeBlock.style.height = "0";
        this.isClose = !this.isClose;
      }
    },
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
  },
};
</script>

<style>
/* .v-enter-active,
.v-leave-active {
  transition: all 2s linear;
}
.v-enter,
.v-leave-to {
  height: 0;
}

.v-leave, .v-enter-to {
    height: 0;
} */
/* .v-enter-active {
  animation: up 2s;
}
.v-leave-active {
  animation: down 2s;
} */
/* .v-enter, .v-leave-to {
  height: auto;
} */
/* @keyframes up {
  from {height: auto;}
  to {height: 0px;}
  
}
@keyframes down {
  from {height: 0;}
  to {height: auto;}
} */

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
  width: 870px;
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
  height: 0;
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
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
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
.panel .demoblock .demo-block-control:hover {
  color: #21a8f3;
  background-color: #f9fafc;
}
.panel .demoblock .demo-block-control:hover > span {
  display: inline-block;
  color: #21a8f3;
}
.panel .demoblock .demo-block-control i {
  font-size: 16px;
  line-height: 44px;
}
.panel .demoblock .demo-block-control span {
  position: absolute;
  font-size: 14px;
  line-height: 44px;
  transition: 0.3s;
  display: none;
  padding-left: 8px;
}
</style>
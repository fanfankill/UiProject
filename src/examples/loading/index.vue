<template>
  <div>
    <h1>Loading 加载</h1>
    <p>通过指令与服务的方式，添加加载动画</p>
    <Showcomponent title="指令用法" :codes="code1">
      <template v-slot:desc>
        <div>
          通过<code>v-loading</code>的指令方式来控制加载动画，默认为父元素加载
        </div>
      </template>
      <template v-slot:showarea>
        <div>
          <div v-loading="loading" class="container"></div>
          <ct-button @click="toggleLoading">开/关</ct-button>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent title="全屏用法" :codes="code2">
      <template v-slot:desc>
        <div>通过增加修饰符<code>fullscreen</code>来全屏加载</div>
      </template>
      <template v-slot:showarea>
        <div>
          <div v-loading.fullscreen="loading2" class="container"></div>
          <ct-button @click="toggleLoading2">开开</ct-button>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent title="Options用法" :codes="code3">
      <template v-slot:desc>
        <div>通过<code>options</code>传参一个配置对象</div>
      </template>
      <template v-slot:showarea>
        <div>
          <div v-loading:[options3]="loading3" class="container"></div>
          <ct-button @click="toggleLoading3">开/关</ct-button>
        </div>
      </template>
    </Showcomponent>

    <Showcomponent title="服务用法" :codes="code4">
      <template v-slot:desc>
        <div>通过全局<code>this.$loading()</code>来创建加载实例。</div>
        <div>
          传入的<code>target</code>为目标的标签，若<code>fullscreen</code>为true，则<code>target</code>默认无效。
        </div>
        <div>
          传入的<code>data</code>即为指令中的<code>options</code>，包含一些加载配置。
        </div>
        <div>通过调用加载实例的<code>close()</code>方法来关闭加载动画。</div>
      </template>
      <template v-slot:showarea>
        <div>
          <div ref="loading4" class="container"></div>
          <ct-button @click="toggleLoading4">开开</ct-button>
        </div>
      </template>
    </Showcomponent>

    <h2>Options</h2>
    <Showparameter :parameter="params"></Showparameter>
  </div>
</template>

<script>
import Showcomponent from "../../components/showcomponent/index.vue";
import Showparameter from "../../components/showparameter/index.vue";
export default {
  name: "loading",
  chName: "加载",
  data() {
    return {
      params: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["text", "加载时的文本内容", "String", "——", "loading..."],
          [
            "animaStyle",
            "内置的加载动画样式",
            "String",
            "normal/moon",
            "normal",
          ],
          ["spinner", "自定义加载图标类", "String", "——", "——"],
          ["fontColor", "文字颜色", "String", "RBG/16进制/英文颜色", "#008fdb"],
          [
            "bgColor",
            "背景颜色",
            "String",
            "RBG/16进制/英文颜色",
            "rgba(0, 0, 0, 0.3)",
          ],
        ],
      },
      loading: true,
      loading2: false,
      loading3: true,
      options3: {
        text: "自定义加载文字",
        animeStyle: "moon",
        bgColor: "rgba(100,100,100,0.5)",
        fontColor: "white",
      },
      code1:
        `  <template>
    <div>
      <div v-loading="loading" class="container"></div>
      <ct-button @click="toggleLoading">开/关</ct-button>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          loading: false,
        };
      },
      methods: {
        toggleLoading() {
          this.loading = !this.loading;
        },
      },
    };
    <` + `/script>`,
      code2:
        `  <template>
    <div>
      <div v-loading.fullscreen="loading2" class="container"></div>
      <ct-button @click="toggleLoading2">开/关</ct-button>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          loading2: false,
        };
      },
      methods: {
        toggleLoading2() {
          this.loading2 = true;
          setTimeout(() => {
            this.loading2 = false;
          }, 2000);
        },
      },
    };
    <` + `/script>`,
      code3:
        `  <template>
    <div>
      <div v-loading:[options3]="loading3" class="container"></div>
      <ct-button @click="toggleLoading3">开/关</ct-button>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          loading3: false,
          options3: {
            text: "自定义加载文字",
            animeStyle: "moon",
            bgColor: "rgba(100,100,100,0.5)",
            fontColor: "white",
          },
        };
      },
      methods: {
        toggleLoading3() {
          this.loading3 = !this.loading3;
        },
      },
    };
    </` + `/script>`,
      code4:
        `  <template>
    <div>
      <div ref="loading4" class="container"></div>
      <ct-button @click="toggleLoading4">开开</ct-button>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {};
      },
      methods: {
        toggleLoading4() {
          let instance = this.$loading({
            fullscreen: false,
            target: this.$refs.loading4,
            data: {
              text: "自定义文字",
              spinner: "iconfont icon-jiazai",
              fontColor: "white",
              bgColor: "rgba(100,200,100,.4)",
            },
          });
          setTimeout(() => {
            instance.close();
          }, 2000);
        },
      },
    };
    <` + `/script>`,
    };
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },
    toggleLoading2() {
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
      }, 2000);
    },
    toggleLoading3() {
      this.loading3 = !this.loading3;
    },
    toggleLoading4() {
      let instance = this.$loading({
        fullscreen: false,
        target: this.$refs.loading4,
        data: {
          text: "自定义文字",
          spinner: "iconfont icon-jiazai",
          fontColor: "white",
          bgColor: "rgba(100,200,100,.4)",
        },
      });
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
  },
  components: { Showcomponent, Showparameter },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 200px;
  background-color: @main-color3;
}
</style>

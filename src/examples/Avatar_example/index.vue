<template>
  <div>
    <showcomponent
      title="基础用法"
      subtitle="头像的基础用法"
      :attributes="['shape, size']"
      ctname="Avatar"
      :codes="code1"
    >
      <template v-slot:showarea>
        <div class="div-block">
          <div class="circle">
            <div class="sub-title">circle</div>
            <div class="demo-basic-circle">
              <div class="block">
                <ct-avatar :size="60"></ct-avatar>
              </div>
              <div class="block" v-for="size in sizeList" :key="size">
                <ct-avatar :size="size"></ct-avatar>
              </div>
            </div>
          </div>
          <div class="square">
            <div class="sub-title">square</div>
            <div class="demo-basic-square">
              <div class="block">
                <ct-avatar shape="square" :size="60"></ct-avatar>
              </div>
              <div class="block" v-for="size in sizeList" :key="size">
                <ct-avatar shape="square" :size="size"></ct-avatar>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>size</code>、<code>shape</code>属性定义 CtAvatar 的大小形状。
      </template>
    </showcomponent>
    <showcomponent
      title="展示类型"
      subtitle="头像的展示类型"
      :attributes="['src, icon']"
      ctname="Avatar"
      :codes="code2"
    >
      <template v-slot:showarea>
        <div class="div-block">
          <div class="circle">
            <div class="sub-title">icon展示</div>
            <div class="demo-basic-circle">
              <div class="block">
                <ct-avatar icon="icon-avatartest" :size="60"></ct-avatar>
              </div>
              <div class="block" v-for="size in sizeList" :key="size">
                <ct-avatar icon="icon-avatartest" :size="size"></ct-avatar>
              </div>
            </div>
          </div>
          <div class="square">
            <div class="sub-title">图片展示</div>
            <div class="demo-basic-square">
              <div class="block">
                <ct-avatar :src="imgsrc" shape="square" :size="60"></ct-avatar>
              </div>
              <div class="block" v-for="size in sizeList" :key="size">
                <ct-avatar
                  :src="imgsrc"
                  shape="square"
                  :size="size"
                ></ct-avatar>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        使用<code>icon</code>、<code>src</code>属性定义 CtAvatar 的展示类型。
      </template>
    </showcomponent>
    <template>
      <showcomponent
        title="图片如何适应容器框"
        subtitle="头像的适应容器"
        :attributes="['fit']"
        ctname="Avatar"
        :codes="code3"
      >
        <template v-slot:showarea>
          <div class="demo-fit">
            <div class="block" v-for="fit in fits" :key="fit">
              <span class="title">{{ fit }}</span>
              <ct-avatar
                shape="square"
                :size="100"
                :fit="fit"
                :src="url"
              ></ct-avatar>
            </div>
          </div>
        </template>
        <template v-slot:desc>
          使用<code>fit</code>属性定义 CtAvatar 如何适应容器，同原生object-fit一样。
        </template>
      </showcomponent>
    </template>
  </div>
</template>

<script>
import showcomponent from "../../components/showcomponent";
export default {
  name: "avatar",
  chName: "头像",
  components: {
    showcomponent,
  },
  data() {
    return {
      sizeList: ["large", "medium", "mini"],
      imgsrc: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      code1: `<div class="div-block">
  <div class="circle">
    <div class="sub-title">circle</div>
      <div class="demo-basic-circle">
        <div class="block"><ct-avatar :size="60"></ct-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <ct-avatar :size="size"></ct-avatar>
        </div>
      </div>
    </div>
  <div class="square">
    <div class="sub-title">square</div>
      <div class="demo-basic-square">
        <div class="block"><ct-avatar shape="square" :size="60"></ct-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <ct-avatar shape="square" :size="size"></ct-avatar>
        </div>
      </div>
    </div>
</div>
<script>
  export default {
    data () {
      return {
        sizeList: ["large", "medium", "mini"]
      }
    }
  }
<` + `/` + `script>`,
      code2: `<div class="div-block">
  <div class="circle">
    <div class="sub-title">icon展示</div>
      <div class="demo-basic-circle">
        <div class="block"><ct-avatar icon="icon-avatartest" :size="60"></ct-avatar></div>
          <div class="block" v-for="size in sizeList" :key="size">
            <ct-avatar icon="icon-avatartest" :size="size"></ct-avatar>
          </div>
      </div>
  </div>
  <div class="square">
    <div class="sub-title">图片展示</div>
      <div class="demo-basic-square">
        <div class="block"><ct-avatar :src="imgsrc" shape="square" :size="60"></ct-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <ct-avatar :src="imgsrc" shape="square" :size="size"></ct-avatar>
        </div>
      </div>
  </div>
</div>
<script>
  export default {
    data () {
      return {
        sizeList: ["large", "medium", "mini"],
        imgsrc: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      }
    }
  }
<` + `/` + `script>`,
      code3: `<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
        <span class="title">{{ fit }}</span>
        <ct-avatar shape="square" :size="100" :fit="fit" :src="url"></ct-avatar>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
<` + `/` + `script>`,
    };
  },
};
</script>

<style lang="less" scoped>
.div-block {
  display: flex;
}
.circle,
.square {
  flex: 1;
}
.circle {
  border-right: 1px solid @grey-bg-color2;
}
.sub-title {
  text-align: center;
  margin-bottom: 5px;
  color: @grey-bg-color2;
}
.demo-basic-square,
.demo-basic-circle {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;
  .block {
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
  }
  .title {
    color: @grey-bg-color2;
    margin-bottom: 5px;
  }
}
</style>
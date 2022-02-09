<template>
  <div class="shower">
    <h2>开发人员</h2>
    <div class="showmybtn">
      <span class="iconfont icon-left" @click="toleftchange"></span>
      <span class="iconfont icon-right" @click="torightchange"></span>
    </div>

    <div
      class="middle_intrdo_showblock"
      @mouseenter="stopintervar"
      @mouseleave="startinterval"
    >
      <div class="scrollblock" ref="scrollblock">
        <div
          ref="scrollchild"
          class="show_intrdoicon"
          v-for="(item, index) in myintrdolist"
          :key="index"
        >
          <img :src="item.img" />
          <h4>{{ item.htitle }}</h4>
          <div class="showourname">{{ item.name }}</div>
          <p v-html="item.ptitle"></p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      myintrdolist: [
        {
          img: "https://avatars.githubusercontent.com/u/63303149?s=40&v=4",
          htitle: "fanfankill",
          name: "范劲希",
          ptitle:
            "负责总体页面搭建、设计、布局和部分组件开发，开发组件有<code class='mycode'>cotainer</code>、<code>dropdown</code>、<code>scrollbar</code>开发，并且协调组员开发合作，进行代码提交合并。",
        },
        {
          img: "https://avatars.githubusercontent.com/u/54534553?v=4",
          htitle: "Gypsophlia",
          name: "马晓亮",
          ptitle:
            "负责项目文件结构与逻辑优化、色彩的搭配与全局引入、组件开发及实例页面的完成，完成组件有Loading，Steps，Chatbox。",
        },
        {
          img:
            "https://avatars.githubusercontent.com/u/89287732?s=400&u=1bbc7ced1045c7227ef310f7ba9328ead7d13ced&v=4",
          htitle: "MrEphemera",
          name: "谭永佳",
          ptitle:
            "负责组件开发的工作，开发的组件有description、button、radio、row,col组件。",
        },
        {
          img: "https://avatars.githubusercontent.com/u/56378818?v=4",
          htitle: "Eddy",
          name: "陈浩东",
          ptitle:
            "负责组件展示界面开发以及组件库开发工作，开发的组件有Rate评分组件、Message消息提示组件",
        },
        {
          img:
            "https://avatars.githubusercontent.com/u/85024934?s=40&u=2fbbec84605b46da759b0febc1f32234eedb2cbd&v=4",
          htitle: "coder-lbw",
          name: "李邦伟",
          ptitle:
            "负责页面的部分开发和组件开发，完成了页面的左侧导航，开发的组件有CtTabs、CtTree。",
        },
        {
          img: "https://avatars.githubusercontent.com/u/66615118?v=4",
          htitle: "123mutoumutou",
          name: "冯艳菊",
          ptitle: "负责组件的开发，开发组件有switch,link。",
        },
        {
          img:
            "https://avatars.githubusercontent.com/u/52449327?s=400&u=d9e5bc7f35bc6e08b68670debc8e7849c547598e&v=4",
          htitle: "WQ15652799191",
          name: "吴庆",
          ptitle: "负责代码展示组件开发，Avatar、Dialog组件开发",
        },
        {
          img:
            "https://avatars.githubusercontent.com/u/72749814?s=400&u=2b65d178beb52eb805eeef8d936b195fde2aa903&v=4",
          htitle: "haomoon",
          name: "李鑫月",
          ptitle: "负责部分组件开发，开发的组件有badge、notification、skeleton",
        },
      ],
      currentindex: 0,
      timer: "",
    };
  },
  mounted(){
      this.startinterval()
  },
  beforeDestroy(){
    this.stopintervar()
  },

  methods: {
    toleftchange() {
      this.stopintervar();
      this.leftchange();
      this.startinterval();
    },

    torightchange() {
      this.stopintervar();
      this.rightchange();
      this.startinterval();
    },
    leftchange() {
      if (this.currentindex == 0) {
        console.log(1);
      } else {
        this.currentindex++;
       this.$nextTick(()=>{
          this.$refs.scrollblock.style.transform = `translateX(${this.$refs.scrollchild[0].offsetWidth * this.currentindex}px)`;
       })
      }
    },
    rightchange() {
      let maxlength;
      if (document.body.offsetWidth >= 900)
        maxlength = this.myintrdolist.length - 3;
      else {
        maxlength = this.myintrdolist.length - 1;
      }
      if (-this.currentindex >= maxlength) {
        this.$nextTick(()=>{
          this.$refs.scrollblock.style.transform = `translateX(0px)`;
        })
        this.currentindex = 0;
      } else {
        this.currentindex--;
       this.$nextTick(()=>{
          this.$refs.scrollblock.style.transform = `translateX(${this.$refs.scrollchild[0].offsetWidth * this.currentindex}px)`;
       })
      }
    },

    /**进入计时和离开计时 */
    stopintervar() {
      clearInterval(this.timer);
    },
    startinterval() {
      this.timer = setInterval(this.rightchange, 2000);
    },
  },
};
</script>

<style scoped>
.shower {
  position: relative;
}
h2 {
  margin: 80px 0 0 0;
  font-size: 2rem;
}
.showperson {
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.showperso_block {
  width: 25%;
  text-align: center;
}
.showperso_block img {
  border-radius: 100%;
  height: 60px;
  width: 60px;
}
.mycode {
  color: #21a8f3;
  background-color: #cfecfc;
  padding: 1px 5px;
}
.showperso_block h3 {
  margin-top: 10px;
  color: #99a9bf;
}

.middle_intrdo_showblock {
  text-align: center;
  padding-bottom: 10rem;
  border-bottom: 1px solid #cfcfcf;
  overflow: hidden;
}
.scrollblock {
  display: flex;
  flex-wrap: nowrap;
  transition: all 0.5s;
}
/**icon展示区 */
.show_intrdoicon {
  min-width: 33.3%;
  transition: all 0.5s;
  margin-top: 40px;
  padding: 20px;
  cursor: pointer;
}
.show_intrdoicon img {
  border-radius: 100%;
  width: 80px;
  height: 80px;
  transition: all 0.5s;
}
.show_intrdoicon h4 {
  font-size: 1.5rem;
  font-weight: 200;
  margin: 1rem 0 0 0;
}

.showourname {
  margin: 5px 0 10px 0;
  color: #5b5b5b;
}
.show_intrdoicon p {
  color: #5b5b5b;
}
.show_intrdoicon:hover img {
  transform: translate(0, -10%);
}
/* .show_intrdoicon:hover {
  background-color: rgb(94, 148, 230);
  color: white;
}
.show_intrdoicon:hover p,span {
  color: white;
} */
.show_intrdoicon:hover span {
  animation: spanmove 0.5s;
}
.showmybtn {
  position: absolute;
  top: 0;
  right: 0;
}
.showmybtn span {
  color: gainsboro;
  font-size: 2rem;
  display: inline-block;
  border: 1px solid gainsboro;
}
@media screen and (max-width: 900px) {
  .middle_intrdo {
    width: 100%;
    border-bottom: 1px solid #cfcfcf;
  }
  .showmybtn {
    font-size: 1rem;
  }
  .middle_intrdo_showblock {
    flex-direction: column;
    border: none;
  }
  .show_intrdoicon {
    min-width: 100%;
  }
}
</style>
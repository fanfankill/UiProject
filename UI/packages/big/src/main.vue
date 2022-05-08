<template>
  <div id="magnifier">
    <div
      id="normal"
      class="normal"
      @mousemove="bigmove($event)"
      @mouseover="visibility = true"
      @mouseleave="visibility = false"
      :style="{
        width: width + 'px',
        height: height + 'px',
      }"
    >
      <img :src="normalsrc" alt="" />
      <span
        class="lay"
        id="big"
        v-if="visibility"
        :style="{
          ...bigstyle,
          width: width / scale + 'px',
          height: height / scale + 'px',
        }"
      ></span>
    </div>
    <div
      id="bigdiv"
      class="big"
      v-show="visibility"
      :style="{
        width: width + 'px',
        height: height + 'px',
      }"
    >
      <img
        :src="bigsrc"
        alt=""
        id="bigImg"
        :style="{
          ...bigImgstyle,
          width: width * scale + 'px',
          height: height * scale + 'px',
        }"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "CtBig",
  data() {
    return {
      visibility: true,
      bigstyle: {
        left: "",
        top: "",
      },
      bigImgstyle: {
        left: "",
        top: "",
      },
    };
  },
  mounted() {
    let bigdiv = document.getElementById("bigdiv");
    console.log(this.width);
    if (this.position === "right") {
      bigdiv.style.left = this.width + 20 + "px";
    }
    if (this.position === "bottom") {
      bigdiv.style.left = 0 + "px";
      bigdiv.style.top = this.height + 20 + "px";
    }
    if (this.position === "left") {
      bigdiv.style.left = -(this.width + 20) + "px";
    }
    if (this.position === "top") {
      bigdiv.style.left = 0 + "px";
      bigdiv.style.top = -(this.height + 20) + "px";
    }
    this.visibility = false;
  },
  methods: {
    bigmove: function (e) {
      let event = e || window.event;
      this.handlemove(event);
    },
    handlemove(event) {
      let big = document.getElementById("big");
      let normal = document.getElementById("normal");
      let magnifier = document.getElementById("magnifier");

      let x = event.clientX - magnifier.offsetLeft - big.offsetWidth / 2;
      let y = event.clientY - magnifier.offsetTop - big.offsetHeight / 2;
      let maskWidth = normal.offsetWidth - big.offsetWidth;
      let maskHeight = normal.offsetHeight - big.offsetHeight;
      let left = x;
      let top = y;
      if (left <= 0) {
        left = 0;
      } else if (left > maskWidth) {
        left = maskWidth;
      }
      if (top <= 0) {
        top = 0;
      } else if (top > maskHeight) {
        top = maskHeight;
      }
      this.bigstyle.left = left + "px";
      this.bigstyle.top = top + "px";
      // let scale = 2;
      let bigx = left * this.scale;
      let bigy = top * this.scale;
      this.bigImgstyle.left = -bigx + "px";
      this.bigImgstyle.top = -bigy + "px";
    },
  },
  props: {
    normalsrc: {
      type: String,
      required: true,
    },
    bigsrc: {
      type: String,
      required: true,
    },
    scale: {
      type: Number,
      default: 2,
    },
    position: {
      type: String,
      validator(val) {
        return ["left", "right", "top", "bottom"].includes(val);
      },
      default: "right",
    },
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 300,
    },
  },
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
#magnifier {
  position: relative;
}
.normal {
  width: 300px;
  height: 300px;
  // margin-right: 50px;
  position: relative;
}
.normal > img {
  width: 100%;
  height: 100%;
}
.lay {
  width: 150px;
  height: 150px;
  background: orange;
  opacity: 0.5;
  position: absolute;
  left: 0;
  top: 0;
  cursor: move;
}
.big {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 320px;
  top: 0px;
  overflow: hidden;
  z-index: 9999;
}
.big > img {
  width: 600px;
  height: 600px;
  position: absolute;
  display: block;
}
</style>
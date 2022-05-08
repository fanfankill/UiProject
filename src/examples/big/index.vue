<template>
    <div>
        <h1>放大镜 Big</h1>
        <p>使用放大镜可以看到放大后图片的细节</p>
        <showcomponent
        title="基础用法"
        subtitle="放大镜的用法的基础用法"
        :attributes="['normalsrc, bigsrc, scale, position']"
        ctname="CtBig"
        :codes="code">
            <template v-slot:showarea>
                <div class="div-block">
                    <ct-big :normalsrc="normalsrc" :bigsrc="bigsrc" :scale="4" :width="200" :height="200" position="right"></ct-big>
                </div>
            </template>
            <template v-slot:desc>
                使用<code>normalsrc</code>、<code>bigsrc</code>、<code>scale</code>、<code>position</code>属性定义 CtBig 的图片路径、放大倍数和放大位置。
            </template>
        </showcomponent>
        <h2>Attribute</h2>
        <show-parameter :parameter="parameter"></show-parameter>
    </div>
</template>
<script>
import showcomponent from "../../components/showcomponent";
import showparameter from "../../components/showparameter";
export default {
    name: "big",
    chName: "放大镜",
    data() {
        return {
             parameter: {
                title: ["参数", "说明", "类型", "可选值", "默认值", "必填"],
                contents: [
                ["normalsrc", "放大前的图片src", "string", "", "", "是"],
                ["bigsrc", "放大后图片src","string","","","是"],
                ["scale", "放大倍数", "Number", "", "2", ""],
                ["width", "放大前的图片宽度", "Number", "", "300", ""],
                ["height", "放大前的图片高度", "Number", "", "300", ""],
                ["position", "放大后的图片位置", "String", "right/left/top/bottom", "right", ""]
                ],
            },
            normalsrc: "https://uploadfiles.nowcoder.com/images/20211201/920662346_1638327818015/FE8B1A979ADF6E3C2C114AF3F9CA693C",
            bigsrc: "https://uploadfiles.nowcoder.com/images/20211201/920662346_1638327818015/FE8B1A979ADF6E3C2C114AF3F9CA693C",
            code:`<div class="div-block">
  <ct-big 
  :normalsrc="normalsrc"
  :bigsrc="bigsrc"
  :scale="4"
  :width="200"
  :height="200"
  position="right"></ct-big>
</div>`
        }
    },
    components: {
    showcomponent,
    ShowParameter: showparameter
  },
}
</script>
<style lang="less" scoped>
.div-block {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<template>
  <div>
    <h1>Skeleton 骨架屏</h1>
    <p>用于在加载实际页面数据之前显示内容的占位符预览。</p>
     <Showcomponent title="基础用法" subtitle="基础的骨架效果" :codes="code1">
      <template v-slot:desc>
        <div>
           默认为类型为text,宽度默认会充满父盒子
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <ct-skeleton></ct-skeleton>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="动画效果" subtitle="显示动画效果" :codes="code2">
      <template v-slot:desc>
        <div>
           通过<code>animated</code>属性来定义是否显示动画效果
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <ct-skeleton animated></ct-skeleton>
            <ct-skeleton animated></ct-skeleton>
            <ct-skeleton animated></ct-skeleton>
            <ct-skeleton animated></ct-skeleton>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="预定义类型" subtitle="包含一些基本类型" :codes="code3">
      <template v-slot:desc>
        <div>
            Skeleton 组件准备了六种基本类型：<code>text</code>、<code>circle</code>、<code>btn</code>、<code>badge</code>、<code>chip</code> 。通过<code>type</code>字段来设置，除此以外的值将被忽略。
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <div><p>"text"</p><ct-skeleton type="text"></ct-skeleton></div>
            <div><p>"circle"</p><ct-skeleton type="circle"></ct-skeleton></div>
            <div><p>"rect"</p><ct-skeleton type="rect"></ct-skeleton></div>
            <div><p>"btn"</p><ct-skeleton type="btn"></ct-skeleton></div>
            <div><p>"badge"</p><ct-skeleton type="badge"></ct-skeleton></div>
            <div><p>"chip"</p><ct-skeleton type="chip"></ct-skeleton></div>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="大小" subtitle="定义元素大小" :codes="code4">
      <template v-slot:desc>
        <div>
           通过<code>size</code>、<code>height</code>、<code>width</code>属性来设置Skeleton 组件的大小
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <div style="display:flex;margin-bottom:10px">
                <ct-skeleton animated type="circle" size="80px"></ct-skeleton>
                <div style="margin:auto 20px;width:100%">
                    <ct-skeleton animated width="90%"></ct-skeleton>
                    <ct-skeleton animated width="90%"></ct-skeleton>
                </div>
            </div>
            <ct-skeleton animated type="rect" height="200px"></ct-skeleton>
            <div style="display:flex;justify-content:space-between;margin-top:10px;">
                <ct-skeleton animated type="chip" width="100px"></ct-skeleton>
                <ct-skeleton animated type="btn"></ct-skeleton>
            </div>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="颜色" subtitle="自定义背景色" :codes="code5">
      <template v-slot:desc>
        <div>
           通过<code>color</code>属性来为Skeleton 组件设置合适的颜色。
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <ct-skeleton type="badge" color="#ed437d"></ct-skeleton>
            <ct-skeleton color="#6CBFEA"></ct-skeleton>
            <ct-skeleton color="#E59BB4"></ct-skeleton>
            <ct-skeleton color="#FBB47B"></ct-skeleton>
            <ct-skeleton color="#A098E5"></ct-skeleton>
        </div>
      </template>
    </Showcomponent>
    <Showparameter title="Attributes" :parameter="parameter" style="margin-top:150px;"></Showparameter> 
  </div>
</template>

<script>
import Showcomponent from "../../components/showcomponent/index.vue";
import Showparameter from "../../components/showparameter/index.vue";
export default {
  name: "skeleton",
  chName: "骨架屏",
  components: { Showcomponent,Showparameter},
  data() {
      return {
          code1:`<ct-skeleton></ct-skeleton>`,
          code2:`<ct-skeleton animated></ct-skeleton>
<ct-skeleton animated></ct-skeleton>
<ct-skeleton animated></ct-skeleton>
<ct-skeleton animated></ct-skeleton>`,
          code3:`<div><p>"text"</p><ct-skeleton type="text"></ct-skeleton></div>
<div><p>"circle"</p><ct-skeleton type="circle"></ct-skeleton></div>
<div><p>"rect"</p><ct-skeleton type="rect"></ct-skeleton></div>
<div><p>"btn"</p><ct-skeleton type="btn"></ct-skeleton></div>
<div><p>"badge"</p><ct-skeleton type="badge"></ct-skeleton></div>
<div><p>"chip"</p><ct-skeleton type="chip"></ct-skeleton></div>`,
          code4:`<div style="display:flex;margin-bottom:10px">
    <ct-skeleton animated type="circle" size="80px"></ct-skeleton>
    <div style="margin:auto 20px;width:100%">
        <ct-skeleton animated width="90%"></ct-skeleton>
        <ct-skeleton animated width="90%"></ct-skeleton>
    </div>
</div>
<ct-skeleton animated type="rect" height="200px"></ct-skeleton>
<div style="display:flex;justify-content:space-between;margin-top:10px;">
    <ct-skeleton animated type="chip" width="100px"></ct-skeleton>
    <ct-skeleton animated type="btn"></ct-skeleton>
</div>`,
        code5:`<ct-skeleton type="badge" color="#ed437d"></ct-skeleton>
<ct-skeleton color="#6CBFEA"></ct-skeleton>
<ct-skeleton color="#E59BB4"></ct-skeleton>
<ct-skeleton color="#FBB47B"></ct-skeleton>
<ct-skeleton color="#A098E5"></ct-skeleton>`,
      parameter:{
        title:['参数','说明','类型','可选值','默认值'],
        contents:[
          ['animated','是否使用动画','Boolean','true / false','false'],
          ['type','当前显示的占位元素的类型','String','text / rect / circle / btn / badge / chip','text'],
          ['size','设置当前元素的大小,主要用于圆','String','—','—'],
          ['height','设置当前元素的高度','String','—','—'],
          ['width','设置当前元素的宽度','String','—','—'],
          ['color','设置当前元素的背景色','String','—','#efefef'],
        ]
      }
      }
  },
}
</script>

<style>

</style>
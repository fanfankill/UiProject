<template>
  <div>
    <h1>badge 标记</h1>
    <p>出现在按钮、图标旁的数字或状态标记。</p>
     <Showcomponent title="基础用法" subtitle="展示新消息数量。" :codes="code1">
      <template v-slot:desc>
        <div>
            定义<code>value</code>属性，它接受<code>Number</code>或者<code>String</code>。
        </div>
      </template>
      <template v-slot:showarea>
        <div class="box_layout">
           <ct-badge :value="99">
                <ct-button size="small">评论</ct-button>
           </ct-badge>
           <ct-badge :value="1" type="success">
                <ct-button size="small">回复</ct-button>
           </ct-badge>
           <ct-badge :value="2" type="primary">
                <ct-button size="small">评论</ct-button>
           </ct-badge>
           <ct-badge :value="3" type="warning">
                <ct-button size="small">回复</ct-button>
           </ct-badge>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="最大值" subtitle="可自定义最大值。" :codes="code2">
      <template v-slot:desc>
        <div>
            由<code>max</code>属性定义，它接受一个<code>Number</code>，需要注意的是，只有当<code>value</code>为<code>Number</code>时，它才会生效。
        </div>
      </template>
      <template v-slot:showarea>
        <div class="box_layout">
           <ct-badge :value="100" :max="99">
                <ct-button size="small">评论</ct-button>
           </ct-badge>
           <ct-badge :value="100" :max="10">
                <ct-button size="small">回复</ct-button>
           </ct-badge>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="自定义内容" subtitle="可以显示数字以外的文本内容。" :codes="code3">
      <template v-slot:desc>
        <div>
            定义<code>value</code>为<code>String</code>类型是时可以用于显示自定义文本。
        </div>
      </template>
      <template v-slot:showarea>
        <div class="box_layout">
           <ct-badge value="new">
                <ct-button size="small">评论</ct-button>
           </ct-badge>
           <ct-badge value="hot">
                <ct-button size="small">回复</ct-button>
           </ct-badge>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="小红点" subtitle="以红点的形式标注需要关注的内容。" :codes="code4">
      <template v-slot:desc>
        <div>
            除了数字外，设置<code>is-dot</code>属性，它接受一个<code>Boolean</code>。
        </div>
      </template>
      <template v-slot:showarea>
        <div class="box_layout">
           <ct-badge is-dot>
                <a href="#">一个连接</a>
           </ct-badge>
           <ct-badge is-dot>
                <ct-button size="small" class="iconfont icon-lights"></ct-button>
           </ct-badge>
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
  name: "badge",
  chName: "标记",
  components: { Showcomponent,Showparameter },
  data() {
      return {
          code1:`<div class="box_layout">
    <ct-badge :value="99">
        <ct-button size="small">评论</ct-button>
    </ct-badge>
    <ct-badge :value="1" type="success">
        <ct-button size="small">回复</ct-button>
    </ct-badge>
    <ct-badge :value="2" type="primary">
        <ct-button size="small">评论</ct-button>
    </ct-badge>
    <ct-badge :value="3" type="warning">
        <ct-button size="small">回复</ct-button>
    </ct-badge>
</div>

<style>
.box_layout{
    display: flex;
    justify-content: space-around;
}
</style>
`,
          code2:`<div class="box_layout">
    <ct-badge :value="100" :max="99">
        <ct-button size="small">评论</ct-button>
    </ct-badge>
    <ct-badge :value="100" :max="10">
        <ct-button size="small">回复</ct-button>
    </ct-badge>
</div>

<style>
.box_layout{
    display: flex;
    justify-content: space-around;
}
</style>
`,        
          code3:`<div class="box_layout">
    <ct-badge value="new">
        <ct-button size="small">评论</ct-button>
    </ct-badge>
    <ct-badge value="hot">
        <ct-button size="small">回复</ct-button>
    </ct-badge>
</div>

<style>
.box_layout{
    display: flex;
    justify-content: space-around;
}
</style>
`,         
          code4:`<div class="box_layout">
    <ct-badge is-dot>
        <a href="#">一个连接</a>
    </ct-badge>
    <ct-badge is-dot>
        <ct-button size="small" class="iconfont icon-lights"></ct-button>
    </ct-badge>
</div>

<style>
.box_layout{
    display: flex;
    justify-content: space-around;
}
a{text-decoration: none;
color: #2D8CF0;}
</style>
`,     
      parameter:{
        title:['参数','说明','类型','可选值','默认值'],
        contents:[
          ['value','显示值','String,Number','—','—'],
          ['max','最大值，超过最大值会显示 {max}+，要求 value 是 Number 类型','Number','—','—'],
          ['is-dot','小圆点','Boolean','—','false'],
          ['hidden','隐藏 badge','Boolean','—','false'],
          ['type','类型','String','primary / success / warning / danger / info	','—'],
        ]
      }              
      }
  },
}
</script>

<style>
.box_layout{
    display: flex;
    justify-content: space-around;
}
a{text-decoration: none;
color: #2D8CF0;}
</style>
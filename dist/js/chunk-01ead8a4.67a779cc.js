(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01ead8a4"],{"282c":function(t,s,i){},"2f93":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"panel"},[i("h3",[t._v(t._s(this.title))]),i("p",[t._v(t._s(this.subtitle))]),i("div",{staticClass:"demoblock"},[i("div",{staticClass:"source"},[t._t("showarea")],2),i("div",{ref:"ayheight",staticClass:"meta",style:{height:t.ToBlockCodeheight+"px"},attrs:{id:"codeblock"}},[i("div",{staticClass:"description"},[i("div",[i("p",[t._t("desc")],2)])]),i("div",{staticClass:"highlight"},[i("div",{staticClass:"codearea"},[i("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:t.codes,expression:"codes"}]},[i("code")])])])]),i("div",{staticClass:"demo-block-control",on:{click:t.blockControl}},[i("i",{staticClass:"iconfont",class:[t.isClose?"icon-downarrow":"icon-uparrow"]}),t.isClose?i("span",[t._v("显示代码")]):i("span",[t._v("隐藏代码")])])])])},e=[],c=(i("7134"),{data:function(){return{isClose:!1,BlockCodeheight:""}},props:{title:{type:String},subtitle:{type:String},des:{type:String},ctname:{type:String},attributes:{type:Array},codes:{type:String}},computed:{ToBlockCodeheight:function(){return this.isClose?"0":this.BlockCodeheight}},methods:{blockControl:function(){this.isClose=!this.isClose}},mounted:function(){this.BlockCodeheight=this.$refs.ayheight.offsetHeight,this.isClose=!0}}),n=c,r=i("2877"),o=Object(r["a"])(n,a,e,!1,null,"3fa4a79b",null);s["a"]=o.exports},"5e2f":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("h1",[t._v("Avatar 头像")]),i("p",[t._v("用图标、图片或者字符的形式展示用户或事物信息。")]),i("showcomponent",{attrs:{title:"基础用法",subtitle:"头像的基础用法",attributes:["shape, size"],ctname:"Avatar",codes:t.code1},scopedSlots:t._u([{key:"showarea",fn:function(){return[i("div",{staticClass:"div-block"},[i("div",{staticClass:"circle"},[i("div",{staticClass:"sub-title"},[t._v("circle")]),i("div",{staticClass:"demo-basic-circle"},[i("div",{staticClass:"block"},[i("ct-avatar",{attrs:{size:60}})],1),t._l(t.sizeList,(function(t){return i("div",{key:t,staticClass:"block"},[i("ct-avatar",{attrs:{size:t}})],1)}))],2)]),i("div",{staticClass:"square"},[i("div",{staticClass:"sub-title"},[t._v("square")]),i("div",{staticClass:"demo-basic-square"},[i("div",{staticClass:"block"},[i("ct-avatar",{attrs:{shape:"square",size:60}})],1),t._l(t.sizeList,(function(t){return i("div",{key:t,staticClass:"block"},[i("ct-avatar",{attrs:{shape:"square",size:t}})],1)}))],2)])])]},proxy:!0},{key:"desc",fn:function(){return[t._v(" 使用"),i("code",[t._v("size")]),t._v("、"),i("code",[t._v("shape")]),t._v("属性定义 CtAvatar 的大小形状。 ")]},proxy:!0}])}),i("showcomponent",{attrs:{title:"展示类型",subtitle:"头像的展示类型",attributes:["src, icon"],ctname:"Avatar",codes:t.code2},scopedSlots:t._u([{key:"showarea",fn:function(){return[i("div",{staticClass:"div-block"},[i("div",{staticClass:"circle"},[i("div",{staticClass:"sub-title"},[t._v("icon展示")]),i("div",{staticClass:"demo-basic-circle"},[i("div",{staticClass:"block"},[i("ct-avatar",{attrs:{icon:"icon-avatartest",size:60}})],1),t._l(t.sizeList,(function(t){return i("div",{key:t,staticClass:"block"},[i("ct-avatar",{attrs:{icon:"icon-avatartest",size:t}})],1)}))],2)]),i("div",{staticClass:"square"},[i("div",{staticClass:"sub-title"},[t._v("图片展示")]),i("div",{staticClass:"demo-basic-square"},[i("div",{staticClass:"block"},[i("ct-avatar",{attrs:{src:t.imgsrc,shape:"square",size:60}})],1),t._l(t.sizeList,(function(s){return i("div",{key:s,staticClass:"block"},[i("ct-avatar",{attrs:{src:t.imgsrc,shape:"square",size:s}})],1)}))],2)])])]},proxy:!0},{key:"desc",fn:function(){return[t._v(" 使用"),i("code",[t._v("icon")]),t._v("、"),i("code",[t._v("src")]),t._v("属性定义 CtAvatar 的展示类型。 ")]},proxy:!0}])}),[i("showcomponent",{attrs:{title:"图片如何适应容器框",subtitle:"头像的适应容器",attributes:["fit"],ctname:"Avatar",codes:t.code3},scopedSlots:t._u([{key:"showarea",fn:function(){return[i("div",{staticClass:"demo-fit"},t._l(t.fits,(function(s){return i("div",{key:s,staticClass:"block"},[i("span",{staticClass:"title"},[t._v(t._s(s))]),i("ct-avatar",{attrs:{shape:"square",size:100,fit:s,src:t.url}})],1)})),0)]},proxy:!0},{key:"desc",fn:function(){return[t._v(" 使用"),i("code",[t._v("fit")]),t._v("属性定义 CtAvatar 如何适应容器，同原生object-fit一样。 ")]},proxy:!0}])}),i("h2",[t._v("Attribute")]),i("show-parameter",{attrs:{parameter:t.parameter}})]],2)},e=[],c=i("2f93"),n=i("a5ef"),r={name:"avatar",chName:"头像",components:{showcomponent:c["a"],ShowParameter:n["a"]},data:function(){return{sizeList:["large","medium","mini"],imgsrc:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",fits:["fill","contain","cover","none","scale-down"],url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",code1:'<div class="div-block">\n  <div class="circle">\n    <div class="sub-title">circle</div>\n      <div class="demo-basic-circle">\n        <div class="block"><ct-avatar :size="60"></ct-avatar></div>\n        <div class="block" v-for="size in sizeList" :key="size">\n          <ct-avatar :size="size"></ct-avatar>\n        </div>\n      </div>\n    </div>\n  <div class="square">\n    <div class="sub-title">square</div>\n      <div class="demo-basic-square">\n        <div class="block"><ct-avatar shape="square" :size="60"></ct-avatar></div>\n        <div class="block" v-for="size in sizeList" :key="size">\n          <ct-avatar shape="square" :size="size"></ct-avatar>\n        </div>\n      </div>\n    </div>\n</div>\n<script>\n  export default {\n    data () {\n      return {\n        sizeList: ["large", "medium", "mini"]\n      }\n    }\n  }\n<\/script>',code2:'<div class="div-block">\n  <div class="circle">\n    <div class="sub-title">icon展示</div>\n      <div class="demo-basic-circle">\n        <div class="block"><ct-avatar icon="icon-avatartest" :size="60"></ct-avatar></div>\n          <div class="block" v-for="size in sizeList" :key="size">\n            <ct-avatar icon="icon-avatartest" :size="size"></ct-avatar>\n          </div>\n      </div>\n  </div>\n  <div class="square">\n    <div class="sub-title">图片展示</div>\n      <div class="demo-basic-square">\n        <div class="block"><ct-avatar :src="imgsrc" shape="square" :size="60"></ct-avatar></div>\n        <div class="block" v-for="size in sizeList" :key="size">\n          <ct-avatar :src="imgsrc" shape="square" :size="size"></ct-avatar>\n        </div>\n      </div>\n  </div>\n</div>\n<script>\n  export default {\n    data () {\n      return {\n        sizeList: ["large", "medium", "mini"],\n        imgsrc: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",\n      }\n    }\n  }\n<\/script>',code3:'<template>\n  <div class="demo-fit">\n    <div class="block" v-for="fit in fits" :key="fit">\n        <span class="title">{{ fit }}</span>\n        <ct-avatar shape="square" :size="100" :fit="fit" :src="url"></ct-avatar>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        fits: [\'fill\', \'contain\', \'cover\', \'none\', \'scale-down\'],\n        url: \'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg\'\n      }\n    }\n  }\n<\/script>',parameter:{title:["参数","说明","类型","可选值","默认值"],contents:[["icon","设置头像的图标类型，参考 Icon 组件","string","",""],["size","设置头像的大小","number/string","number/large/medium/mini","large"],["src","图片头像的资源地址","string","",""],["shape","头像的形状","string","circle/square","circle"]]}}}},o=r,l=(i("84c0"),i("2877")),d=Object(l["a"])(o,a,e,!1,null,"657ff00c",null);s["default"]=d.exports},7134:function(t,s,i){},"84c0":function(t,s,i){"use strict";i("f748")},a5ef:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t.title?i("h1",[t._v(t._s(t.title))]):t._e(),i("table",[i("thead",[i("tr",t._l(t.parameter.title,(function(s,a){return i("td",{key:a},[t._v(" "+t._s(s)+" ")])})),0)]),i("tbody",t._l(t.parameter.contents,(function(s,a){return i("tr",{key:a},t._l(s,(function(s,a){return i("td",{key:a},[t._v(t._s(s))])})),0)})),0)])])},e=[],c={name:"ShowParameter",props:{parameter:Object,title:{type:String,default:""}}},n=c,r=(i("b70b"),i("2877")),o=Object(r["a"])(n,a,e,!1,null,"abf6840c",null);s["a"]=o.exports},b70b:function(t,s,i){"use strict";i("282c")},f748:function(t,s,i){}}]);
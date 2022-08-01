(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba57d6de"],{"282c":function(t,e,n){},"2f93":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("h3",[t._v(t._s(this.title))]),n("p",[t._v(t._s(this.subtitle))]),n("div",{staticClass:"demoblock"},[n("div",{staticClass:"source"},[t._t("showarea")],2),n("div",{ref:"ayheight",staticClass:"meta",style:{height:t.ToBlockCodeheight+"px"},attrs:{id:"codeblock"}},[n("div",{staticClass:"description"},[n("div",[n("p",[t._t("desc")],2)])]),n("div",{staticClass:"highlight"},[n("div",{staticClass:"codearea"},[n("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:t.codes,expression:"codes"}]},[n("code")])])])]),n("div",{staticClass:"demo-block-control",on:{click:t.blockControl}},[n("i",{staticClass:"iconfont",class:[t.isClose?"icon-downarrow":"icon-uparrow"]}),t.isClose?n("span",[t._v("显示代码")]):n("span",[t._v("隐藏代码")])])])])},a=[],i=(n("7134"),{data:function(){return{isClose:!1,BlockCodeheight:""}},props:{title:{type:String},subtitle:{type:String},des:{type:String},ctname:{type:String},attributes:{type:Array},codes:{type:String}},computed:{ToBlockCodeheight:function(){return this.isClose?"0":this.BlockCodeheight}},methods:{blockControl:function(){this.isClose=!this.isClose}},mounted:function(){this.BlockCodeheight=this.$refs.ayheight.offsetHeight,this.isClose=!0}}),o=i,r=n("2877"),c=Object(r["a"])(o,s,a,!1,null,"3fa4a79b",null);e["a"]=c.exports},4332:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Animate 视口出现")]),n("p",[t._v("控制视口出现的自定义指令")]),t._m(0),n("showcomponent",{directives:[{name:"animate",rawName:"v-animate",value:"queue-top",expression:"'queue-top'"}],staticClass:"iscenter",attrs:{title:"基础用法",subtitle:"元素出现在可视区域的基本动画效果",attributes:["type, size"],ctname:"Animate",codes:t.code1},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("div",{staticClass:"block_show_div"},[n("div",{staticClass:"flex_col"},[n("p",{directives:[{name:"animate",rawName:"v-animate",value:"queue-right",expression:"'queue-right'"}]},[t._v("元素出现在可视区域后的渐变动画")])])])]},proxy:!0},{key:"desc",fn:function(){return[t._v(" 使用"),n("code",[t._v("v-animate")]),t._v("、"),n("code",[t._v("class")]),t._v("属性来定义视口出现的效果，可以自定义视口出现的效果 ")]},proxy:!0}])}),n("showcomponent",{attrs:{title:"基础用法",subtitle:"元素出现在可视区域的基本动画效果",attributes:["type, size"],ctname:"Animate",codes:t.code2},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("div",{staticClass:"block_show_div"},[n("div",{staticClass:"flex_col"},[n("p",{directives:[{name:"animate",rawName:"v-animate",value:"queue-left",expression:"'queue-left'"}]},[t._v("元素出现在可视区域后的渐变动画")])])])]},proxy:!0},{key:"desc",fn:function(){return[t._v(" 使用"),n("code",[t._v("v-animate")]),t._v("、"),n("code",[t._v("class")]),t._v("属性来定义视口出现的效果，可以自定义视口出现的效果 ")]},proxy:!0}])}),n("showpara",{directives:[{name:"animate",rawName:"v-animate",value:"queue-bottom",expression:"'queue-bottom'"}],staticStyle:{"margin-top":"150px"},attrs:{title:"Attribute",parameter:t.parameter}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%",height:"600px"}},[n("h2",[t._v(" 请下滑")])])}],i=n("2f93"),o=n("a5ef"),r={name:"animate",chName:"视口出现",components:{showcomponent:i["a"],showpara:o["a"]},data:function(){return{code1:'<h5 v-animate="\'queue-left\'">元素出现在可视区域后的渐变动画</h5>\n<style scoped lang="less">\n\n.queue-left {\n     transform: translate(10%,0);\n    transition: 2s all;\n  }\n  .queue-right {\n     transform: translate(-10%,0);\n    transition: 2s all;\n  }\n   .queue-bottom {\n     transform: translate(0,-20%);\n    transition: 2s all;\n  }\n</style>',code2:'<h5 v-animate="\'queue-right\'" class="iscenter">元素出现在可视区域后的渐变动画</h5>\n<style scoped lang="less">\n\n.queue-left {\n      opacity: 1;\n     transform: translate(10%,0);\n    transition: 2s all;\n  }\n  .queue-right {\n      opacity: 1;\n     transform: translate(-10%,0);\n    transition: 2s all;\n  }\n   .queue-bottom {\n      opacity: 1;\n     transform: translate(0,-20%);\n    transition: 2s all;\n  }\n</style>',parameter:{title:["参数","说明","类型","可选值","默认值"],contents:[["class","初始样式","String","","iscenter"],["v-animate","视口出现样式","String","","'queue-top'"]]}}}},c=r,l=(n("5d36"),n("2877")),u=Object(l["a"])(c,s,a,!1,null,"792f8f1b",null);e["default"]=u.exports},"5d36":function(t,e,n){"use strict";n("f661")},7134:function(t,e,n){},a5ef:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("h1",[t._v(t._s(t.title))]):t._e(),n("table",[n("thead",[n("tr",t._l(t.parameter.title,(function(e,s){return n("td",{key:s},[t._v(" "+t._s(e)+" ")])})),0)]),n("tbody",t._l(t.parameter.contents,(function(e,s){return n("tr",{key:s},t._l(e,(function(e,s){return n("td",{key:s},[t._v(t._s(e))])})),0)})),0)])])},a=[],i={name:"ShowParameter",props:{parameter:Object,title:{type:String,default:""}}},o=i,r=(n("b70b"),n("2877")),c=Object(r["a"])(o,s,a,!1,null,"abf6840c",null);e["a"]=c.exports},b70b:function(t,e,n){"use strict";n("282c")},f661:function(t,e,n){}}]);
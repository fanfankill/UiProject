(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de944df2"],{"282c":function(t,e,s){},"2f93":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel"},[s("h3",[t._v(t._s(this.title))]),s("p",[t._v(t._s(this.subtitle))]),s("div",{staticClass:"demoblock"},[s("div",{staticClass:"source"},[t._t("showarea")],2),s("div",{ref:"ayheight",staticClass:"meta",style:{height:t.ToBlockCodeheight+"px"},attrs:{id:"codeblock"}},[s("div",{staticClass:"description"},[s("div",[s("p",[t._t("desc")],2)])]),s("div",{staticClass:"highlight"},[s("div",{staticClass:"codearea"},[s("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:t.codes,expression:"codes"}]},[s("code")])])])]),s("div",{staticClass:"demo-block-control",on:{click:t.blockControl}},[s("i",{staticClass:"iconfont",class:[t.isClose?"icon-downarrow":"icon-uparrow"]}),t.isClose?s("span",[t._v("显示代码")]):s("span",[t._v("隐藏代码")])])])])},c=[],i=(s("7134"),{data:function(){return{isClose:!1,BlockCodeheight:""}},props:{title:{type:String},subtitle:{type:String},des:{type:String},ctname:{type:String},attributes:{type:Array},codes:{type:String}},computed:{ToBlockCodeheight:function(){return this.isClose?"0":this.BlockCodeheight}},methods:{blockControl:function(){this.isClose=!this.isClose}},mounted:function(){this.BlockCodeheight=this.$refs.ayheight.offsetHeight,this.isClose=!0}}),o=i,r=s("2877"),a=Object(r["a"])(o,n,c,!1,null,"3fa4a79b",null);e["a"]=a.exports},7134:function(t,e,s){},a3df:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Steps 步骤条")]),s("p",[t._v("以不同形式展示步骤的进行")]),s("Showcomponent",{attrs:{title:"基础用法",subtitle:"简单的步骤条",codes:t.code1},scopedSlots:t._u([{key:"desc",fn:function(){return[s("div",[t._v("控制"),s("code",[t._v("active")]),t._v("来切换步骤")])]},proxy:!0},{key:"showarea",fn:function(){return[s("div",[s("ct-steps",{attrs:{active:t.activeIndex}},[s("ct-step",{attrs:{title:"步骤 1"}}),s("ct-step",{attrs:{title:"步骤 2"}}),s("ct-step",{attrs:{title:"步骤 3"}})],1),s("ct-button",{on:{click:t.next}},[t._v("下一步")])],1)]},proxy:!0}])}),s("Showcomponent",{attrs:{title:"选择颜色的步骤条",subtitle:"可以传入状态色",codes:t.code2},scopedSlots:t._u([{key:"desc",fn:function(){return[s("div",[t._v("通过"),s("code",[t._v("space")]),t._v("控制宽度")]),s("div",[t._v("通过"),s("code",[t._v("finishStatus")]),t._v("控制完成时的状态色")]),s("div",[t._v("通过"),s("code",[t._v("processStatus")]),t._v("控制进行时的状态色")])]},proxy:!0},{key:"showarea",fn:function(){return[s("div",[s("ct-steps",{attrs:{active:t.activeIndex,space:"199",finishStatus:"error",processStatus:"warning"}},[s("ct-step",{attrs:{title:"步骤 0"}}),s("ct-step",{attrs:{title:"步骤 1"}}),s("ct-step",{attrs:{title:"步骤 2"}})],1),s("ct-button",{on:{click:t.next}},[t._v("下一步")])],1)]},proxy:!0}])}),s("Showcomponent",{attrs:{title:"可描述的步骤条",subtitle:"在每一步中可有说明",codes:t.code3},scopedSlots:t._u([{key:"desc",fn:function(){return[s("div",[t._v("通过"),s("code",[t._v("description")]),t._v("来填入具体的步骤信息")])]},proxy:!0},{key:"showarea",fn:function(){return[s("div",[s("ct-steps",{attrs:{active:t.activeIndex,space:"200",finishStatus:"error"}},[s("ct-step",{attrs:{title:"步骤 1",description:"注册你的个人账号"}}),s("ct-step",{attrs:{title:"步骤 2",description:"填写你的个人信息"}}),s("ct-step",{attrs:{title:"步骤 3",description:"撰写并发表文章"}})],1),s("ct-button",{on:{click:t.next}},[t._v("下一步")])],1)]},proxy:!0}])}),s("Showcomponent",{attrs:{title:"垂直步骤条",codes:t.code4},scopedSlots:t._u([{key:"desc",fn:function(){return[s("div",[t._v("通过"),s("code",[t._v("direction")]),t._v("来控制进度条展示的行或列")])]},proxy:!0},{key:"showarea",fn:function(){return[s("div",{staticStyle:{height:"300px"}},[s("ct-steps",{attrs:{active:t.activeIndex,space:"200",finishStatus:"error",direction:"column"}},[s("ct-step",{attrs:{title:"步骤 1",description:"注册你的个人账号"}}),s("ct-step",{attrs:{title:"步骤 2",description:"填写你的个人信息"}}),s("ct-step",{attrs:{title:"步骤 3",description:"撰写并发表文章"}})],1)],1)]},proxy:!0}])}),s("Showcomponent",{attrs:{title:"带图标的进度条",subtitle:"按类名传入图标",codes:t.code5},scopedSlots:t._u([{key:"desc",fn:function(){return[s("div",[t._v("通过"),s("code",[t._v("icon")]),t._v("来传入显示的图标类")])]},proxy:!0},{key:"showarea",fn:function(){return[s("div",[s("ct-steps",{attrs:{active:t.activeIndex,space:"199",finishStatus:"error"}},[s("ct-step",{attrs:{title:"步骤 1",description:"注册你的个人账号",icon:"icon-bianji"}}),s("ct-step",{attrs:{title:"步骤 2",description:"填写你的个人信息",icon:"icon-yunshangchuan"}}),s("ct-step",{attrs:{title:"步骤 3",description:"撰写并发表文章",icon:"icon-tupian"}})],1),s("ct-button",{on:{click:t.next}},[t._v("下一步")])],1)]},proxy:!0}])}),s("h1",{staticStyle:{margin:"50px 0 30px 0"}},[t._v("Attribution")]),s("h2",[t._v("CtSteps")]),s("Showparameter",{attrs:{parameter:t.stepsParams}}),s("h2",{staticStyle:{margin:"50px 0 0 0"}},[t._v("CtStep")]),s("Showparameter",{attrs:{parameter:t.stepParams}})],1)},c=[],i=s("2f93"),o=s("a5ef"),r={name:"steps",chName:"步骤条",data:function(){return{stepsParams:{title:["参数","说明","类型","可选值","默认值"],contents:[["active","生效的步骤数","Number","——","必填"],["direction","步骤条的展示方向","String","row/column","row"],["space","步骤条的占用宽度","Number","——","auto"],["finishStatus","步骤完成时状态色","String","success/process/warning/error","success"],["processStatus","步骤进行时状态色","String","success/process/warning/error","process"]]},stepParams:{title:["参数","说明","类型","可选值","默认值"],contents:[["title","步骤的标题","String","——","——"],["description","步骤的描述","String","——","——"],["icon","步骤对应的图标","String","导入的图标类名","——"]]},activeIndex:0,code1:' <ct-steps :active="activeIndex">\n  <ct-step title="步骤 1"></ct-step>\n  <ct-step title="步骤 2"></ct-step>\n  <ct-step title="步骤 3"></ct-step>\n</ct-steps>\n<ct-button @click="next">下一步</ct-button>',code2:'<ct-steps\n        :active="activeindex"\n        space="199"\n        finishstatus="error"\n        processstatus="warning"\n      >\n  <ct-step title="步骤 0"></ct-step>\n  <ct-step title="步骤 1"></ct-step>\n  <ct-step title="步骤 2"></ct-step>\n</ct-steps>\n<ct-button @click="next">下一步</ct-button>',code3:'<ct-steps\n      :active="activeIndex"\n      space="199"\n      finishStatus="error"\n      processStatus="warning"\n    >\n  <ct-step title="步骤 0"></ct-step>\n  <ct-step title="步骤 1"></ct-step>\n  <ct-step title="步骤 2"></ct-step>\n</ct-steps>\n<ct-button @click="next">下一步</ct-button>',code4:'<ct-steps\n      :active="activeIndex"\n      space="199"\n      finishStatus="error"\n      processStatus="warning"\n      direction="column"\n    >\n  <ct-step title="步骤 0"></ct-step>\n  <ct-step title="步骤 1"></ct-step>\n  <ct-step title="步骤 2"></ct-step>\n</ct-steps>\n<ct-button @click="next">下一步</ct-button>',code5:'<ct-steps :active="activeIndex" space="199" finishStatus="error">\n  <ct-step\n      title="步骤 1"\n      description="注册你的个人账号"\n      icon="icon-bianji"\n  ></ct-step>\n  <ct-step\n      title="步骤 2"\n      description="填写你的个人信息"\n      icon="icon-yunshangchuan"\n  ></ct-step>\n  <ct-step\n      title="步骤 3"\n      description="撰写并发表文章"\n      icon="icon-tupian"\n  ></ct-step>\n</ct-steps>\n<ct-button @click="next">下一步</ct-button>'}},methods:{next:function(){this.activeIndex=(this.activeIndex+1)%4}},components:{Showcomponent:i["a"],Showparameter:o["a"]}},a=r,p=s("2877"),l=Object(p["a"])(a,n,c,!1,null,"86335e84",null);e["default"]=l.exports},a5ef:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.title?s("h1",[t._v(t._s(t.title))]):t._e(),s("table",[s("thead",[s("tr",t._l(t.parameter.title,(function(e,n){return s("td",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),s("tbody",t._l(t.parameter.contents,(function(e,n){return s("tr",{key:n},t._l(e,(function(e,n){return s("td",{key:n},[t._v(t._s(e))])})),0)})),0)])])},c=[],i={name:"ShowParameter",props:{parameter:Object,title:{type:String,default:""}}},o=i,r=(s("b70b"),s("2877")),a=Object(r["a"])(o,n,c,!1,null,"abf6840c",null);e["a"]=a.exports},b70b:function(t,e,s){"use strict";s("282c")}}]);
//# sourceMappingURL=chunk-de944df2.9fb894fb.js.map
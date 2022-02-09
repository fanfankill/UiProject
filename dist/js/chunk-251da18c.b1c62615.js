(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-251da18c"],{"005d":function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("h1",[t._v("Notification 通知")]),o("p",[t._v("悬浮出现在页面角落，显示全局的通知提醒消息。")]),o("Showcomponent",{attrs:{title:"基础用法",subtitle:"适用性广泛的通知栏",codes:t.code1},scopedSlots:t._u([{key:"desc",fn:function(){return[o("div",[t._v("通过"),o("code",[t._v("title")]),t._v("字段和"),o("code",[t._v("content")]),t._v('字段，设置通知的标题和正文,建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置'),o("code",[t._v("duration")]),t._v("，可以控制关闭的时间间隔，特别的是，如果设置为"),o("code",[t._v("1")]),t._v("， 则不会自动关闭。注意："),o("code",[t._v("duration")]),t._v("接收一个"),o("code",[t._v("Number")]),t._v("，单位为毫秒，默认为"),o("code",[t._v("4000")]),t._v("。 ")])]},proxy:!0},{key:"showarea",fn:function(){return[o("div",[o("ct-button",{staticStyle:{"margin-right":"20px"},on:{click:t.open1}},[t._v("可自动关闭")]),o("ct-button",{on:{click:t.open2}},[t._v("不会自动关闭")])],1)]},proxy:!0}])}),o("Showcomponent",{attrs:{title:"带有倾向性",subtitle:"带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息",codes:t.code2},scopedSlots:t._u([{key:"desc",fn:function(){return[o("div",[t._v(" Notification 组件准备了四种通知类型："),o("code",[t._v("info")]),t._v(","),o("code",[t._v("success")]),t._v(","),o("code",[t._v("warning")]),t._v(","),o("code",[t._v("error")]),t._v(" 。通过"),o("code",[t._v("type")]),t._v("字段来设置，除此以外的值将被忽略。 ")])]},proxy:!0},{key:"showarea",fn:function(){return[o("div",[o("ct-button",{staticStyle:{"margin-right":"20px"},on:{click:t.open3}},[t._v("消息")]),o("ct-button",{staticStyle:{"margin-right":"20px"},on:{click:t.open4}},[t._v("成功")]),o("ct-button",{staticStyle:{"margin-right":"20px"},on:{click:t.open5}},[t._v("警告")]),o("ct-button",{on:{click:t.open6}},[t._v("错误")])],1)]},proxy:!0}])}),o("Showcomponent",{attrs:{title:"自定义弹出位置",subtitle:"可以让 Notification 从屏幕四角中的任意一角弹出",codes:t.code3},scopedSlots:t._u([{key:"desc",fn:function(){return[o("div",[t._v(" 使用"),o("code",[t._v("position")]),t._v("属性定义 Notification 的弹出位置，支持四个选项："),o("code",[t._v("top-right")]),t._v("、"),o("code",[t._v("top-left")]),t._v("、"),o("code",[t._v("bottom-right")]),t._v("、"),o("code",[t._v("bottom-left")]),t._v("，默认为top-right。 ")])]},proxy:!0},{key:"showarea",fn:function(){return[o("div",[o("ct-button",{staticStyle:{"margin-right":"20px"},on:{click:t.open7}},[t._v("右上角")]),o("ct-button",{staticStyle:{"margin-right":"20px"},on:{click:t.open8}},[t._v("右下角")]),o("ct-button",{staticStyle:{"margin-right":"20px"},on:{click:t.open9}},[t._v("左下角")]),o("ct-button",{on:{click:t.open10}},[t._v("左上角")])],1)]},proxy:!0}])}),o("Showcomponent",{attrs:{title:"带有偏移",subtitle:"让 Notification 偏移一些位置",codes:t.code4},scopedSlots:t._u([{key:"desc",fn:function(){return[o("div",[t._v(" Notification 提供设置偏移量的功能，通过设置"),o("code",[t._v("offset")]),t._v("字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。 ")])]},proxy:!0},{key:"showarea",fn:function(){return[o("div",[o("ct-button",{on:{click:t.open11}},[t._v("偏移的消息")])],1)]},proxy:!0}])}),o("Showcomponent",{attrs:{title:"使用HTML片段",subtitle:"content 属性支持传入 HTML 片段",codes:t.code5},scopedSlots:t._u([{key:"desc",fn:function(){return[o("div",[t._v(" 将"),o("code",[t._v("dangerouslyUseHTMLString")]),t._v("属性设置为 true，"),o("code",[t._v("content")]),t._v("就会被当作 HTML 片段处理。 ")])]},proxy:!0},{key:"showarea",fn:function(){return[o("div",[o("ct-button",{on:{click:t.open12}},[t._v("使用HTML片段")])],1)]},proxy:!0}])}),o("Showcomponent",{attrs:{title:"隐藏关闭按钮",subtitle:"可以不显示关闭按钮",codes:t.code6},scopedSlots:t._u([{key:"desc",fn:function(){return[o("div",[t._v(" 将"),o("code",[t._v("showClose")]),t._v("属性设置为"),o("code",[t._v("false")]),t._v("即可隐藏关闭按钮。 ")])]},proxy:!0},{key:"showarea",fn:function(){return[o("div",[o("ct-button",{on:{click:t.open13}},[t._v("隐藏关闭按钮")])],1)]},proxy:!0}])}),o("Showparameter",{staticStyle:{"margin-top":"150px"},attrs:{title:"Options",parameter:t.parameter}})],1)},i=[],c=o("2f93"),s=o("a5ef"),r={name:"notification",chName:"通知",components:{Showcomponent:c["a"],Showparameter:s["a"]},data:function(){return{code1:"<ct-button @click=\"open1\">可自动关闭</ct-button>\n<ct-button @click=\"open2\">不会自动关闭</ct-button>\n\n<script>\n    export default {\n        methods: {\n            open1(){\n                this.$notify({\n                    title:'这是通知标题',\n                    content: '这是通知描述,这是通知描述,这是通知描述,这是通知描述,'\n                })\n             },\n            open2(){\n                this.$notify({\n                    title:'提示',\n                    content:'这是一条不会自动关闭的消息',\n                    duration: 1\n                })\n            }\n        },\n    };  \n<\/script>",code2:"<ct-button @click=\"open3\">消息</ct-button>\n<ct-button @click=\"open4\">成功</ct-button>\n<ct-button @click=\"open5\">警告</ct-button>\n<ct-button @click=\"open6\">错误</ct-button>\n\n<script>\n    export default {\n        methods: {\n            open3(){\n                this.$notify({\n                    title:'消息',\n                    content:'这是一条消息的提示消息',\n                    type: 'info'\n                })\n            },\n            open4(){\n                this.$notify({\n                    title:'成功',\n                    content:'这是一条成功的提示消息',\n                    type: 'success'\n                })\n            }, \n            open5(){\n                this.$notify({\n                    title:'警告',\n                    content:'这是一条警告的提示消息',\n                    type: 'warning'\n                })\n            },\n            open6(){\n                this.$notify({\n                    title:'错误',\n                    content:'这是一条错误的提示消息',\n                    type: 'error'\n                })\n            },                              \n        },\n    };  \n<\/script>",code3:"<ct-button @click=\"open7\">右上角</ct-button>\n<ct-button @click=\"open8\">右下角</ct-button>\n<ct-button @click=\"open9\">左下角</ct-button>\n<ct-button @click=\"open10\">左上角</ct-button>\n\n<script>\n    export default {\n        methods: {\n            open7(){\n                this.$notify({\n                    title:'右上角',\n                    content:'右上角弹出的消息',\n                })\n            },\n            open8(){\n                this.$notify({\n                    title:'右下角',\n                    content:'右下角弹出的消息',\n                    position: 'bottom-right'\n                })\n            }, \n            open9(){\n                this.$notify({\n                    title:'左下角',\n                    content:'左下角弹出的消息',\n                    position:'bottom-left'\n                })\n            },\n            open10(){\n                this.$notify({\n                    title:'左上角',\n                    content:'左上角弹出的消息',\n                    position: 'top-left'\n                })\n            },                                           \n        },\n    };  \n<\/script>",code4:"<ct-button @click=\"open11\">偏移的消息</ct-button>\n\n<script>\n    export default {\n        methods: {\n            open11(){\n                this.$notify({\n                    title:'偏移',\n                    content:'这是一条偏移的消息',\n                    offset: 300\n                })\n            },                         \n        },\n    };  \n<\/script>",code5:"<ct-button @click=\"open12\">使用HTML片段</ct-button>\n\n<script>\n    export default {\n        methods: {\n            open12(){\n                this.$notify({\n                    title:'HTML 片段',\n                    dangerouslyUseHTMLString: true,\n                    content: '<strong>这是 <i>HTML</i> 片段</strong>'\n                })\n            },                 \n        },\n    };  \n<\/script>",code6:"<ct-button @click=\"open13\">隐藏关闭按钮</ct-button>\n\n<script>\n    export default {\n        methods: {\n            open13(){\n                this.$notify({\n                    title:'我没有按钮',\n                    showClose: false,\n                    content: '这是一条没有关闭按钮的消息'\n                })\n            },                  \n        },\n    };  \n<\/script>",parameter:{title:["参数","说明","类型","可选值","默认值"],contents:[["title","标题","String","—","—"],["content","说明文字","String","—","—"],["dangerouslyUseHTMLString","是否将 message 属性作为 HTML 片段处理","Boolean","—","false"],["type","主题样式，如果不在可选值内将被忽略","String","success/warning/info/error","—"],["duration","显示时间, 毫秒。设为 1 则不会自动关闭","Number","—","4000"],["position","自定义弹出位置","String","top-right/top-left/bottom-right/bottom-left","top-right"],["showClose","是否显示关闭按钮","Boolean","—","true"],["offset","偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量","Number","—","0"]]}}},methods:{open1:function(){this.$notify({title:"这是通知标题",content:"这是通知描述,这是通知描述,这是通知描述,这是通知描述,"})},open2:function(){this.$notify({title:"提示",content:"这是一条不会自动关闭的消息",duration:1})},open3:function(){this.$notify({title:"消息",content:"这是一条消息的提示消息",type:"info"})},open4:function(){this.$notify({title:"成功",content:"这是一条成功的提示消息",type:"success"})},open5:function(){this.$notify({title:"警告",content:"这是一条警告的提示消息",type:"warning"})},open6:function(){this.$notify({title:"错误",content:"这是一条错误的提示消息",type:"error"})},open7:function(){this.$notify({title:"右上角",content:"右上角弹出的消息"})},open8:function(){this.$notify({title:"右下角",content:"右下角弹出的消息",position:"bottom-right"})},open9:function(){this.$notify({title:"左下角",content:"左下角弹出的消息",position:"bottom-left"})},open10:function(){this.$notify({title:"左上角",content:"左上角弹出的消息",position:"top-left"})},open11:function(){this.$notify({title:"偏移",content:"这是一条偏移的消息",offset:300})},open12:function(){this.$notify({title:"HTML 片段",dangerouslyUseHTMLString:!0,content:"<strong>这是 <i>HTML</i> 片段</strong>"})},open13:function(){this.$notify({title:"通知",showClose:!1,content:"这是一条没有关闭按钮的消息"})}}},l=r,p=o("2877"),a=Object(p["a"])(l,e,i,!1,null,null,null);n["default"]=a.exports},"282c":function(t,n,o){},"2f93":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"panel"},[o("h3",[t._v(t._s(this.title))]),o("p",[t._v(t._s(this.subtitle))]),o("div",{staticClass:"demoblock"},[o("div",{staticClass:"source"},[t._t("showarea")],2),o("div",{ref:"ayheight",staticClass:"meta",style:{height:t.ToBlockCodeheight+"px"},attrs:{id:"codeblock"}},[o("div",{staticClass:"description"},[o("div",[o("p",[t._t("desc")],2)])]),o("div",{staticClass:"highlight"},[o("div",{staticClass:"codearea"},[o("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:t.codes,expression:"codes"}]},[o("code")])])])]),o("div",{staticClass:"demo-block-control",on:{click:t.blockControl}},[o("i",{staticClass:"iconfont",class:[t.isClose?"icon-downarrow":"icon-uparrow"]}),t.isClose?o("span",[t._v("显示代码")]):o("span",[t._v("隐藏代码")])])])])},i=[],c=(o("7134"),{data:function(){return{isClose:!1,BlockCodeheight:""}},props:{title:{type:String},subtitle:{type:String},des:{type:String},ctname:{type:String},attributes:{type:Array},codes:{type:String}},computed:{ToBlockCodeheight:function(){return this.isClose?"0":this.BlockCodeheight}},methods:{blockControl:function(){this.isClose=!this.isClose}},mounted:function(){this.BlockCodeheight=this.$refs.ayheight.offsetHeight,this.isClose=!0}}),s=c,r=o("2877"),l=Object(r["a"])(s,e,i,!1,null,"3fa4a79b",null);n["a"]=l.exports},7134:function(t,n,o){},a5ef:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[t.title?o("h1",[t._v(t._s(t.title))]):t._e(),o("table",[o("thead",[o("tr",t._l(t.parameter.title,(function(n,e){return o("td",{key:e},[t._v(" "+t._s(n)+" ")])})),0)]),o("tbody",t._l(t.parameter.contents,(function(n,e){return o("tr",{key:e},t._l(n,(function(n,e){return o("td",{key:e},[t._v(t._s(n))])})),0)})),0)])])},i=[],c={name:"ShowParameter",props:{parameter:Object,title:{type:String,default:""}}},s=c,r=(o("b70b"),o("2877")),l=Object(r["a"])(s,e,i,!1,null,"abf6840c",null);n["a"]=l.exports},b70b:function(t,n,o){"use strict";o("282c")}}]);
//# sourceMappingURL=chunk-251da18c.b1c62615.js.map
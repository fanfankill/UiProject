(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51e2e6ef"],{"0d1e":function(t,e,a){"use strict";a("65e8")},"282c":function(t,e,a){},"2f93":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel"},[a("h3",[t._v(t._s(this.title))]),a("p",[t._v(t._s(this.subtitle))]),a("div",{staticClass:"demoblock"},[a("div",{staticClass:"source"},[t._t("showarea")],2),a("div",{ref:"ayheight",staticClass:"meta",style:{height:t.ToBlockCodeheight+"px"},attrs:{id:"codeblock"}},[a("div",{staticClass:"description"},[a("div",[a("p",[t._t("desc")],2)])]),a("div",{staticClass:"highlight"},[a("div",{staticClass:"codearea"},[a("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:t.codes,expression:"codes"}]},[a("code")])])])]),a("div",{staticClass:"demo-block-control",on:{click:t.blockControl}},[a("i",{staticClass:"iconfont",class:[t.isClose?"icon-downarrow":"icon-uparrow"]}),t.isClose?a("span",[t._v("显示代码")]):a("span",[t._v("隐藏代码")])])])])},c=[],o=(a("7134"),{data:function(){return{isClose:!1,BlockCodeheight:""}},props:{title:{type:String},subtitle:{type:String},des:{type:String},ctname:{type:String},attributes:{type:Array},codes:{type:String}},computed:{ToBlockCodeheight:function(){return this.isClose?"0":this.BlockCodeheight}},methods:{blockControl:function(){this.isClose=!this.isClose}},mounted:function(){this.BlockCodeheight=this.$refs.ayheight.offsetHeight,this.isClose=!0}}),s=o,l=a("2877"),i=Object(l["a"])(s,n,c,!1,null,"3fa4a79b",null);e["a"]=i.exports},"4cd1":function(t,e,a){"use strict";a("c245")},5388:function(t,e,a){},"65e8":function(t,e,a){},"6a8e":function(t,e,a){},7134:function(t,e,a){},9069:function(t,e,a){"use strict";a("5388")},a2c9:function(t,e,a){},a5ef:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.title?a("h1",[t._v(t._s(t.title))]):t._e(),a("table",[a("thead",[a("tr",t._l(t.parameter.title,(function(e,n){return a("td",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),a("tbody",t._l(t.parameter.contents,(function(e,n){return a("tr",{key:n},t._l(e,(function(e,n){return a("td",{key:n},[t._v(t._s(e))])})),0)})),0)])])},c=[],o={name:"ShowParameter",props:{parameter:Object,title:{type:String,default:""}}},s=o,l=(a("b70b"),a("2877")),i=Object(l["a"])(s,n,c,!1,null,"abf6840c",null);e["a"]=i.exports},b30d:function(t,e,a){"use strict";a("bf65")},b6a9:function(t,e,a){"use strict";a("a2c9")},b70b:function(t,e,a){"use strict";a("282c")},bf65:function(t,e,a){},c245:function(t,e,a){},ceb4:function(t,e,a){},e1fa:function(t,e,a){"use strict";a("ceb4")},e75b:function(t,e,a){"use strict";a("6a8e")},ebf5:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("Base"),a("disabled"),a("type"),a("icon"),a("changeable"),a("div",{staticClass:"attr"},[t._v("Attribution")]),a("h3",[t._v("CtTabs props")]),a("Showpara",{attrs:{parameter:t.parameter1}}),a("h3",[t._v("CtTabPane props")]),a("Showpara",{attrs:{parameter:t.parameter2}})],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Tabs 标签页")]),a("div",{staticStyle:{"padding-top":"1rem"}},[t._v(" 选项卡切换组件，分隔内容上有关联但属于不同类别的数据集合。 ")])])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("showcomponent",{attrs:{title:"基础用法",subtitle:"标签页的基础使用",attributes:["value, label, name, disabled, icon, type"],ctname:"Tabs",codes:t.code1},scopedSlots:t._u([{key:"showarea",fn:function(){return[a("h4",[t._v("普通、简洁的标签页")]),a("ct-tabs",{attrs:{value:"tow"}},[a("ct-tab-pane",{attrs:{label:"标签一",name:"one"}},[t._v("标签一的内容")]),a("ct-tab-pane",{attrs:{label:"标签二",name:"tow"}},[t._v("标签二的内容")]),a("ct-tab-pane",{attrs:{label:"标签三",name:"three"}},[t._v("标签三的内容")])],1)]},proxy:!0},{key:"desc",fn:function(){return[a("div",[a("code",[t._v("value")]),t._v(" 与 CtTabPane 的 "),a("code",[t._v("name")]),t._v(" 对应，用于标识当前激活的是哪一项，"),a("code",[t._v("name")]),t._v(" 值默认从 0 开始，默认激活第一项。 ")])]},proxy:!0}])})},s=[],l=a("2f93"),i={components:{showcomponent:l["a"]},data:function(){return{code1:'  <ct-tabs value="tow">\n    <ct-tab-pane label="标签一" name="one">标签一的内容</ct-tab-pane>\n    <ct-tab-pane label="标签二" name="tow">标签二的内容</ct-tab-pane>\n    <ct-tab-pane label="标签三" name="three">标签三的内容</ct-tab-pane>\n  </ct-tabs>\n      '}}},r=i,b=(a("b6a9"),a("2877")),p=Object(b["a"])(r,o,s,!1,null,"d416fae6",null),u=p.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("showcomponent",{attrs:{title:"带禁用的",subtitle:"带有禁用选项的标签页使用",attributes:["value, label, name, disabled, icon, type"],ctname:"Tabs",codes:t.code2},scopedSlots:t._u([{key:"showarea",fn:function(){return[a("h4",[t._v("禁用某一项")]),a("ct-tabs",[a("ct-tab-pane",{attrs:{label:"标签一",name:"one"}},[t._v("标签一的内容")]),a("ct-tab-pane",{attrs:{label:"标签二",name:"tow",disabled:""}},[t._v("标签二的内容")]),a("ct-tab-pane",{attrs:{label:"标签三",name:"three"}},[t._v("标签三的内容")])],1)]},proxy:!0},{key:"desc",fn:function(){return[a("div",[t._v("给对应的CtTabPane选项添加 "),a("code",[t._v("disabled")]),t._v(" 属性禁用该选项")])]},proxy:!0}])})},m=[],f={components:{showcomponent:l["a"]},data:function(){return{code2:'  <ct-tabs>\n    <ct-tab-pane label="标签一" name="one">标签一的内容</ct-tab-pane>\n    <ct-tab-pane label="标签二" name="tow" disabled>标签二的内容</ct-tab-pane>\n    <ct-tab-pane label="标签三" name="three">标签三的内容</ct-tab-pane>\n  </ct-tabs>\n      '}}},h=f,v=(a("e1fa"),Object(b["a"])(h,d,m,!1,null,"fb037372",null)),_=v.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("showcomponent",{attrs:{title:"类型可选的",subtitle:"可选择不同类型的标签页",attributes:["value, label, name, disabled, icon, type"],ctname:"Tabs",codes:t.code4},scopedSlots:t._u([{key:"showarea",fn:function(){return[a("h4",[t._v("卡片类型")]),a("ct-tabs",{attrs:{type:"card"}},[a("ct-tab-pane",{attrs:{label:"标签一",name:"one"}},[t._v("标签一的内容")]),a("ct-tab-pane",{attrs:{label:"标签二",name:"tow"}},[t._v("标签二的内容")]),a("ct-tab-pane",{attrs:{label:"标签三",name:"three"}},[t._v("标签三的内容")])],1)]},proxy:!0},{key:"desc",fn:function(){return[a("div",[a("code",[t._v("type")]),t._v("属性用于设置标签页的类型，除了默认类型外，还有"),a("code",[t._v("none")]),t._v("和"),a("code",[t._v("card")])])]},proxy:!0}])})},y=[],x={components:{showcomponent:l["a"]},data:function(){return{code4:'  <ct-tabs type="card">\n    <ct-tab-pane label="标签一" name="one">标签一的内容</ct-tab-pane>\n    <ct-tab-pane label="标签二" name="tow">标签二的内容</ct-tab-pane>\n    <ct-tab-pane label="标签三" name="three">标签三的内容</ct-tab-pane>\n  </ct-tabs>\n      '}}},C=x,g=(a("b30d"),Object(b["a"])(C,w,y,!1,null,"957f5f16",null)),k=g.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("showcomponent",{attrs:{title:"带图标的",subtitle:"带有自定义图标的标签页",attributes:["value, label, name, disabled, icon, type"],ctname:"Tabs",codes:t.code3},scopedSlots:t._u([{key:"showarea",fn:function(){return[a("h4",[t._v("带图标且图标位置可选的")]),a("ct-tabs",{attrs:{type:"card"},on:{tabClick:t.handleClick}},[a("ct-tab-pane",{attrs:{label:"左侧",name:"left"}},[a("ct-tabs",{staticClass:"ct-demo-box"},[a("ct-tab-pane",{attrs:{icon:"iconfontapple-l",label:"macOs",name:"one"}},[t._v("标签一的内容")]),a("ct-tab-pane",{attrs:{icon:"windows-fill-l",label:"Windows",name:"tow"}},[t._v("标签二的内容")]),a("ct-tab-pane",{attrs:{icon:"linux-l",label:"Linux",name:"three"}},[t._v("标签三的内容")])],1)],1),a("ct-tab-pane",{attrs:{label:"上方",name:"top"}},[a("ct-tabs",{staticClass:"ct-demo-box"},[a("ct-tab-pane",{attrs:{icon:"iconfontapple-t",label:"macOs",name:"one"}},[t._v("标签一的内容")]),a("ct-tab-pane",{attrs:{icon:"windows-fill-t",label:"Windows",name:"tow"}},[t._v("标签二的内容")]),a("ct-tab-pane",{attrs:{icon:"linux-t",label:"Linux",name:"three"}},[t._v("标签三的内容")])],1)],1),a("ct-tab-pane",{attrs:{label:"右侧",name:"right"}},[a("ct-tabs",{staticClass:"ct-demo-box"},[a("ct-tab-pane",{attrs:{icon:"iconfontapple-r",label:"macOs",name:"one"}},[t._v("标签一的内容")]),a("ct-tab-pane",{attrs:{icon:"windows-fill-r",label:"Windows",name:"tow"}},[t._v("标签二的内容")]),a("ct-tab-pane",{attrs:{icon:"linux-r",label:"Linux",name:"three"}},[t._v("标签三的内容")])],1)],1),a("ct-tab-pane",{attrs:{label:"下方",name:"bottom"}},[a("ct-tabs",{staticClass:"ct-demo-box"},[a("ct-tab-pane",{attrs:{icon:"iconfontapple-b",label:"macOs",name:"one"}},[t._v("标签一的内容")]),a("ct-tab-pane",{attrs:{icon:"windows-fill-b",label:"Windows",name:"tow"}},[t._v("标签二的内容")]),a("ct-tab-pane",{attrs:{icon:"linux-b",label:"Linux",name:"three"}},[t._v("标签三的内容")])],1)],1)],1)]},proxy:!0},{key:"desc",fn:function(){return[a("div",[a("code",[t._v("icon")]),t._v('属性用于设置图标，最后一个" - "分隔的两部分前面的是图标名，后面的是图标位置。默认是在左面，即" l "，t、r、b分别表示上面、右面、下面。 ')])]},proxy:!0}])})},L=[],O=(a("b0c0"),a("99af"),{components:{showcomponent:l["a"]},data:function(){return{code3:'  <ct-tabs>\n    <ct-tab-pane icon="iconfontapple-l" label="macOs" name="one">标签一的内容</ct-tab-pane>\n    <ct-tab-pane icon="windows-fill-l" label="Windows" name="tow">标签二的内容</ct-tab-pane>\n    <ct-tab-pane icon="linux-l" label="Linux" name="three">标签三的内容</ct-tab-pane>\n  </ct-tabs>\n        '}},methods:{handleClick:function(t){this.iconPosition=t.tab.name[0],this.code3=' <ct-tabs>\n    <ct-tab-pane icon="iconfontapple-'.concat(this.iconPosition,'" label="macOs" name="one">标签一的内容</ct-tab-pane>\n    <ct-tab-pane icon="windows-fill-').concat(this.iconPosition,'" label="Windows" name="tow">标签二的内容</ct-tab-pane>\n    <ct-tab-pane icon="linux-').concat(this.iconPosition,'" label="Linux" name="three">标签三的内容</ct-tab-pane>\n  </ct-tabs>\n        ')}}}),T=O,B=(a("0d1e"),a("9069"),Object(b["a"])(T,S,L,!1,null,"d83b7b2c",null)),$=B.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("showcomponent",{attrs:{title:"可增删的",subtitle:"标签页可以动态增加或删除",attributes:["value, label, name, disabled, icon, type"],ctname:"Tabs",codes:t.code5},scopedSlots:t._u([{key:"showarea",fn:function(){return[a("h4",[t._v("增删标签页")]),a("ct-tabs",{attrs:{changable:"",type:"card",tabsList:t.tabsList}},t._l(t.tabsList,(function(e){return a("ct-tab-pane",{key:e.name,attrs:{label:e.label,name:e.name}},[t._v(t._s(e.content))])})),1)]},proxy:!0},{key:"desc",fn:function(){return[a("div",[a("code",[t._v("changable")]),t._v(" 属性用于标记该标签页是可增删的，同时在使用的时候提供相应的"),a("code",[t._v("tabsList")]),t._v("数据，并以props形式传入。 ")])]},proxy:!0}])})},E=[],P={components:{showcomponent:l["a"]},data:function(){return{tabsList:[{label:"标签一",name:"1",content:"标签一的内容"},{label:"标签二",name:"2",content:"标签二的内容"},{label:"标签三",name:"3",content:"标签三的内容"}],code5:" <template>\n    <ct-tabs changable type=\"card\" :tabsList=\"tabsList\">\n      <ct-tab-pane \n          v-for=\"item in tabsList\"\n          :key=\"item.name\"\n          :label=\"item.label\"\n          :name=\"item.name\"\n      >{{item.content}}</ct-tab-pane>\n    </ct-tabs>\n  </template> \n\n  <script>\n    export default {\n      data() {\n        return {\n          tabsList: [\n            {\n              label: '标签一',\n              name: '1',\n              content: '标签一的内容'\n            }, {\n              label: '标签二',\n              name: '2',\n              content: '标签二的内容'\n            }, {\n              label: '标签三',\n              name: '3',\n              content: '标签三的内容'\n            }\n          ],\n        };\n      }\n    };\n  <\/script>\n"}}},W=P,A=(a("4cd1"),Object(b["a"])(W,j,E,!1,null,"71246cf9",null)),J=A.exports,N=a("a5ef"),D={name:"tabs",chName:"标签页",components:{Base:u,Disabled:_,Type:k,Icon:$,Changeable:J,Showpara:N["a"]},data:function(){return{parameter1:{title:["属性","说明","类型","默认值"],contents:[["value","当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据","String","默认第一项的name"],["type","标签页的基本样式，可选值有line、none、card","String","line"],["closable",'是否可以关闭标签页，仅在 type="card" 时有效',"Boolean","false"]]},parameter2:{title:["属性","说明","类型","默认值"],contents:[["name","用于标识当前面板，对应 value，默认为其索引值","String","-"],["label","选项卡头显示文字","String","空"],["icon","选项卡图标，可以通过r、l、t、b设置图标方位","String","-"],["disabled","是否禁用该选项卡","Boolean","false"],["closable",'是否可以关闭标签页，仅在 type="card" 时有效',"Boolean","false"],["closable",'是否可以关闭标签页，仅在 type="card" 时有效',"Boolean","false"]]}}}},H=D,I=(a("e75b"),Object(b["a"])(H,n,c,!1,null,"19fed648",null));e["default"]=I.exports}}]);
//# sourceMappingURL=chunk-51e2e6ef.257ba664.js.map
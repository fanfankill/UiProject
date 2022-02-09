(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96c170b8"],{"020e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Scrollbar 滚动条")]),n("p",[t._v("展示一片滚动区域")]),n("basecom"),n("basecom2"),n("darkcom"),n("delay"),n("visible"),n("showpara",{attrs:{parameter:t.parameter}})],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("show-comp",{attrs:{title:"基本滚动",subtitle:"滚动区域的实现",ctname:"滚动区域",codes:t.mycode},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("CtScrollbar",{attrs:{height:180}},t._l(40,(function(e){return n("p",{key:e},[t._v(" 对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便 ")])})),0)]},proxy:!0},{key:"desc",fn:function(){return[n("div",[t._v(" 可以通过 "),n("code",[t._v("height")]),t._v(" 和 "),n("code",[t._v("width")]),t._v("设置宽高 ")])]},proxy:!0}])})],1)},a=[],l=n("2f93"),s={data:function(){return{mycode:'  <CtScrollbar :height="180">\n    <p v-for="i in 40" :key="i">\n    对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便</p>\n  </CtScrollbar>'}},components:{ShowComp:l["a"]}},c=s,u=n("2877"),d=Object(u["a"])(c,i,a,!1,null,null,null),p=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("show-comp",{attrs:{title:"自定义样式",subtitle:"滚动区域的实现",ctname:"滚动区域",codes:t.mycode},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("CtScrollbar",{attrs:{height:180,thumbstlye:t.thumbstlye,barstyle:t.barStyle}},t._l(40,(function(e){return n("p",{key:e},[t._v(" 对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便 ")])})),0)]},proxy:!0},{key:"desc",fn:function(){return[n("div",[n("code",[t._v("thumbstlye")]),t._v("和 "),n("code",[t._v("barstyle")]),t._v("来自定义自己喜欢的滚动条样式 ")])]},proxy:!0}])})],1)},b=[],f={data:function(){return{mycode:"<template>\n  <CtScrollbar\n        :height=\"180\"\n        :thumbstlye=\"thumbstlye\"\n        :barstyle=\"barStyle\">\n        <p   v-for=\"i in 40\" :key=\"i\">\n        对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便\n        </p>\n  </CtScrollbar>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n       thumbstlye: {\n        right: '4px',\n        borderRadius: '5px',\n        backgroundColor: '#027be3',\n        width: '5px',\n        opacity: 0.75\n      },\n        barStyle: {\n        right: '2px',\n        borderRadius: '9px',\n        backgroundColor: '#027be3',\n        width: '9px',\n        opacity: 0.2\n      }\n      }\n    }\n  }\n<\/script>",thumbstlye:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2}}},components:{ShowComp:l["a"]}},y=f,v=Object(u["a"])(y,h,b,!1,null,null,null),m=v.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("show-comp",{attrs:{title:"黑暗主题风格",subtitle:"滚动区域的实现",ctname:"滚动区域",codes:t.mycode},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("CtScrollbar",{attrs:{height:180,dark:""}},t._l(40,(function(e){return n("div",{key:e,staticStyle:{padding:"10px","font-size":"1rem"}},[t._v(" 对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便 ")])})),0)]},proxy:!0},{key:"desc",fn:function(){return[n("div",[t._v("通过传入"),n("code",[t._v("dark")]),t._v("使主题色变成暗色模式")])]},proxy:!0}])})],1)},k=[],C={components:{ShowComp:l["a"]},data:function(){return{mycode:'<CtScrollbar :height="180" dark>\n    <div  v-for="i in 40" :key="i" style="padding:10px;fontSize:1rem">\n    对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便</div>\n</CtScrollbar>'}}},g=C,S=Object(u["a"])(g,_,k,!1,null,null,null),x=S.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("show-comp",{attrs:{title:"延时消失",subtitle:"滚动区域的实现",ctname:"滚动区域",codes:t.mycode},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("CtScrollbar",{attrs:{height:180,delay:1e3}},t._l(40,(function(e){return n("p",{key:e},[t._v(" 对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便 ")])})),0)]},proxy:!0},{key:"desc",fn:function(){return[n("div",[t._v("通过传入"),n("code",[t._v("delay")]),t._v("来改变滚动条持续时间")])]},proxy:!0}])})],1)},j=[],O={components:{ShowComp:l["a"]},data:function(){return{mycode:'<CtScrollbar :height="180" :delay="1000">\n    <p  v-for="i in 40" :key="i">\n      对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便\n    </p>\n</CtScrollbar>'}}},$=O,E=Object(u["a"])($,w,j,!1,null,null,null),B=E.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("show-comp",{attrs:{title:"可见性",subtitle:"滚动区域的实现",ctname:"滚动条可见性",codes:t.mycode},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("CtScrollbar",{attrs:{height:180,visible:""}},t._l(40,(function(e){return n("p",{key:e},[t._v(" 对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便 ")])})),0)]},proxy:!0},{key:"desc",fn:function(){return[n("div",[t._v("通过传入"),n("code",[t._v("visible")]),t._v("来修改滚动条可见性")])]},proxy:!0}])})],1)},z=[],J={components:{ShowComp:l["a"]},data:function(){return{mycode:'<CtScrollbar :height="180" visible>\n    <p  v-for="i in 40" :key="i">\n      对于滚动区域的描述的感觉还是不错的，留给使用者的可改造空间大，使用起来十分的方便\n    </p>\n</CtScrollbar>'}}},N=J,T=Object(u["a"])(N,R,z,!1,null,null,null),A=T.exports,H=n("a5ef"),P={name:"scrollbar",chName:"滚动条",components:{basecom:p,basecom2:m,darkcom:x,delay:B,visible:A,showpara:H["a"]},data:function(){return{parameter:{title:["参数","说明","类型","可选值","默认值"],contents:[["delay","延迟时间","number"," ","0"],["dark","暗色模式","Boolean","true/false","false"],["visiable","滚动条可见性","Boolean","true/false","false"],["thumbstlye","滚动条样式","Object","","{}"],["barstyle","滚动条区域样式","Object","","{}"]]}}}},q=P,D=Object(u["a"])(q,r,o,!1,null,null,null);e["default"]=D.exports},"282c":function(t,e,n){},"2f93":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("h3",[t._v(t._s(this.title))]),n("p",[t._v(t._s(this.subtitle))]),n("div",{staticClass:"demoblock"},[n("div",{staticClass:"source"},[t._t("showarea")],2),n("div",{ref:"ayheight",staticClass:"meta",style:{height:t.ToBlockCodeheight+"px"},attrs:{id:"codeblock"}},[n("div",{staticClass:"description"},[n("div",[n("p",[t._t("desc")],2)])]),n("div",{staticClass:"highlight"},[n("div",{staticClass:"codearea"},[n("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:t.codes,expression:"codes"}]},[n("code")])])])]),n("div",{staticClass:"demo-block-control",on:{click:t.blockControl}},[n("i",{staticClass:"iconfont",class:[t.isClose?"icon-downarrow":"icon-uparrow"]}),t.isClose?n("span",[t._v("显示代码")]):n("span",[t._v("隐藏代码")])])])])},o=[],i=(n("7134"),{data:function(){return{isClose:!1,BlockCodeheight:""}},props:{title:{type:String},subtitle:{type:String},des:{type:String},ctname:{type:String},attributes:{type:Array},codes:{type:String}},computed:{ToBlockCodeheight:function(){return this.isClose?"0":this.BlockCodeheight}},methods:{blockControl:function(){this.isClose=!this.isClose}},mounted:function(){this.BlockCodeheight=this.$refs.ayheight.offsetHeight,this.isClose=!0}}),a=i,l=n("2877"),s=Object(l["a"])(a,r,o,!1,null,"3fa4a79b",null);e["a"]=s.exports},7134:function(t,e,n){},a5ef:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("h1",[t._v(t._s(t.title))]):t._e(),n("table",[n("thead",[n("tr",t._l(t.parameter.title,(function(e,r){return n("td",{key:r},[t._v(" "+t._s(e)+" ")])})),0)]),n("tbody",t._l(t.parameter.contents,(function(e,r){return n("tr",{key:r},t._l(e,(function(e,r){return n("td",{key:r},[t._v(t._s(e))])})),0)})),0)])])},o=[],i={name:"ShowParameter",props:{parameter:Object,title:{type:String,default:""}}},a=i,l=(n("b70b"),n("2877")),s=Object(l["a"])(a,r,o,!1,null,"abf6840c",null);e["a"]=s.exports},b70b:function(t,e,n){"use strict";n("282c")}}]);
//# sourceMappingURL=chunk-96c170b8.03384a1a.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57b88e94"],{1017:function(t,e,n){"use strict";n("4ad3")},"131a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"headul"},[t._l(t.mylist,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.handleclick(i)}}},[n("router-link",{class:["base_link"],attrs:{to:e.to,"active-class":"is-active"}},[t._v(t._s(e.name)+" ")])],1)})),n("li",{staticClass:"iconfont icon-lights",on:{click:t.toggleMode}}),t._m(0)],2)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"iconfont icon-zhongwen"},[n("a")])}],o={data:function(){return{current:0,mylist:[{to:"/main",name:"指南"},{to:"/examples",name:"组件"},{to:"/style",name:"色彩"}]}},methods:{handleclick:function(t){this.current=t},toggleMode:function(){"light"===this.mode?(document.body.style.backgroundColor="#272727",document.body.style.color="white",this.mode="dark"):(document.body.style.backgroundColor="white",document.body.style.color="black",this.mode="light")}}},c=o,a=(n("dd12"),n("2877")),r=Object(a["a"])(c,i,s,!1,null,"5348274c",null);e["a"]=r.exports},"1b40":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"headtital",on:{click:t.gotoMain}},[n("span",{staticClass:"iconfont icon-chuangzaoli"}),t._v(" CreateUI ")]),n("ct-dropdown",{staticClass:"droptop",attrs:{trigger:"click"}},[n("span",{staticClass:"iconfont icon-hanbaoanniu"}),n("ct-dropdown-menu",[n("ct-dropdown-item",[t._v("指南")]),n("ct-dropdown-item",[t._v("组件")]),n("ct-dropdown-item",[t._v("资源")])],1)],1)],1)},s=[],o={data:function(){return{}},methods:{handleshow:function(){console.log(1)},gotoMain:function(){this.$router.push({path:"/"})}}},c=o,a=(n("9865"),n("2877")),r=Object(a["a"])(c,i,s,!1,null,"3eff33e8",null);e["a"]=r.exports},"4ad3":function(t,e,n){},"4daf":function(t,e,n){},"7f94":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"head"},[n("logo"),n("top")],1),n("div",{staticClass:"main_block"},[n("whyuse"),n("showperson")],1)])},s=[],o=n("131a"),c=n("1b40"),a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mystart"},[n("h2",[t._v("关于CreateUI")]),n("p",[n("code",[t._v("CreateUI")]),t._v("，是一套基于 Vue.js 的开源 UI 组件库，由多人协作开发完成，开发的目的在于提升自己对组件化开发的理解和动手能力，基于自己感兴趣的组件上进行开发和实践，从中学习到其组件化的思想。")]),n("h2",[t._v("为什么选择UI框架")]),n("p",[n("ul",{staticClass:"showul"},[n("li",[t._v("在组队的时候发现人数众多，如果选择一般的项目来开发可能会存在人员分配有空闲情况。")]),n("li",[t._v("平常使用UI框架不少，但从来没了解过实现背后的原理。")]),n("li",[t._v("对于组件化开发感兴趣。")]),n("li",[t._v("更加利于团队合作和分工。")])])]),n("h2",[t._v("设计理念")]),n("div",{staticClass:"myico"},[n("div",[n("span",{staticClass:"iconfont icon-xuexi"}),n("h4",[t._v("学习")]),n("p",[t._v("study")])]),n("div",[n("span",{staticClass:"iconfont icon-idea__easyico"}),n("h4",[t._v("创新")]),n("p",[t._v("create")])]),n("div",[n("span",{staticClass:"iconfont icon-hezuo"}),n("h4",[t._v("合作")]),n("p",[t._v("cooperation")])]),n("div",[n("span",{staticClass:"iconfont icon-yizhixingtongjibiao"}),n("h4",[t._v("一致")]),n("p",[t._v("Consistency")])])])])}],l={},u=l,h=(n("d3a3"),n("2877")),d=Object(h["a"])(u,a,r,!1,null,"0da18282",null),f=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shower"},[n("h2",[t._v("开发人员")]),n("div",{staticClass:"showmybtn"},[n("span",{staticClass:"iconfont icon-left",on:{click:t.toleftchange}}),n("span",{staticClass:"iconfont icon-right",on:{click:t.torightchange}})]),n("div",{staticClass:"middle_intrdo_showblock",on:{mouseenter:t.stopintervar,mouseleave:t.startinterval}},[n("div",{ref:"scrollblock",staticClass:"scrollblock"},t._l(t.myintrdolist,(function(e,i){return n("div",{key:i,ref:"scrollchild",refInFor:!0,staticClass:"show_intrdoicon"},[n("img",{attrs:{src:e.img}}),n("h4",[t._v(t._s(e.htitle))]),n("div",{staticClass:"showourname"},[t._v(t._s(e.name))]),n("p",{domProps:{innerHTML:t._s(e.ptitle)}})])})),0)])])},v=[],p={data:function(){return{myintrdolist:[{img:"https://avatars.githubusercontent.com/u/63303149?s=40&v=4",htitle:"fanfankill",name:"范劲希",ptitle:"负责总体页面搭建、设计、布局和部分组件开发，开发组件有<code class='mycode'>cotainer</code>、<code>dropdown</code>、<code>scrollbar</code>开发，并且协调组员开发合作，进行代码提交合并。"},{img:"https://avatars.githubusercontent.com/u/54534553?v=4",htitle:"Gypsophlia",name:"马晓亮",ptitle:"负责项目文件结构与逻辑优化、色彩的搭配与全局引入、组件开发及实例页面的完成，完成组件有Loading，Steps，Chatbox。"},{img:"https://avatars.githubusercontent.com/u/89287732?s=400&u=1bbc7ced1045c7227ef310f7ba9328ead7d13ced&v=4",htitle:"MrEphemera",name:"谭永佳",ptitle:"负责组件开发的工作，开发的组件有description、button、radio、row,col组件。"},{img:"https://avatars.githubusercontent.com/u/56378818?v=4",htitle:"Eddy",name:"陈浩东",ptitle:"负责组件展示界面开发以及组件库开发工作，开发的组件有Rate评分组件、Message消息提示组件"},{img:"https://avatars.githubusercontent.com/u/85024934?s=40&u=2fbbec84605b46da759b0febc1f32234eedb2cbd&v=4",htitle:"coder-lbw",name:"李邦伟",ptitle:"负责页面的部分开发和组件开发，完成了页面的左侧导航，开发的组件有CtTabs、CtTree。"},{img:"https://avatars.githubusercontent.com/u/66615118?v=4",htitle:"123mutoumutou",name:"冯艳菊",ptitle:"负责组件的开发，开发组件有switch,link。"},{img:"https://avatars.githubusercontent.com/u/52449327?s=400&u=d9e5bc7f35bc6e08b68670debc8e7849c547598e&v=4",htitle:"WQ15652799191",name:"吴庆",ptitle:"负责代码展示组件开发，Avatar、Dialog组件开发"},{img:"https://avatars.githubusercontent.com/u/72749814?s=400&u=2b65d178beb52eb805eeef8d936b195fde2aa903&v=4",htitle:"haomoon",name:"李鑫月",ptitle:"负责部分组件开发，开发的组件有badge、notification、skeleton"}],currentindex:0,timer:""}},mounted:function(){this.startinterval()},methods:{toleftchange:function(){this.stopintervar(),this.leftchange(),this.startinterval()},torightchange:function(){this.stopintervar(),this.rightchange(),this.startinterval()},leftchange:function(){0==this.currentindex?console.log(1):(this.currentindex++,this.$refs.scrollblock.style.transform="translateX(".concat(this.$refs.scrollchild[0].offsetWidth*this.currentindex,"px)"))},rightchange:function(){var t;t=document.body.offsetWidth>=900?this.myintrdolist.length-3:this.myintrdolist.length-1,-this.currentindex>=t?(this.$refs.scrollblock.style.transform="translateX(0px)",this.currentindex=0):(this.currentindex--,this.$refs.scrollblock.style.transform="translateX(".concat(this.$refs.scrollchild[0].offsetWidth*this.currentindex,"px)"))},stopintervar:function(){clearInterval(this.timer)},startinterval:function(){this.timer=setInterval(this.rightchange,2e3)}}},b=p,g=(n("1017"),Object(h["a"])(b,m,v,!1,null,"c7e00f3c",null)),_=g.exports,C={name:"main",components:{top:o["a"],logo:c["a"],whyuse:f,showperson:_}},y=C,k=(n("bcd8"),Object(h["a"])(y,i,s,!1,null,"9b086fa4",null));e["default"]=k.exports},"8b17":function(t,e,n){},"8fb9":function(t,e,n){},9865:function(t,e,n){"use strict";n("8b17")},b98c:function(t,e,n){},bcd8:function(t,e,n){"use strict";n("4daf")},d3a3:function(t,e,n){"use strict";n("8fb9")},dd12:function(t,e,n){"use strict";n("b98c")}}]);
//# sourceMappingURL=chunk-57b88e94.2ce32c1c.js.map
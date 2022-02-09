(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04f25a7e"],{"0a23":function(t,e,n){"use strict";n("9132")},"1f8c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("Base"),n("checkbox"),n("init-status"),n("div",{staticClass:"attr"},[t._v("Attribution")]),n("h3",[t._v("Tree props")]),n("Showpara",{attrs:{parameter:t.parameter1}}),n("h3",[t._v("Node data")]),n("Showpara",{attrs:{parameter:t.parameter2}}),n("h3",[t._v("Tree events")]),n("Showpara",{attrs:{parameter:t.parameter3}})],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Tree 树形控件")]),n("div",{staticStyle:{"padding-top":"1rem"}},[t._v(" 对于文件夹、分类目录、组织架构等层级较多的内容，树可以清楚显示他们的层级关系，并具有展开、收起、选择等交互功能。 ")])])}],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("showcomponent",{attrs:{title:"基础用法",subtitle:"树形控件的基础使用",attributes:["data, show-checkbox, icon"],ctname:"Tree",codes:t.code1},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("h4",[t._v("普通、简洁的树形结构")]),n("ct-tree",{attrs:{data:t.data1}})]},proxy:!0},{key:"desc",fn:function(){return[n("div",[n("code",[t._v("data")]),t._v(" 属性用于传递展示的数据，其是一个数组，每个子项是一个对象 ")])]},proxy:!0}])})},c=[],l=n("2f93"),o={components:{showcomponent:l["a"]},data:function(){return{data1:[{title:"一级 1",expand:!0,children:[{title:"二级 1-1",expand:!0,children:[{title:"三级 1-1-1"},{title:"三级 1-1-2"}]},{title:"二级 1-2",children:[{title:"三级 1-2-1"},{title:"三级 1-2-2"}]}]},{title:"一级 2",children:[{title:"二级 2-1",children:[{title:"三级 2-1-1"}]},{title:"二级 2-2",children:[{title:"三级 2-2-1"},{title:"三级 2-2-2"}]}]}],code1:"\n        <template>\n          <ct-tree :data=\"data1\"></ct-tree>\n        </template> \n\n        <script>\n          export default {\n            data() {\n              return {\n                data1: [\n                  {\n                    title: '一级 1',\n                    expand: true,\n                    children: [\n                      {\n                        title: '二级 1-1',\n                        expand: true,\n                        children: [\n                          {\n                            title: '三级 1-1-1'\n                          },\n                          {\n                            title: '三级 1-1-2'\n                          }\n                        ]\n                      },\n                      {\n                        title: '二级 1-2',\n                        children: [\n                          {\n                            title: '三级 1-2-1'\n                          },\n                          {\n                            title: '三级 1-2-2'\n                          }\n                        ]\n                      }\n                    ]\n                  },\n                  {\n                    title: '一级 2',\n                    children: [\n                      {\n                        title: '二级 2-1',\n                        children: [\n                          {\n                            title: '三级 2-1-1'\n                          }\n                        ]\n                      },\n                      {\n                        title: '二级 2-2',\n                        children: [\n                          {\n                            title: '三级 2-2-1'\n                          },\n                          {\n                            title: '三级 2-2-2'\n                          }\n                        ]\n                      }\n                    ]\n                  }\n              };\n            }\n          };\n        <\/script>\n      "}}},s=o,d=(n("0a23"),n("2877")),u=Object(d["a"])(s,r,c,!1,null,"cadd81c0",null),h=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("showcomponent",{attrs:{title:"可勾选的",subtitle:"带有复选框的树，可用于选择节点",attributes:["data, show-checkbox, icon"],ctname:"Tree",codes:t.code2},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("h4",[t._v("可选择的、带有复选框的树")]),n("ct-tree",{attrs:{data:t.data2,"show-checkbox":""}})]},proxy:!0},{key:"desc",fn:function(){return[n("div",[t._v(" 设置"),n("code",[t._v("show-checkbox")]),t._v(" 属性可以对节点进行勾选 ")])]},proxy:!0}])})},f=[],v={components:{showcomponent:l["a"]},data:function(){return{data2:[{title:"parent 1",expand:!0,children:[{title:"parent 1-1",expand:!0,children:[{title:"leaf 1-1-1"},{title:"leaf 1-1-2"}]},{title:"parent 1-2",children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-1"}]}]}],code2:"\n        <template>\n          <ct-tree :data=\"data2\" show-checkbox></ct-tree>\n        </template> \n\n        <script>\n          export default {\n            data() {\n              return {\n                data2: [\n                  {\n                    title: 'parent 1',\n                    expand: true,\n                    children: [\n                      {\n                        title: 'parent 1-1',\n                        expand: true,\n                        children: [\n                            {\n                                title: 'leaf 1-1-1'\n                            },\n                            {\n                                title: 'leaf 1-1-2'\n                            }\n                        ]\n                      },\n                      {\n                        title: 'parent 1-2',\n                        expand: true,\n                        children: [\n                            {\n                                title: 'leaf 1-2-1'\n                            },\n                            {\n                                title: 'leaf 1-2-1'\n                            }\n                        ]\n                      }\n                    ]\n                  }\n                ],\n              };\n            }\n          };\n        <\/script>\n      "}}},_=v,m=(n("4652"),Object(d["a"])(_,p,f,!1,null,"68564c5a",null)),b=m.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("showcomponent",{attrs:{title:"带有初始状态的",subtitle:"传入数据时，自定义每个节点的初始状态",attributes:["data, show-checkbox, icon"],ctname:"Tree",codes:t.code3},scopedSlots:t._u([{key:"showarea",fn:function(){return[n("h4",[t._v("可设定的状态有expand、checked、disabled、selected")]),n("ct-tree",{attrs:{data:t.data3,"show-checkbox":"",multiple:""}})]},proxy:!0},{key:"desc",fn:function(){return[n("div",[t._v(" 给节点设置 "),n("code",[t._v("expand")]),t._v("、"),n("code",[t._v("selected")]),t._v(" "),n("code",[t._v("checked")]),t._v(" 和 "),n("code",[t._v("disabled")]),t._v(" 可以将节点设置为展开、选中、勾选和禁用状态。"),n("br"),t._v(" 设置属性"),n("code",[t._v("multiple")]),t._v("可对节点进行多选 ")])]},proxy:!0}])})},k=[],w={components:{showcomponent:l["a"]},data:function(){return{data3:[{title:"parent 1",expand:!0,children:[{title:"parent 1-1",expand:!0,selected:!0,children:[{title:"leaf 1-1-1",disabled:!0},{title:"leaf 1-1-2",selected:!0}]},{title:"parent 1-2",expand:!0,checked:!0,children:[{title:"leaf 1-2-1"}]}]}],code3:"\n        <template>\n          <ct-tree :data=\"data3\" show-checkbox multiple></ct-tree>\n        </template> \n\n        <script>\n          export default {\n            data() {\n              return {\n                data3: [\n                  {\n                    title: 'parent 1',\n                    expand: true,\n                    children: [\n                      {\n                        title: 'parent 1-1',\n                        expand: true,\n                        selected: true,\n                        children: [\n                            {\n                                title: 'leaf 1-1-1',\n                                disabled: true\n                            },\n                            {\n                                title: 'leaf 1-1-2',\n                                selected: true\n                            }\n                        ]\n                      },\n                      {\n                        title: 'parent 1-2',\n                        expand: true,\n                        checked: true,\n                        children: [\n                            {\n                                title: 'leaf 1-2-1',\n                            },     \n                        ]\n                      }\n                    ]\n                  }\n                ],\n              };\n            }\n          };\n        <\/script>\n      "}}},y=w,C=(n("5321"),Object(d["a"])(y,x,k,!1,null,"fc5973fa",null)),g=C.exports,S=n("a5ef"),B={name:"tree",chName:"树形控件",components:{Base:h,Checkbox:b,InitStatus:g,Showpara:S["a"]},data:function(){return{parameter1:{title:["参数","说明","类型","可选值","默认值"],contents:[["data","待展示的数据","Array","-","[]"],["show-checkbox","是否有复选框","Boolean","true/false","false"],["multiple","节点是否可以多选","Boolean","true/false","false"]]},parameter2:{title:["参数","说明","类型","可选值","默认值"],contents:[["title","节点标题","String","-","-"],["expand","是否展开直子节点","Boolean","true/false","false"],["selected","是否选中节点","Boolean","true/false","false"],["checked","复选框是否选中","Boolean","true/false","false"],["disabled","是否禁用","Boolean","true/false","false"],["children","子节点属性数组","Array","-","-"]]},parameter3:{title:["事件名","说明","返回值"],contents:[["on-expand","展开和收起节点时触发","当前节点的数据"],["on-check-change","点击复选框时触发","当前已勾选节点的数组、当前项"]]}}}},T=B,$=(n("f704"),Object(d["a"])(T,a,i,!1,null,"d47655b2",null));e["default"]=$.exports},"282c":function(t,e,n){},"2f93":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("h3",[t._v(t._s(this.title))]),n("p",[t._v(t._s(this.subtitle))]),n("div",{staticClass:"demoblock"},[n("div",{staticClass:"source"},[t._t("showarea")],2),n("div",{ref:"ayheight",staticClass:"meta",style:{height:t.ToBlockCodeheight+"px"},attrs:{id:"codeblock"}},[n("div",{staticClass:"description"},[n("div",[n("p",[t._t("desc")],2)])]),n("div",{staticClass:"highlight"},[n("div",{staticClass:"codearea"},[n("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:t.codes,expression:"codes"}]},[n("code")])])])]),n("div",{staticClass:"demo-block-control",on:{click:t.blockControl}},[n("i",{staticClass:"iconfont",class:[t.isClose?"icon-downarrow":"icon-uparrow"]}),t.isClose?n("span",[t._v("显示代码")]):n("span",[t._v("隐藏代码")])])])])},i=[],r=(n("7134"),{data:function(){return{isClose:!1,BlockCodeheight:""}},props:{title:{type:String},subtitle:{type:String},des:{type:String},ctname:{type:String},attributes:{type:Array},codes:{type:String}},computed:{ToBlockCodeheight:function(){return this.isClose?"0":this.BlockCodeheight}},methods:{blockControl:function(){this.isClose=!this.isClose}},mounted:function(){this.BlockCodeheight=this.$refs.ayheight.offsetHeight,this.isClose=!0}}),c=r,l=n("2877"),o=Object(l["a"])(c,a,i,!1,null,"3fa4a79b",null);e["a"]=o.exports},"31ea":function(t,e,n){},4652:function(t,e,n){"use strict";n("79f2")},5321:function(t,e,n){"use strict";n("61b3")},"61b3":function(t,e,n){},7134:function(t,e,n){},"79f2":function(t,e,n){},9132:function(t,e,n){},a5ef:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("h1",[t._v(t._s(t.title))]):t._e(),n("table",[n("thead",[n("tr",t._l(t.parameter.title,(function(e,a){return n("td",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]),n("tbody",t._l(t.parameter.contents,(function(e,a){return n("tr",{key:a},t._l(e,(function(e,a){return n("td",{key:a},[t._v(t._s(e))])})),0)})),0)])])},i=[],r={name:"ShowParameter",props:{parameter:Object,title:{type:String,default:""}}},c=r,l=(n("b70b"),n("2877")),o=Object(l["a"])(c,a,i,!1,null,"abf6840c",null);e["a"]=o.exports},b70b:function(t,e,n){"use strict";n("282c")},f704:function(t,e,n){"use strict";n("31ea")}}]);
//# sourceMappingURL=chunk-04f25a7e.1304a14d.js.map
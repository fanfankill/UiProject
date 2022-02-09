<template>
  <div>
    <h1>Notification 通知</h1>
    <p>悬浮出现在页面角落，显示全局的通知提醒消息。</p>
     <Showcomponent title="基础用法" subtitle="适用性广泛的通知栏" :codes="code1">
      <template v-slot:desc>
        <div>通过<code>title</code>字段和<code>content</code>字段，设置通知的标题和正文,建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。默认情况下，经过一段时间后 
        Notification 组件会自动关闭，但是通过设置<code>duration</code>，可以控制关闭的时间间隔，特别的是，如果设置为<code>1</code>，
        则不会自动关闭。注意：<code>duration</code>接收一个<code>Number</code>，单位为毫秒，默认为<code>4000</code>。
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <ct-button style="margin-right:20px" @click="open1">可自动关闭</ct-button>
            <ct-button @click="open2">不会自动关闭</ct-button>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="带有倾向性" subtitle="带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息" :codes="code2">
      <template v-slot:desc>
        <div>
            Notification 组件准备了四种通知类型：<code>info</code>,<code>success</code>,<code>warning</code>,<code>error</code> 。通过<code>type</code>字段来设置，除此以外的值将被忽略。
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <ct-button style="margin-right:20px" @click="open3">消息</ct-button>
            <ct-button style="margin-right:20px" @click="open4">成功</ct-button>
            <ct-button style="margin-right:20px" @click="open5">警告</ct-button>
            <ct-button @click="open6">错误</ct-button>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="自定义弹出位置" subtitle="可以让 Notification 从屏幕四角中的任意一角弹出" :codes="code3">
      <template v-slot:desc>
        <div>
           使用<code>position</code>属性定义 Notification 的弹出位置，支持四个选项：<code>top-right</code>、<code>top-left</code>、<code>bottom-right</code>、<code>bottom-left</code>，默认为top-right。
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <ct-button style="margin-right:20px" @click="open7">右上角</ct-button>
            <ct-button style="margin-right:20px" @click="open8">右下角</ct-button>
            <ct-button style="margin-right:20px" @click="open9">左下角</ct-button>
            <ct-button @click="open10">左上角</ct-button>
        </div>
      </template>
    </Showcomponent> 
     <Showcomponent title="带有偏移" subtitle="让 Notification 偏移一些位置" :codes="code4">
      <template v-slot:desc>
        <div>
            Notification 提供设置偏移量的功能，通过设置<code>offset</code>字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <ct-button @click="open11">偏移的消息</ct-button>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="使用HTML片段" subtitle="content 属性支持传入 HTML 片段" :codes="code5">
      <template v-slot:desc>
        <div>
            将<code>dangerouslyUseHTMLString</code>属性设置为 true，<code>content</code>就会被当作 HTML 片段处理。
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <ct-button @click="open12">使用HTML片段</ct-button>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="隐藏关闭按钮" subtitle="可以不显示关闭按钮" :codes="code6">
      <template v-slot:desc>
        <div>
           将<code>showClose</code>属性设置为<code>false</code>即可隐藏关闭按钮。
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <ct-button @click="open13">隐藏关闭按钮</ct-button>
        </div>
      </template>
    </Showcomponent> 
    <Showparameter title="Options" :parameter="parameter" style="margin-top:150px;"></Showparameter>        
  </div>
</template>

<script>
import Showcomponent from "../../components/showcomponent/index.vue";
import Showparameter from "../../components/showparameter/index.vue";
export default {
  name: "notification",
  chName: "通知",
  components: { Showcomponent,Showparameter },
  data() {
      return {
          code1:`<ct-button @click="open1">可自动关闭</ct-button>
<ct-button @click="open2">不会自动关闭</ct-button>

<script>
    export default {
        methods: {
            open1(){
                this.$notify({
                    title:'这是通知标题',
                    content: '这是通知描述,这是通知描述,这是通知描述,这是通知描述,'
                })
             },
            open2(){
                this.$notify({
                    title:'提示',
                    content:'这是一条不会自动关闭的消息',
                    duration: 1
                })
            }
        },
    };  
<` + `/` + `script>`,
          code2:`<ct-button @click="open3">消息</ct-button>
<ct-button @click="open4">成功</ct-button>
<ct-button @click="open5">警告</ct-button>
<ct-button @click="open6">错误</ct-button>

<script>
    export default {
        methods: {
            open3(){
                this.$notify({
                    title:'消息',
                    content:'这是一条消息的提示消息',
                    type: 'info'
                })
            },
            open4(){
                this.$notify({
                    title:'成功',
                    content:'这是一条成功的提示消息',
                    type: 'success'
                })
            }, 
            open5(){
                this.$notify({
                    title:'警告',
                    content:'这是一条警告的提示消息',
                    type: 'warning'
                })
            },
            open6(){
                this.$notify({
                    title:'错误',
                    content:'这是一条错误的提示消息',
                    type: 'error'
                })
            },                              
        },
    };  
<` + `/` + `script>`,
          code3:`<ct-button @click="open7">右上角</ct-button>
<ct-button @click="open8">右下角</ct-button>
<ct-button @click="open9">左下角</ct-button>
<ct-button @click="open10">左上角</ct-button>

<script>
    export default {
        methods: {
            open7(){
                this.$notify({
                    title:'右上角',
                    content:'右上角弹出的消息',
                })
            },
            open8(){
                this.$notify({
                    title:'右下角',
                    content:'右下角弹出的消息',
                    position: 'bottom-right'
                })
            }, 
            open9(){
                this.$notify({
                    title:'左下角',
                    content:'左下角弹出的消息',
                    position:'bottom-left'
                })
            },
            open10(){
                this.$notify({
                    title:'左上角',
                    content:'左上角弹出的消息',
                    position: 'top-left'
                })
            },                                           
        },
    };  
<` + `/` + `script>`,
          code4:`<ct-button @click="open11">偏移的消息</ct-button>

<script>
    export default {
        methods: {
            open11(){
                this.$notify({
                    title:'偏移',
                    content:'这是一条偏移的消息',
                    offset: 300
                })
            },                         
        },
    };  
<` + `/` + `script>`,
          code5:`<ct-button @click="open12">使用HTML片段</ct-button>

<script>
    export default {
        methods: {
            open12(){
                this.$notify({
                    title:'HTML 片段',
                    dangerouslyUseHTMLString: true,
                    content: '<strong>这是 <i>HTML</i> 片段</strong>'
                })
            },                 
        },
    };  
<` + `/` + `script>`,
          code6:`<ct-button @click="open13">隐藏关闭按钮</ct-button>

<script>
    export default {
        methods: {
            open13(){
                this.$notify({
                    title:'我没有按钮',
                    showClose: false,
                    content: '这是一条没有关闭按钮的消息'
                })
            },                  
        },
    };  
<` + `/` + `script>`,
      parameter:{
        title:['参数','说明','类型','可选值','默认值'],
        contents:[
          ['title','标题','String','—','—'],
          ['content','说明文字','String','—','—'],
          ['dangerouslyUseHTMLString','是否将 message 属性作为 HTML 片段处理','Boolean','—','false'],
          ['type','主题样式，如果不在可选值内将被忽略','String','success/warning/info/error','—'],
          ['duration','显示时间, 毫秒。设为 1 则不会自动关闭','Number','—','4000'],
          ['position','自定义弹出位置','String','top-right/top-left/bottom-right/bottom-left','top-right'],
          ['showClose','是否显示关闭按钮','Boolean','—','true'],
          ['offset','偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量','Number','—','0'],
        ]
      }
      }
  },
  methods: {
      open1(){
          this.$notify({
              title:'这是通知标题',
              content: '这是通知描述,这是通知描述,这是通知描述,这是通知描述,'
          })
      },
      open2(){
          this.$notify({
              title:'提示',
              content:'这是一条不会自动关闭的消息',
              duration: 1
          })
      },
      open3(){
          this.$notify({
              title:'消息',
              content:'这是一条消息的提示消息',
              type: 'info'
          })
      },
      open4(){
          this.$notify({
              title:'成功',
              content:'这是一条成功的提示消息',
              type: 'success'
          })
      }, 
      open5(){
          this.$notify({
              title:'警告',
              content:'这是一条警告的提示消息',
              type: 'warning'        
          })
      },
      open6(){
          this.$notify({
              title:'错误',
              content:'这是一条错误的提示消息',
              type: 'error'  
          })
      },
      open7(){
          this.$notify({
              title:'右上角',
              content:'右上角弹出的消息',
          })
      },
      open8(){
          this.$notify({
              title:'右下角',
              content:'右下角弹出的消息',
              position: 'bottom-right'
          })
      }, 
      open9(){
          this.$notify({
              title:'左下角',
              content:'左下角弹出的消息',
              position:'bottom-left'
          })
      },
      open10(){
          this.$notify({
              title:'左上角',
              content:'左上角弹出的消息',
              position: 'top-left'
          })
      }, 
      open11(){
          this.$notify({
              title:'偏移',
              content:'这是一条偏移的消息',
              offset: 300
          })
      },    
      open12(){
          this.$notify({
              title:'HTML 片段',
              dangerouslyUseHTMLString: true,
              content: '<strong>这是 <i>HTML</i> 片段</strong>'
          })
      },   
      open13(){
          this.$notify({
              title:'通知',
              showClose: false,
              content: '这是一条没有关闭按钮的消息'
          })
      },                                          
  },

}
</script>

<style>

</style>
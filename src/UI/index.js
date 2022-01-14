//引入组件


// 组件列表
const allcomponents=[
  
]


//组件注册
const install=function(Vue){
    // 遍历并注册所有组件
    allcomponents.map(component =>{
       Vue.component(component.name, component);
    })

}


//导出全局install
export default {
    install
}
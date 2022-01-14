import Vue from 'vue'
import App from './App.vue'
//引入组件
import fanui from '../src/UI'
//引入路由
import router from './router'

Vue.use(fanui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

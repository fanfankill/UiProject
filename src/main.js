import Vue from 'vue'
import App from './App.vue'
//引入组件
import fanui from '../src/UI'

Vue.use(fanui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App'

// 配置关闭生产提示
Vue.config.productionTip = false

// mpVue 类型，生命App是整个应用
App.mpType = 'app'

// 生成Vue实例
const app = new Vue(App)
app.$mount() // 挂载实例

// new Vue({
//     el: ''
// })
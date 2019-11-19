import Vue from 'vue'
import Fly from 'flyio/dist/npm/wx'
import store from './store/store'
import App from './app.vue'

// 设置Vue的提示功能关闭
Vue.config.productionTip = false;

// 声明当前组件的类型
App.mpType = 'app' // 应用

// 将store对象防止Vue的原型上，为的是每个实例都可以使用
Vue.prototype.$store = store

let fly = new Fly
Vue.prototype.$fly = fly

const app = new Vue(App)
app.$mount() // 挂载实例
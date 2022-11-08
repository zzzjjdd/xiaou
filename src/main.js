import Vue from 'vue'
import App from './App.vue'
// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
// 引入less
import less from 'less';
Vue.use(less)

// 引入elementui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

// 引入vantui
import Vant from 'vant'
import 'vant/lib/index.css'
// import { Toast } from 'vant'
Vue.use(Vant)
// Vue.use(Toast)

Vue.prototype.event = new Vue()
Vue.prototype.$event = new Vue()
//引入重置样式
import './assets/css/rest.css';
// 引入rem.js
import './assets/js/rem';

//引入animate.css
import 'animate.css';

//公共全局组件
import comComponents from './components/components/index';
for(let i in comComponents) {
  Vue.component(i,comComponents[i])
}

//引入router路由
import router from './router/router'

// 引入vuex sotre仓库
import store from "./store/index";

// 设置图片请求前缀
Vue.prototype.$pregImg = "http://localhost:3000"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

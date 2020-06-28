import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import App from './App.vue'
import env from './env'

// 发请求时设置一些基础值
// 根据前端的跨域方式做调整 eg: /a/b : /api/a/b => /a/b
axios.defaults.baseURL = 'api';
// 超时设置
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data; // 这里的data是axios中的data
  if (res.status == 0) { // 0是成功
    return res.data; // 这里的data才是接口返回的值
  } else if (res.data == 10) { // 10是未登录
    // 跳转到登录页面
    window.location.href = '/#/login'; // 带#号的是哈希路由 eg:http://localhost:8080/#/index
  } else {
    alert(res.msg);
  }
})

// 加载插件
Vue.use(VueAxios, axios); // 把实例挂载上去
Vue.config.productionTip = false // productionTip是生产环境下的提示信息

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

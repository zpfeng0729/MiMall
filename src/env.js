// 以下这种方式是基于CORS跨域和JSONP跨域，接口代理需要在vue.config.js里面改
let baseURL;
// 根据不同的环境输出不同的url地址
switch (process.env.NODE_ENV) { // 获取当前nodejs进程里面的一些环境变量，最终这些环境变量会写入到nodejs里面去
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'prev':
    baseURL = 'http://prev-mall-pre.springboot.cn/api';
    break;
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api';
}

export default {
  baseURL
}

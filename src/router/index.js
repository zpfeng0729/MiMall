import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Product from '../pages/product.vue'
import Detail from '../pages/detail.vue'
import Cart from '../pages/cart.vue'
import Order from '../pages/order.vue'
import OrderList from '../pages/orderList.vue'
import OrderConfirm from '../pages/orderConfirm.vue'
import OrderPay from '../pages/orderPay.vue'
import Alipay from '../pages/alipay.vue'

Vue.use(VueRouter) // 加载插件的固定语法

const routes = [ // 配置一些子路由
  {
    path: '/',
    name: 'home',
    redirect: '/index', // 重定向
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/product/:id', // 动态定义路由的方式
        name: 'product',
        component: Product
      },
      {
        path: '/detail/:id', // 动态定义路由的方式
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm
      },
      {
        path: 'pay', // 动态定义路由的方式
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'alipay', // 动态定义路由的方式
        name: 'alipay',
        component: Alipay
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import storage from './storage'
export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    // storage.setItem('a', 1)
    // storage.setItem('user', {a: 1})
    // storage.setItem('abc', {a: 1}, 'user')
    // storage.clear('a')
    // storage.clear('a', 'user')

    // 第一种：本地加载请求静态json文件的形式
    // this.axios.get('mock/user/login.json').then((res) => {
    //   this.res = res;
    // })

    // 第二种：通过easy-mock平台实现数据mock
    // eg: axios.defaults.baseURL 要设成 https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall
    // this.axios.get('user/login').then((res) => {
    //   this.res = res;
    // })

    // 第三种：本地集成mockjs实现数据mock(mockjs并没有发生真实的请求)
    this.axios.get('user/login').then((res) => {
      this.res = res;
    })
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/mixin.scss';
@import './assets/scss/button.scss';
</style>

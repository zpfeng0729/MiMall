<template>
  <div class="login">
    <div class="container">
      <a href="/#/index">
        <img src="/imgs/login-logo.png" alt />
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">账号登录</span>
            <span class="sep-line">|</span>
            <span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username" />
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">
              立即注册
              <span>|</span>忘记密码？
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="javascript:;">朱攀峰的主页</a>
        <span>|</span>
        <a href="javascript:;">Vue全栈课程</a>
        <span>|</span>
        <a href="javascript:;">React全家桶课程</a>
        <span>|</span>
        <a href="javascript:;">微信小程序</a>
        <span>|</span>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  // data: {}   ---data定义成一个对象说明是全局声明的，会造成页面与页面之间、组件与组件之间数据的串用
  // data() {}  ---这种方式是声明一个局部的对象
  data() {
    return {
      username: '',
      password: '',
      userId: '',
    }
  },
  methods: {
    // 表单提交一般都会用post提交
    login() {
      // ES6解构语法
      // username、password挂载在当前Vue实例上，也就是this对象上面，通过对this进行解构，解码出来就包括了username、password
      let {username, password} = this;
      this.axios.post('/user/login', {
        // 当key和value是一样的时候，可以简写成名称
        username,
        password
      }).then((res) => {
        // 设置一个月过期
        this.$cookie.set('iserId', res.id, {expires: '1M'});
        this.$router.push('/index');
      })
    },
    register() {
      this.axios.post('/user/register', {
        username: 'xtadmin',
        password: '1',
        email: 'xadmin@163.com'
      }).then(() => {
        alert('注册成功！')
      })
    }
  }
};
</script>
<style lang="scss">
.login {
  .container {
    height: 113px;
    img {
      width: auto;
      height: 100%;
    }
  }
  .wrapper {
    background: url("/imgs/login-bg.jpg") no-repeat center;
    .container {
      height: 576px;
      .login-form {
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width: 410px;
        height: 510px;
        background-color: #ffffff;
        position: absolute;
        bottom: 29px;
        right: 0;
        h3 {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px 0 49px;
          .checked {
            color: #ff6600;
          }
          .sep-line {
            margin: 0 32px;
          }
        }
        .input {
          display: inline-block;
          width: 348px;
          height: 50px;
          border: 1px solid #e5e5e5;
          margin-bottom: 20px;
          input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn {
          width: 100%;
          line-height: 50px;
          margin-top: 10px;
          font-size: 16px;
        }
        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms {
            color: #ff6600;
          }
          .reg {
            color: #999999;
            span {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 100px;
    padding-top: 60px;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-link {
      a {
        color: #999999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
    }
    .copyright {
      margin-top: 13px;
    }
  }
}
</style>

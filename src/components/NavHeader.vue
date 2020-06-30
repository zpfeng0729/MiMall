<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <!-- 设置href="javascript:;"可以防止页面刷新 -->
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart" @click="goToCart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <!-- 添加key值：渲染速度更快，复用率也更高，当重复二次渲染的时候会自动缓存，发现有元素缓存之后就会直接去取，不会重复渲染 -->
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <!-- 一旦用了指令里面就是js变量，如果想要字符串则需添加单引号 -->
                  <a v-bind:href="'/#/product/' + item.id" target="_blank">
                    <div calss="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div calss="pro-name">{{item.name}}</div>
                    <!-- 这里对价格进行了过滤 -->
                    <div calss="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <!-- <div class="children"></div> -->
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href target="_blank">
                    <div calss="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt />
                    </div>
                    <div calss="pro-name">小米壁画电视 65英寸</div>
                    <div calss="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div calss="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt />
                    </div>
                    <div calss="pro-name">小米电视4A 32英寸</div>
                    <div calss="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div calss="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt />
                    </div>
                    <div calss="pro-name">小米电视4A 32英寸</div>
                    <div calss="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div calss="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt />
                    </div>
                    <div calss="pro-name">查看全部</div>
                    <div calss="pro-price">查看全部</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div calss="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt />
                    </div>
                    <div calss="pro-name">小米CC9</div>
                    <div calss="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div calss="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt />
                    </div>
                    <div calss="pro-name">小米CC9</div>
                    <div calss="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
  data() {
    return {
      username: '',
      phoneList: []
    };
  },
  filters: {
    // 对价格进行过滤
    currency(val) {
      if (!val) return '0.00';
      return '￥' + val.toFixed(2) + '元';
    }
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    login() {
      this.$router.push('login');
    },
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6
          }
        })
        .then(res => {
          // if (res.list.length > 6) {
          //   this.phoneList = res.list.slice(0, 6);
          // }
          this.phoneList = res.list;
        });
    },
    goToCart() {
      this.$router.push('/cart');
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/base.scss"; /* 导入样式需要加分号 */
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    /* sass语法的好处就是可以进行嵌套，但css不可以 */
    .container {
      // display: flex; /* 弹性布局，用来为盒状模型提供最大的灵活性 */
      // justify-content: space-between; /* justify-content用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式 */
      // align-items: center;
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          // display: inline-block;
          // width: 16px;
          // height: 12px;
          // background: url('/imgs/icon-cart-checked.png') no-repeat center;
          // background-size: contain; /* 填充 */
          margin-right: 4px;
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            /* 伪类  用来生成两张图片 */
            content: " ";
            // display: inline-block;
            // width: 55px;
            // height: 55px;
            // background: url('/imgs/mi-logo.png') no-repeat center;
            // background-size: 55px;
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            transition: margin 0.2s;
          }
          &:after {
            /* 伪类  用来生成两张图片 */
            content: " ";
            // display: inline-block;
            // width: 55px;
            // height: 55px;
            // background: url('/imgs/mi-home.png') no-repeat center;
            // background-size: 55px;
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
          }
          &:hover::before {
            margin-left: -55px;
            transition: margin 0.2s; /* 指定元素的某个属性在某段时间内过渡 */
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA; /* config.scss里面的主题色 */
            .children {
              height: 220px;
              opacity: 1; /* opacity从0-1表示了一个元素的可见度，在0时会完全看不见，1表示完全可见 */
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition:all .5s; /* 有个动画的效果 */
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
              }
              img {
                height: 111px;
                width: auto;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            // display: inline-block;
            // width: 18px;
            // height: 18px;
            // background: url('/imgs/icon-search.png') no-repeat center;
            // background-size: contain;
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>

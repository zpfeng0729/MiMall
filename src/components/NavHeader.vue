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
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header"></div>
  </div>
</template>
<script>
export default {
  name: "nav-header"
};
</script>
<style lang="scss">
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    /* sass语法的好处就是可以进行嵌套，但css不可以 */
    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      display: flex; /* 弹性布局，用来为盒状模型提供最大的灵活性 */
      justify-content: space-between; /* justify-content用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式 */
      align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      };
      .my-cart {
        width: 110px;
        background-color: #FF6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url('/imgs/icon-cart-checked.png') no-repeat center;
          background-size: contain; /* 填充 */
          margin-right: 4px;
        }
      }
    }
  }
}
</style>

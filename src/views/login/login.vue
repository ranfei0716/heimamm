<template>
  <div class="login-bgc">
    <div class="left">
      <div class="top">
        <img src="../../assets/logo.png" alt />
        <div class="tltle">黑马面面</div>
        <i></i>
        <div class="right">用户登录</div>
      </div>
      <el-form-item label="活动形式"></el-form-item>
      <!-- 输入框 -->
      <div class="textbox">
        <el-form label-width="380px" class="inputbox">
          <el-input class="input1" prefix-icon="el-icon-user" placeholder="请输入手机号"></el-input>

          <el-input class="input2" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>

          <el-input class="input3" prefix-icon="el-icon-key" placeholder="请输入验证码"></el-input>
          <el-input class="input4"></el-input>
          <el-checkbox class="checked" >我以阅读并同意<a  href="javascript:void(0)" >用户协议</a>和<a href="javascript:void(0)" >隐私条款</a> </el-checkbox>
          <br />
          <el-button class="btn" type="primary">登录</el-button>
          <br />
          <el-button class="btn" type="primary">注册</el-button>
        </el-form>
      </div>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less">
.login-bgc {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(
    225deg,
    rgba(1, 198, 250, 1),
    rgba(20, 147, 250, 1)
  );
  .left {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    .top {
      display: flex;
      margin-top: 44px;
      //    box-sizing: border-box;
      img {
        margin-left: 47px;
        margin-right: 17px;
        width: 22px;
        height: 17px;
        padding-top: 6px;
      }
      .tltle {
        font-weight: 400;
        font-size: 24px;
      }

      i {
        width: 2px;
        background-color: #c7c7c7;
        margin-left: 14px;
        margin-right: 12px;
      }
      .right {
        font-weight: 400;
        font-size: 22px;
      }
    }
  }
  .img {
    width: 633px;
    height: 435px;
    margin: 0 auto;
  }
  .textbox {
    display: flex;
    width: 394px;
    margin-left: 43px;
    height: 45px;
    margin-top: 27px;
    .inputbox {
      height: 44px;
      .input1 {
        margin-bottom: 25px;
        height: 44px;
      }
      .input2 {
        margin-bottom: 25px;
        height: 44px;
      }
      .input3 {
        // margin-bottom: 25px;
        width: 284px;
        height: 44px;
      }
      .input4 {
        width: 110px;
        height: 44px;
      }
      .checked {
        margin-top: 32px;
        margin-bottom: 28px;
        a{
            color: #0094ff
        }
      }
      .btn{
          width: 100%;
          margin-bottom: 26px;
      }
    }
  }
}
</style>
<template>
  <div class="login">
    <a-row class="flex-row w100 h100 login-center">
      <a-col class="login-left">
        <div class="login-sign z999">
          <div class="el-login-header move_l1">
            <span class="font24 fontW600 color-white">范大夫</span>
          </div>
          <div class="mb60 move_l2">
            <img style="width: 100%" src="@/assets/svg/login-box-bg.svg" />
          </div>
          <div class="font28 fontW500 color-white mb16 move_l3">范大夫私人诊所</div>
          <div class="font14 fontW500 color-white move_l4">
            请输入您的账号密码开始使用
          </div>
        </div>
      </a-col>
      <a-col class="login-right">
        <el-form
          ref="loginRef"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
        >
          <h3 class="title move_r1">登录</h3>
          <el-form-item prop="username"  class="move_r2">
            <el-input
              v-model="loginForm.username"
              type="text"
              size="large"
              auto-complete="off"
              placeholder="账号"
            >
              <template #prefix
                ><svg-icon icon-class="user" class="el-input__icon input-icon"
              /></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password" class="move_r3">
            <el-input
              v-model="loginForm.password"
              type="password"
              size="large"
              auto-complete="off"
              placeholder="密码"
              @keyup.enter="handleLogin"
            >
              <template #prefix
                ><svg-icon
                  icon-class="password"
                  class="el-input__icon input-icon"
              /></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="code" v-if="captchaEnabled" class="move_r4">
            <el-input
              v-model="loginForm.code"
              size="large"
              auto-complete="off"
              placeholder="验证码"
              style="width: 63%"
              @keyup.enter="handleLogin"
            >
              <template #prefix
                ><svg-icon
                  icon-class="validCode"
                  class="el-input__icon input-icon"
              /></template>
            </el-input>
            <div class="login-code">
              <img :src="codeUrl" @click="getCode" class="login-code-img" />
            </div>
          </el-form-item>
          <el-checkbox
            v-model="loginForm.rememberMe"
            class="move_r4"
            style="margin: 0px 0px 25px 0px; color: #0960bd"
            >记住密码</el-checkbox
          >
          <el-form-item style="width: 100%" class="move_r5">
            <el-button
              :loading="loading"
              size="large"
              type="primary"
              style="width: 100%; background-color: #0960bd"
              @click.prevent="handleLogin"
            >
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
            <div style="float: right" v-if="register">
              <router-link class="link-type" :to="'/register'"
                >立即注册</router-link
              >
            </div>
          </el-form-item>
        </el-form>
      </a-col>
    </a-row>

    <!--  底部  -->
    <div class="el-login-footer">
      <!-- <span>Copyright © 2018-2023 ruoyi.vip All Rights Reserved.</span> -->
    </div>
  </div>
</template>

<script setup>
import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/utils/jsencrypt";
import useUserStore from "@/store/modules/user";

const userStore = useUserStore();
const router = useRouter();
const { proxy } = getCurrentInstance();

const loginForm = ref({
  username: "admin",
  password: "admin123",
  rememberMe: false,
  code: "",
  uuid: "",
});

const loginRules = {
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }],
};

const codeUrl = ref("");
const loading = ref(false);
// 验证码开关
const captchaEnabled = ref(true);
// 注册开关
const register = ref(false);
const redirect = ref(undefined);

function handleLogin() {
  proxy.$refs.loginRef.validate((valid) => {
    if (valid) {
      loading.value = true;
      // 勾选了需要记住密码设置在 cookie 中设置记住用户名和密码
      if (loginForm.value.rememberMe) {
        Cookies.set("username", loginForm.value.username, { expires: 30 });
        Cookies.set("password", encrypt(loginForm.value.password), {
          expires: 30,
        });
        Cookies.set("rememberMe", loginForm.value.rememberMe, { expires: 30 });
      } else {
        // 否则移除
        Cookies.remove("username");
        Cookies.remove("password");
        Cookies.remove("rememberMe");
      }
      // 调用action的登录方法
      userStore
        .login(loginForm.value)
        .then(() => {
          router.push({ path: redirect.value || "/" });
        })
        .catch(() => {
          loading.value = false;
          // 重新获取验证码
          if (captchaEnabled.value) {
            getCode();
          }
        });
    }
  });
}

function getCode() {
  getCodeImg().then((res) => {
    captchaEnabled.value =
      res.captchaEnabled === undefined ? true : res.captchaEnabled;
    if (captchaEnabled.value) {
      codeUrl.value = "data:image/gif;base64," + res.img;
      loginForm.value.uuid = res.uuid;
    }
  });
}

function getCookie() {
  const username = Cookies.get("username");
  const password = Cookies.get("password");
  const rememberMe = Cookies.get("rememberMe");
  loginForm.value = {
    username: username === undefined ? loginForm.value.username : username,
    password:
      password === undefined ? loginForm.value.password : decrypt(password),
    rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
  };
}

getCode();
getCookie();
</script>

<style lang='scss' scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  // min-width: 800px;
  background-color: #fff;
  // background-image: url("../assets/svg/login-bg.svg");
  background-size: cover;
  @media (max-width: 1200px) {
    background-color: #293146;

    .login {
      background-color: #fff;
    }
  }
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: -48%;
    background-image: url("../assets/svg/login-bg.svg");
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    content: "";
    @media (max-width: 1200px) {
      display: none;
    }
  }
}
.title {
  font-size: 28px;
  margin: 0px 0 30px 0;
  text-align: center;
  color: #000000;
}
.login-sign {
  width: 600px;
  margin-top: -5%;
  padding: 25px 200px 5px 0px;
  @media (max-width: 1300px) {
    display: none;
  }
}
.move_l1{
  animation: fadenum_left 0.6s;
}
.move_l2{
  animation: fadenum_left 0.8s;
}
.move_l3{
  animation: fadenum_left 1.0s;
}
.move_l4{
  animation: fadenum_left 1.2s;
}

@keyframes fadenum_left {
  from{
    opacity: 0;
    transform: translateX(-250px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
.move_r1{
  animation: fadenum_right 0.6s;
}
.move_r2{
  animation: fadenum_right 0.8s;
}
.move_r3{
  animation: fadenum_right 1.0s;
}
.move_r4{
  animation: fadenum_right 1.2s;
}
.move_r5{
  animation: fadenum_right 1.4s;
}
@keyframes fadenum_right {
  from{
    opacity: 0;
    transform: translateX(250px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
.login-left {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1300px) {
    display: none;
  }
}
.login-right {
  width: 50%;
  display: flex;
  align-items: center;
  @media (max-width: 1300px) {
    justify-content: center;
  }
  @media (max-width: 1000px) {
    width: 50%;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
}
.login-center {
  @media (max-width: 1300px) {
    justify-content: center;
  }
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 600px;
  padding: 25px 100px 5px 100px;
  margin-top: -5%;
  @media (max-width: 1300px) {
    z-index: 999;
    box-shadow: 1px 1px 8px #474747;
    transition: 0.5s;
    border-radius: 4px;
    background: none;
    padding: 25px 50px 5px 50px;
    width: 500px;
    margin-top: 0;
  }
  @media (max-width: 1200px) {
    box-shadow: none;
    background: #ffffff;
    padding: 25px 25px 5px 25px;
    width: 100%;
  }
  .el-input {
    height: 40px;
    input {
      height: 40px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 0px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 40px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-login-header {
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 3%;
  // width: 100%;
  text-align: left;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.login-code-img {
  height: 40px;
  padding-left: 12px;
}
.mb230 {
  margin-bottom: 215px;
}
.mb60 {
  margin-bottom: 60px;
}
</style>

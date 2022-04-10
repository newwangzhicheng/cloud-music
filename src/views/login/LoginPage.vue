<template>
  <div class="login-page">
    <p class="jump-home" @click="router.push({ name: Pages.my })">立即体验</p>
    <CloudmusicLogo class="logo" />
    <VanCellGroup class="input-group" inset>
      <VanField v-model="user" placeholder="请输入手机号/邮箱" clearable />
      <VanField
        v-model="password"
        type="password"
        placeholder="请输入密码"
        class="input"
        clearable
      />
    </VanCellGroup>
    <VanButton round class="login-button select_none" :disabled="loading" @click="loginSubmit">{{
      logText
    }}</VanButton>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Pages from '@/router/pages.js';
import { useUser } from '@/stores/user.js';
import { storeToRefs } from 'pinia';
import md5 from 'js-md5';
import CloudmusicLogo from './CloudmusicLogo.vue';

document.querySelector('meta[name="theme-color"]').setAttribute('content', 'rgb(202, 62, 45)');

const router = useRouter();

const user = ref('');
const password = ref('');
const md5_password = computed(() => {
  return md5(password.value);
});

const logText = ref('登陆');
const loading = ref(false);
const { login } = useUser();
const { loginStatus } = storeToRefs(useUser());

const loginSubmit = async () => {
  loading.value = true;
  logText.value = '正在登录...';
  await login(user.value, md5_password.value);
  loading.value = false;
  logText.value = '登录';

  if (loginStatus.value) {
    router.push({ name: Pages.my });
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/var.scss';
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(202, 62, 45);
  height: 100vh;
  .logo {
    flex-basis: 40%;
  }
  .jump-home {
    align-self: flex-end;
    margin: $border-space;
    color: rgba(255, 255, 255, 0.7);
  }
  .input-group {
    width: 80%;
  }
  .login-button {
    margin-top: 50px;
    width: 80%;
  }
}
</style>

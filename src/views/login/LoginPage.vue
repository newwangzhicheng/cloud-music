<template>
  <div class="login-page">
    <p class="jump-home" @click="router.push({ name: Pages.my })">立即体验</p>
    <CloudmusicLogo class="logo" />
    <div>
      <VanField v-model="user" placeholder="请输入手机号/邮箱" clearable />
      <VanField v-model="password" type="password" placeholder="请输入密码" clearable />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Pages from '@/router/pages.js';
import CloudmusicLogo from './CloudmusicLogo.vue';

document.querySelector('meta[name="theme-color"]').setAttribute('content', '#c73e27');

const router = useRouter();

const user = ref('');
const password = ref('');
</script>
<style lang="scss" scoped>
@import '@/assets/var.scss';
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #c73e27;
  // height: 100vh;
  .logo {
    flex-basis: 30%;
  }
  .jump-home {
    align-self: flex-end;
    margin: $border-space;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>

<template>
  <CardBlock class="profile-card">
    <VanImage round lazy-load fit="cover" class="profile-card__profile" src="">
      <template #error><Avatar theme="outline" size="30" fill="#333" /></template>
      <template #loading><Avatar theme="outline" size="30" fill="#333" /></template>
    </VanImage>
    <div v-if="login" class="profile-card__user-name select_none">用户名称</div>
    <div v-else class="profile-card__user-name select_none">立即登陆 ›</div>
  </CardBlock>
</template>
<script setup>
import CardBlock from '@/components/CardBlock.vue';
import { Avatar } from '@icon-park/vue-next';
</script>
<style lang="scss" scoped>
$profile-size: 75px;
.profile-card {
  margin-top: $profile-size;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .profile-card__profile {
    position: relative;
    top: calc($profile-size / 2 * (-1));
    width: $profile-size;
    height: $profile-size;
  }
  .profile-card__user-name {
    font-size: 20px;
    color: white;
    position: relative;
    top: -20px;
  }
}
</style>

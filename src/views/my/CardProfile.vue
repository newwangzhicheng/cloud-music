<template>
  <CardBlock class="profile-card" @click="jumpToLoginPage">
    <VanImage round lazy-load fit="cover" class="profile-card__profile" :src="avatarUrl">
      <template #error><Avatar theme="outline" size="30" fill="#333" /></template>
      <template #loading><Avatar theme="outline" size="30" fill="#333" /></template>
    </VanImage>
    <div class="profile-card__user-name select_none">{{ name }}</div>
  </CardBlock>
</template>
<script setup>
import { Avatar } from '@icon-park/vue-next';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUser } from '@/stores/user.js';
import Pages from '@/router/pages.js';
import CardBlock from '@/components/CardBlock.vue';
import { computed } from 'vue';

const props = defineProps({
  avatarUrl: {
    type: String,
    required: true
  },
  nickName: {
    type: String,
    required: true
  }
});

const router = useRouter();
const { loginStatus } = storeToRefs(useUser());

const jumpToLoginPage = () => {
  if (!loginStatus.value) {
    router.push({ name: Pages.login });
  }
};

const name = computed(() => {
  return loginStatus.value ? props.nickName : '立即登陆 ›';
});
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

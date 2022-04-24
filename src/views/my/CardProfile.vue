<template>
  <CardBlock class="h-24 flex flex-col items-center relative justify-end" @click="jumpToLoginPage">
    <ImgAvatar :avatar-url="props.avatarUrl" class="h-16 w-16 absolute -top-8" />
    <p class="font-bold text-2xl text-black dark:text-white select-none">{{ profileTitle }}</p>
  </CardBlock>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import { Pages } from '@/router/pages';
import CardBlock from '@/components/CardBlock.vue';
import ImgAvatar from '@/components/ImgAvatar.vue';
import { computed } from 'vue';

interface Props {
  avatarUrl: string;
  title: string;
}
const props = defineProps<Props>();

const profileTitle = computed(() => {
  return props.title !== '' ? props.title : '立即登陆 ›';
});

const router = useRouter();
const { isLogin } = storeToRefs(useUserStore());
const jumpToLoginPage = () => {
  if (!isLogin.value) {
    router.push({ name: Pages.login });
  }
};
</script>

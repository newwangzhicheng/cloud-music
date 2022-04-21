<template>
  <div class="p-4 col h-screen bg-light-50 dark:bg-dark-900 transition-bg duration-300">
    <!-- <div class="my__grid-card">
      <CardProfile :avatar-url="avatarUrl" :nick-name="nickName" />
      <div v-if="loginStatus">
        <CardApp />
        <CardFavorites />
        <VanTabs class="tab">
          <VanTab title="创建歌单" class="tab__title"></VanTab>
          <VanTab title="收藏歌单"></VanTab>
        </VanTabs>
        <CardPlaylist :clauses="clauses" />
      </div>
    </div> -->
    <div class="flex justify-between">
      <HamburgerButton theme="outline" size="24" :fill="isDarkMode ? '#fff' : '#000'" />
      <TopProfile v-show="isLogin" />
      <div>
        <SunOne
          v-if="mode === 'light'"
          @click="changeToDarkMode()"
          theme="outline"
          size="24"
          fill="#000"
          class="mr-4"
        />
        <DarkMode
          v-else
          @click="changeToLightMode()"
          theme="outline"
          size="24"
          fill="#fff"
          class="mr-4"
        />
        <Search theme="outline" size="24" :fill="isDarkMode ? '#fff' : '#000'" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { HamburgerButton, Search, SunOne, DarkMode } from '@icon-park/vue-next';
import { ref } from 'vue';
import TopProfile from './TopProfile.vue';
import { useModeStore } from '@/stores/mode';
import { storeToRefs } from 'pinia';

const modeStore = useModeStore();
const { changeToDarkMode, changeToLightMode } = modeStore;
const { mode, isDarkMode } = storeToRefs(modeStore);

const isLogin = ref(false);
</script>

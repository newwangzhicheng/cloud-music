<template>
  <div class="p-4 h-screen w-screen bg-light-400 dark:bg-dark-400 transition-bg duration-150">
    <div>
      <!-- <div v-if="isLogin">
        <CardApp />
        <CardFavorites />
        <VanTabs class="tab">
          <VanTab title="创建歌单" class="tab__title"></VanTab>
          <VanTab title="收藏歌单"></VanTab>
        </VanTabs>
        <CardPlaylist :clauses="clauses" />
      </div> -->
    </div>
    <CardProfile src="" title="" />
    <div class="flex justify-between fixed w-[calc(100%-2rem)]">
      <HamburgerButton theme="outline" size="24" :fill="isDarkMode ? '#fff' : '#000'" />
      <TopProfile v-show="hasScrollDown" />
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
import CardProfile from './CardProfile.vue';
import { useModeStore } from '@/stores/mode';
import { storeToRefs } from 'pinia';

const modeStore = useModeStore();
const { changeToDarkMode, changeToLightMode } = modeStore;
const { mode, isDarkMode } = storeToRefs(modeStore);

const hasScrollDown = ref(false);
const isLogin = ref(false);
</script>

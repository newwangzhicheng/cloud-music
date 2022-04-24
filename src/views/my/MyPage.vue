<template>
  <div
    class="h-screen w-screen bg-light-400 dark:bg-dark-400 transition-bg duration-150 relative box-border p-4"
  >
    <div class="w-full relative top-16">
      <CardProfile :avatar-url="avatarUrl" :title="title" />
    </div>
    <div
      class="w-[calc(100%-2rem)] flex justify-between items-end h-10 fixed top-0 bg-light-400 dark:bg-dark-400 transition-bg duration-150"
    >
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

const avatarUrl = ref('');
const title = ref('');

const hasScrollDown = ref(false);
</script>

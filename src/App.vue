<template>
  <RouterView />
</template>
<script setup lang="ts">
import 'virtual:windi.css';
import { useModeStore } from '@/stores/mode';
const { changeToDarkMode, changeToLightMode } = useModeStore();
if (sessionStorage.getItem('mode') !== null) {
  const mode = sessionStorage.getItem('mode') === 'dark' ? changeToDarkMode : changeToLightMode;
  mode();
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  changeToDarkMode();
}
</script>

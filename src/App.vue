<template>
  <RouterView />
</template>
<script setup lang="ts">
import 'virtual:windi.css';
import { useModeStore } from '@/stores/mode';
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  useModeStore().changeToDarkMode();
}
</script>

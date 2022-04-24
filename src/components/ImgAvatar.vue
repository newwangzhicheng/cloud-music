<template>
  <div class="h-full w-full flex justify-center rounded-1/2 bg-zinc-400 dark:bg-zinc-100">
    <img
      v-show="loaded"
      src="props.avatarUrl"
      @error="loaded = false"
      @load="loaded = true"
      alt="加载错误"
      class="rounded-1/2"
    />
    <Avatar
      v-show="!loaded"
      theme="outline"
      size="60%"
      :fill="modeStore.isDarkMode ? '#000' : '#fff'"
      class="rounded-1/2 flex justify-center self-center"
    />
  </div>
</template>
<script setup lang="ts">
import { Avatar } from '@icon-park/vue-next';
import { ref } from 'vue';
import { useModeStore } from '@/stores/mode';

interface Props {
  avatarUrl: string;
}
const props = defineProps<Props>();

const loaded = ref(false);

const modeStore = useModeStore();
</script>

<template>
  <CardBlock class="app-card">
    <div class="app-card__app">
      <UploadOne theme="filled" size="30" fill="#d0021b" />
      <p>云盘</p>
    </div>
    <div class="app-card__app">
      <MoreTwo
        theme="multi-color"
        size="30"
        :fill="['#d0021b', '#fffff00', '#d0021b', '#ffffff00']"
      />
      <p>更多</p>
    </div>
  </CardBlock>
</template>
<script setup>
import CardBlock from '@/components/CardBlock.vue';
import { UploadOne, MoreTwo } from '@icon-park/vue-next';
</script>
<style lang="scss" scoped>
.app-card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.app-card__app {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
}
</style>

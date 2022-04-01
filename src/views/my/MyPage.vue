<template>
  <div class="my">
    <div class="my__grid-card">
      <CardProfile />
      <CardApp />
      <CardFavorites />
    </div>
    <div class="my__top-bar">
      <HamburgerButton theme="outline" size="24" fill="#ffffff" />
      <TopProfile v-show="hasScrollDown" />
      <Search theme="outline" size="24" fill="#ffffff" />
    </div>
  </div>
</template>
<script setup>
import { HamburgerButton, Search } from '@icon-park/vue-next';
import TopProfile from './TopProfile.vue';
import CardProfile from './CardProfile.vue';
import CardApp from './CardApp.vue';
import CardFavorites from './CardFavorites.vue';
import { ref } from 'vue';

const hasScrollDown = ref(false);
</script>
<style lang="scss" scoped>
@import '@/assets/var.scss';
$top-bar-height: 40px;
.my {
  background: rgb(15, 15, 15);
  height: 100vh;
  .my__top-bar {
    position: fixed;
    top: 0;
    width: calc(100% - 2 * $border-space);
    height: $top-bar-height;
    padding: $border-space;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .my__grid-card {
    position: relative;
    top: $top-bar-height;
    background: rgba(0, 0, 0, 0);

    display: grid;
  }
}
</style>

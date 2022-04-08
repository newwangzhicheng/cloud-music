<template>
  <div class="my">
    <div class="my__grid-card">
      <CardProfile />
      <CardApp />
      <CardFavorites />
      <VanTabs class="tab">
        <VanTab title="创建歌单" class="tab__title"></VanTab>
        <VanTab title="收藏歌单"></VanTab>
      </VanTabs>
      <CardPlaylist v-if="login.loginStatus" :clauses="clauses" />
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
import PlaylistCluaseModel from '@/models/PlaylistClauseModel.js';
import { defineAsyncComponent, ref } from 'vue';
import { useLogin } from '@/stores/login.js';

const hasScrollDown = ref(false);

const CardPlaylist = defineAsyncComponent(() => import('./CardPlaylist.vue'));
const login = useLogin;
</script>
<style lang="scss" scoped>
@import '@/assets/var.scss';
$top-bar-height: 30px;
.my {
  background: rgb(15, 15, 15);
  .my__top-bar {
    position: fixed;
    top: 0;
    width: calc(100% - 2 * $border-space);
    height: $top-bar-height;
    padding: 6px $border-space;
    background: $bar-backgroundcolor;

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
  .tab {
    position: sticky;
    top: $top-bar-height;
    :deep(.van-tabs__nav) {
      background: $bar-backgroundcolor;
    }
    :deep(.van-tab) {
      font-size: 16px;
      color: $second-text-color;
    }
    :deep(.van-tab--active) {
      color: white;
      font-weight: 600;
    }

    :deep(.van-tab__text--ellipsis) {
      z-index: 100;
    }
    :deep(.van-tabs__line) {
      width: 70px;
      height: 8px;
      bottom: 25px;
      background: linear-gradient(90deg, rgb(235, 78, 71), rgb(238, 127, 123));
    }
  }
}
</style>

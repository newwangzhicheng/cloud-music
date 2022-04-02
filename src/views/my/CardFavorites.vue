<template>
  <CardBlock>
    <PlaylistClause :clause="favoritesPlaylistClause" />
  </CardBlock>
</template>
<script setup>
import CardBlock from '@/components/CardBlock.vue';
import PlaylistClause from '@/components/PlaylistClause.vue';
import PlaylistCluaseModel from '@/models/PlaylistClauseModel.js';

const favoritesPlaylistClause = new PlaylistCluaseModel({
  title: '我喜欢的歌',
  songNumber: 14,
  src: null,
  isLove: true
});
</script>
<style lang="scss" scoped></style>

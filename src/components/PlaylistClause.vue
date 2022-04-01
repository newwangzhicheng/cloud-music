<template>
  <div class="playlist-clause">
    <PlaylistCover :is-favorites="isFavorites" class="playlist-clause__playlist-cover" />
    <div class="playlist-clause__title">{{ title }}</div>
    <div class="playlist-clause__song-number">{{ songNumber }} 首</div>
  </div>
</template>
<script setup>
import PlaylistCover from './PlaylistCover.vue';
defineProps({
  isFavorites: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: true,
    default: ''
  },
  songNumber: {
    type: Number,
    required: true,
    default: 0
  }
});
</script>
<style lang="scss" scoped>
@import '@/assets/var.scss';
.playlist-clause {
  padding: 10px;
  display: grid;
  grid-template: auto / auto 1fr;
  grid-template-areas:
    'cover title'
    'cover song-number';
  .playlist-clause__playlist-cover {
    grid-area: cover;
    width: 50px;
    height: 50px;
    margin: 5px 10px 5px 5px;
  }
  .playlist-clause__title {
    grid-area: title;
    font-size: 15px;
    margin-top: 10px;
  }
  .playlist-clause__song-number {
    grid-area: song-number;
    font-size: 11px;
    margin-bottom: 5px;
    color: $second-text-color;
  }
}
</style>

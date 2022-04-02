<template>
  <div class="playlist-clause">
    <PlaylistCover :is-love="clause.isLove" class="playlist-clause__playlist-cover" />
    <div class="playlist-clause__title select_none">{{ clause.title }}</div>
    <div class="playlist-clause__song-number select_none">{{ clause.songNumber }} 首</div>
  </div>
</template>
<script setup>
import PlaylistCover from './PlaylistCover.vue';
import PlaylistClauseModel from '@/models/PlaylistClauseModel';
defineProps({
  clause: {
    type: PlaylistClauseModel,
    required: true,
    default: () =>
      new PlaylistClauseModel({
        title: '',
        songNumber: 0,
        src: '',
        isLove: false
      })
  }
});
</script>
<style lang="scss" scoped>
@import '@/assets/var.scss';
.playlist-clause {
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
    align-self: end;
    margin-bottom: 3px;
  }
  .playlist-clause__song-number {
    grid-area: song-number;
    font-size: 10px;
    color: $third-text-color;
    align-self: start;
  }
}
</style>

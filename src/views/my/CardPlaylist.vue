<template>
  <CardBlock>
    <PlaylistClause v-for="(clause, i) in clauses" :key="i" :clause="clause" />
  </CardBlock>
</template>
<script setup>
import CardBlock from '@/components/CardBlock.vue';
import PlaylistClause from '@/components/PlaylistClause.vue';
import PlaylistClauseModel from '@/models/PlaylistClauseModel.js';
defineProps({
  clauses: {
    type: Array,
    validator: (value) => {
      return value.every((item) => item instanceof PlaylistClauseModel);
    },
    default: () => []
  }
});
</script>

<template>
  <div class="block-card">
    <slot></slot>
  </div>
</template>
<style lang="scss">
@import '@/assets/var.scss';
.block-card {
  border-radius: 12px; /* px-to-viewport-ignore */
  margin: $border-space;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(200, 200, 200, 0.3));
}
</style>

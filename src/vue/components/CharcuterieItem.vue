<script setup lang="ts">
defineProps<{
  item: CharcuterieItem,
}>();
</script>

<template>
  <div class="box">
    <div :class="['wrapper', item.type]">
      <img
        :src="`../../src/assets/${item.type}.svg`"
        class="icon"
        :alt="`${item.name}`"
        :title="`${item.type}`"
      >
      <span class="name">{{ item.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  justify-content: center;
}

.wrapper {
  padding: 0.5em;
  width: 240px;
  display: flex;
  justify-content: left;
}

.name {
  font-size: 1.3em;
  color: rgba(97 65 16 / 80%);
}

.icon {
  text-align: center;
  height: 1.5em;
  margin-right: 0.5em;
  will-change: filter;
}

.vegetable {
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='red' stroke-width='2'/><path d='M0 0 L100 100 ' stroke='red' stroke-width='2'/></svg>") no-repeat center center;
  background-size: 100% 100%, auto;
}
</style>

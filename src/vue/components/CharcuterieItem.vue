<script setup lang="ts">
defineProps<{
  item: CharcuterieItem,
}>();
</script>

<template>
  <div class="box">
    <div class="wrapper">
      <img
        :src="`../../src/assets/${item.type}.svg`"
        class="icon"
        :alt="`${item.name}`"
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
  width: 150px;
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
</style>

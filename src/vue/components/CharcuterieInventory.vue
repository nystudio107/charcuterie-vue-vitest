<script setup lang="ts">
import {getAllItems } from '@/js/charcuterie-inventory';
import CharcuterieItem from './CharcuterieItem.vue';

const items = getAllItems();
</script>

<template>
  <div>
    <CharcuterieItem
      v-for="item in items"
      :key="item.name"
      :item="item"
    >
      {{ item.name }}
    </CharcuterieItem>
  </div>
</template>

<style scoped>
</style>

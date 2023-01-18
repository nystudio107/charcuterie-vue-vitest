<script setup lang="ts">
import {getInventory} from '@/js/charcuterie-inventory';
import CharcuterieItem from './CharcuterieItem.vue';

const inventory = getInventory();
</script>

<template>
  <div class="inventory">
    <CharcuterieItem
      v-for="item in inventory"
      :key="item.name"
      :item="item"
    >
      {{ item.name }}
    </CharcuterieItem>
  </div>
</template>

<style scoped>
</style>

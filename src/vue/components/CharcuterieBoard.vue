<script setup lang="ts">
import {ref, toRefs} from 'vue';
import {getInventory} from '@/js/charcuterie-inventory';

import CharcuterieItem from './CharcuterieItem.vue';

interface Props {
  min?: number
  max?: number
}
const props = withDefaults(defineProps<Props>(), {
  min: 3,
  max: 10,
})

const inventory = getInventory();
const items = ref([]);

function populateBoard() {
  let numItems = Math.floor(Math.random() * (props.max - props.min)) + props.min;
  items.value = [];
  while (numItems--) {
    const itemNum = Math.floor(Math.random() *inventory.length);
    items.value.push(inventory[itemNum]);
  }
}
</script>

<template>
  <div class="board">
    <div class="wrapper">
      <button @click="populateBoard">
        Populate
      </button>
    </div>
    <CharcuterieItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    >
      {{ item.name }}
    </CharcuterieItem>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 1em;
}
</style>

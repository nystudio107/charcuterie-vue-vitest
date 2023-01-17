<script setup lang="ts">
import CharcuterieBoardLogo from './components/CharcuterieBoardLogo.vue'
import CharcuterieBoard from './components/CharcuterieBoard.vue'
import CharcuterieInventory from './components/CharcuterieInventory.vue'
</script>

<template>
  <div>
    <CharcuterieBoardLogo />
    <div class="row">
      <div class="column">
        <h1>Charcuterie Board</h1>
        <CharcuterieBoard />
      </div>
      <div class="column">
        <h1>Inventory</h1>
        <CharcuterieInventory />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.2em;
  line-height: 1.1;
  color: rgba(97 65 16 / 100%);
}

.row {
  display: flex;
  flex-flow: row;
  margin-top: -1px;
  margin-left: -1px;
}

.column {
  display: flex;
  flex-flow: column;
  flex: 1;
  outline: 1px solid rgba(97 65 16 / 100%);
  margin-top: 1px;
  margin-left: 1px;
}
</style>

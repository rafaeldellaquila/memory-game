<template>
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl">Player: <span class="font-bold">{{ playerName }}</span></h2>
    <p class="text-lg">Rounds: <span class="font-bold">{{ rounds }}</span></p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  playerName: String,
  rounds: Number
})
</script>
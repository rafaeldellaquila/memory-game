<template>
  <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Rankings</h2>
    <div class="space-y-2">
      <div v-if="gameStore.rankings.length === 0" class="text-gray-500">No games played yet</div>
      <div
        v-for="(player, index) in gameStore.rankings"
        :key="index"
        class="flex justify-between items-center p-2 bg-gray-50 rounded"
      >
        <span class="font-medium">{{ player.name }}</span>
        <span>{{ player.rounds }} rounds</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useApi } from '../composables/useApi';
import { onMounted } from 'vue';
import { useGameStore } from '../stores/gameStore';

const { get } = useApi();
const gameStore = useGameStore();

onMounted(async () => {
  try {
    const response = await get('scores');
    gameStore.rankings = response;
  } catch (error) {
    console.error(error);
  }
});
</script>

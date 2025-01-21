<template>
  <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-8 rounded-lg shadow-lg text-center">
      <h3 class="text-2xl font-bold mb-4">Congratulations! 🎉</h3>
      <p class="text-lg mb-4">You completed the game in {{ gameStore.rounds }} rounds!</p>
      <button @click="gameStore.startGame(gameStore.playerName)" class="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
        Play Again
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  gameStore: {
    type: Object,
    required: true
  }
})
</script>
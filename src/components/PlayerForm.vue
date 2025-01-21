<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="name" class="label">Enter your name</label>
      <input id="name" v-model="name" type="text" required class="input" placeholder="Your name" />
    </div>
    <button type="submit" class="button">Start Game</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGameStore } from '../stores/gameStore';
import { useRouter } from 'vue-router';
const router = useRouter();
const gameStore = useGameStore();
const name = ref('');

function handleSubmit() {
  if (name.value.trim()) {
    gameStore.startGame(name.value);
    router.push({ path: '/game' });
  }
}
</script>

<style scoped>
.button {
  @apply w-full px-5 py-2.5 me-2 mb-2 font-medium rounded-lg text-sm text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300;
}

.input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5;
}

.label {
  @apply block mb-2 text-sm font-medium text-gray-900;
}
</style>

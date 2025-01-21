<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Welcome to Memory Game!</h2>
    <PlayerForm />
    <Rankings />
  </div>
</template>

<script setup lang="ts">
import PlayerForm from '../components/PlayerForm.vue';
import Rankings from '../components/Rankings.vue';
</script>

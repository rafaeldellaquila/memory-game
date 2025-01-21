<template>
     <div class="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
      <div
        v-for="card in cards"
        :key="card.id"
        @click="cardClick(card)"
        class="aspect-square bg-purple-700 rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
        :class="{
          'bg-white': card.isFlipped || card.isMatched,
          'pointer-events-none': card.isMatched
        }"
      >
        <div class="h-full flex items-center justify-center text-4xl">
          {{ card.isFlipped || card.isMatched ? card.value : '' }}
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { Card } from '../../domain/entities/Card';

defineProps({
  cards: Array<Card>,
  cardClick: {
    type: Function,
    required: true
  }
})

</script>

<template>
  <div class="max-w-4xl mx-auto p-4">
    <UserScore :player-name="gameStore.playerName" :rounds="gameStore.rounds" />
    <CardBoard :cards="gameStore.cards" :card-click="handleCardClick" />
    <Rankings />
    <Modal v-if="gameStore.gameCompleted" :game-store="gameStore" />
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '../stores/gameStore';
import type { Card } from '../domain/entities/Card';
import UserScore from './game/UserScore.vue';
import CardBoard from './game/CardBoard.vue';
import Modal from './game/Modal.vue';
import Rankings from './Rankings.vue';

const gameStore = useGameStore();

const handleCardClick = (card: Card) => gameStore.flipCard(card);
</script>

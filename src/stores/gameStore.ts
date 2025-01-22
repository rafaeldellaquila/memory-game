import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Card } from '../domain/entities/Card';
import type { Player } from '../domain/entities/Player';
import { CardFactory } from '../domain/factories/CardFactory';
import { useApi } from '../composables/useApi';

export const useGameStore = defineStore('game', () => {
  const playerName = ref('');
  const cards = ref<Card[]>([]);
  const rounds = ref(0);
  const flippedCards = ref<Card[]>([]);
  const rankings = ref<Player[]>([]);
  const gameCompleted = ref(false);
  const isGameStarted = computed(() => playerName.value !== '');

  function startGame(name: string) {
    playerName.value = name;
    cards.value = CardFactory.createDeck();
    rounds.value = 0;
    flippedCards.value = [];
    gameCompleted.value = false;
  }

  function flipCard(card: Card) {
    if (flippedCards.value.length === 2 || card.isMatched || card.isFlipped) return;

    card.isFlipped = true;
    flippedCards.value.push(card);

    if (flippedCards.value.length === 2) {
      rounds.value++;
      checkMatch();
    }
  }

  function checkMatch() {
    const [first, second] = flippedCards.value;

    if (first.value === second.value) {
      first.isMatched = true;
      second.isMatched = true;

      if (cards.value.every((card) => card.isMatched)) {
        useApi().post('scores', { name: playerName.value, rounds: rounds.value });
        endGame();
      }
    } else {
      setTimeout(() => {
        first.isFlipped = false;
        second.isFlipped = false;
      }, 500);
    }

    flippedCards.value = [];
  }

  function endGame() {
    gameCompleted.value = true;
    rankings.value.push({ name: playerName.value, rounds: rounds.value });
    rankings.value.sort((a, b) => a.rounds - b.rounds);
  }

  return {
    playerName,
    cards,
    rounds,
    rankings,
    gameCompleted,
    isGameStarted,
    startGame,
    flipCard,
    endGame
  };
});

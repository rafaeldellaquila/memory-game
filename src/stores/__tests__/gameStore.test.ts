import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useGameStore } from '../gameStore';



describe('gameStore', () => {
  const postSpy = vi.fn();

  vi.mock('../composables/useApi', () => ({
    useApi: () => ({
      post: postSpy,
    }),
  }));

  beforeEach(() => {
    setActivePinia(createPinia());
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('initializes with default values', () => {
    const store = useGameStore();

    expect(store.playerName).toBe('');
    expect(store.cards).toHaveLength(0);
    expect(store.rounds).toBe(0);
    expect(store.rankings).toHaveLength(0);
    expect(store.gameCompleted).toBe(false);
    expect(store.isGameStarted).toBe(false);
  });

  it('starts a new game', () => {
    const store = useGameStore();
    store.startGame('Player 1');

    expect(store.playerName).toBe('Player 1');
    expect(store.cards).toHaveLength(20);
    expect(store.rounds).toBe(0);
    expect(store.gameCompleted).toBe(false);
    expect(store.isGameStarted).toBe(true);
  });

  it('flips a card', () => {
    const store = useGameStore();
    store.startGame('Player 1');

    const card = store.cards[0];
    store.flipCard(card);

    expect(card.isFlipped).toBe(true);
  });

  it('matches a pair of cards', async () => {
    const store = useGameStore();
    store.startGame('Player 1');

    const value = store.cards[0].value;
    const pair = store.cards.filter(card => card.value === value);

    store.flipCard(pair[0]);
    store.flipCard(pair[1]);

    await vi.runAllTimersAsync();

    expect(pair[0].isMatched).toBe(true);
    expect(pair[1].isMatched).toBe(true);
    expect(store.rounds).toBe(1);
  });

  it('does not match different cards', async () => {
    const store = useGameStore();
    store.startGame('Player 1');

    const card1 = store.cards[0];
    const card2 = store.cards.find(card => card.value !== card1.value)!;

    store.flipCard(card1);
    store.flipCard(card2);

    await vi.advanceTimersByTimeAsync(500);

    expect(card1.isMatched).toBe(false);
    expect(card2.isMatched).toBe(false);
    expect(card1.isFlipped).toBe(false);
    expect(card2.isFlipped).toBe(false);
    expect(store.rounds).toBe(1);
  });
});

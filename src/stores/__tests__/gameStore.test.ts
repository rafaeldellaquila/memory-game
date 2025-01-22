import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useGameStore } from '../gameStore';

describe('gameStore', () => {
  const mockApi = {
    post: vi.fn().mockResolvedValue({}),
    get: vi.fn().mockResolvedValue([]),
  };

  vi.mock('../../composables/useApi', () => ({
    useApi: () => mockApi,
  }));

  beforeEach(() => {
    setActivePinia(createPinia());
    vi.useFakeTimers();
    mockApi.post.mockClear();
    mockApi.get.mockClear();
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

  it('handles multiple card flips correctly', () => {
    const store = useGameStore();
    store.startGame('Player 1');

    const cards = store.cards.slice(0, 3);
    store.flipCard(cards[0]);
    store.flipCard(cards[1]);

    expect(cards[0].isFlipped).toBe(true);
    expect(cards[1].isFlipped).toBe(true);
  });

  it('ignores flips on matched or already flipped cards', () => {
    const store = useGameStore();
    store.startGame('Player 1');

    const card = store.cards[0];
    card.isMatched = true;

    store.flipCard(card);
    expect(card.isFlipped).toBe(false);

    const anotherCard = store.cards[1];
    anotherCard.isFlipped = true;

    store.flipCard(anotherCard);
    expect(anotherCard.isFlipped).toBe(true);
  });

  it('sorts rankings by rounds in ascending order', async () => {
    const store = useGameStore();

    mockApi.post.mockResolvedValue({});

    store.startGame('Player 1');
    store.rounds = 15;
    store.endGame();

    store.startGame('Player 2');
    store.rounds = 10;
    store.endGame();

    store.startGame('Player 3');
    store.rounds = 12;
    store.endGame();

    await vi.runAllTimersAsync();

    expect(store.rankings).toEqual([
      { name: 'Player 2', rounds: 10 },
      { name: 'Player 3', rounds: 12 },
      { name: 'Player 1', rounds: 15 }
    ]);
  });
});
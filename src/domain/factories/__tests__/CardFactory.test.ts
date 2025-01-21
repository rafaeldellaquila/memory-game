import { describe, it, expect } from 'vitest';
import { CardFactory } from '../CardFactory';

describe('CardFactory', () => {
  it('creates a deck with 20 cards (10 pairs)', () => {
    const deck = CardFactory.createDeck();
    expect(deck).toHaveLength(20);
  });

  it('creates cards with correct properties', () => {
    const deck = CardFactory.createDeck();
    const card = deck[0];

    expect(card).toHaveProperty('id');
    expect(card).toHaveProperty('value');
    expect(card).toHaveProperty('isFlipped', false);
    expect(card).toHaveProperty('isMatched', false);
  });

  it('creates pairs of cards with matching values', () => {
    const deck = CardFactory.createDeck();
    const values = deck.map(card => card.value);
    const uniqueValues = new Set(values);

    expect(uniqueValues.size).toBe(10);

    uniqueValues.forEach(value => {
      const count = values.filter(v => v === value).length;
      expect(count).toBe(2);
    });
  });

  it('shuffles the deck', () => {
    const deck1 = CardFactory.createDeck();
    const deck2 = CardFactory.createDeck();
    expect(deck1.map(card => card.id)).not.toEqual(deck2.map(card => card.id));
  });
});
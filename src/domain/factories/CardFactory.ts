import type { Card } from '../entities/Card';

export class CardFactory {
  static createDeck(): Card[] {
    const values = ['🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎫', '🎬', '🎤', '🐛'];
    const cards: Card[] = [];

    values.forEach((value, index) => {
      cards.push(
        { id: index * 2, value, isFlipped: false, isMatched: false },
        { id: index * 2 + 1, value, isFlipped: false, isMatched: false },
      );
    });

    return this.shuffle(cards);
  }

  private static shuffle(cards: Card[]): Card[] {
    return cards.sort(() => Math.random() - 0.5);
  }
}

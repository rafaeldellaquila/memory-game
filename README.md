# Memory Game

A classic memory card game built with Vue 3, TypeScript, and Vite.

## Features

-  Player name registration
-  Round counter
-  Player rankings based on completion rounds
-  Automatic match verification
-  Modern, responsive UI with Tailwind CSS

## Tech Stack

- Vue 3 with Composition API
- TypeScript
- Vite
- Pinia for state management
- Tailwind CSS for styling
- Vitest for unit testing
- Express for server development

## Project Structure

The project follows DDD principles with a clean architecture:

```
src/
├── components/          # Vue components
├── domain/             # Domain layer
│   ├── entities/       # Business entities
│   └── factories/      # Factory patterns
├── pages/             # Vue pages
├── router/             # Vue routers
├── server/             # Express server
├── stores/             # Pinia state management
├── assets/             # Static assets
└── styles/             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd memory-game
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`


4. Start the express server
```bash
npm run server
```

The server will be available at `http://localhost:3000`


## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run tsc` - Check typescript
- `npm run server` - Start the express server
- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Fix linting errors
- `npm run format` - Format code

## Testing

The project includes comprehensive unit tests for:
- Game store logic
- Card factory
- Components
- User interactions

Run the tests with:
```bash
npm run test
```

## Game Rules

1. Enter your name to start the game
2. Click on any two cards to reveal them
3. If the cards match, they stay visible
4. If they don't match, they flip back after a short delay
5. The game counts your rounds (each pair of cards flipped counts as one round)
6. Complete the game by matching all pairs
7. Your score will be added to the rankings
8. Try to complete the game in fewer rounds to climb the rankings!
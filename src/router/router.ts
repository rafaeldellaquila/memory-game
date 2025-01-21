import { createMemoryHistory, createRouter } from 'vue-router';
import NewGame from '../pages/NewGame.vue';
import GamePage from '../pages/GamePage.vue';

const routes = [
  { path: '/', component: NewGame },
  { path: '/game', component: GamePage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

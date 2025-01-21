import { createMemoryHistory, createRouter } from 'vue-router'
import NewGame from '../pages/NewGame.vue'
import GameBoard from '../pages/GameBoard.vue'


const routes = [
  { path: '/', component: NewGame },
  { path: '/game', component: GameBoard },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
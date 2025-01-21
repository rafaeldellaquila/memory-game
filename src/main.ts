import { createApp } from 'vue'
import App from './App.vue'
import './styles/style.css'
import { createPinia } from 'pinia'
import router from './router/router'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')

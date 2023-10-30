import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import axios from 'axios'
import UUID from 'vue-uuid'

axios.defaults.baseURL = import.meta.env.VITE_NOTES

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(autoAnimatePlugin)
app.use(UUID)

app.mount('#app')

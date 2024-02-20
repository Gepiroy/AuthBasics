import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router' //index.js in folder will be picked automatically.

const app = createApp(App)

app.use(createPinia()) //Помню что вещь полезная, позже изучать буду...
app.use(router)

app.mount('#app')

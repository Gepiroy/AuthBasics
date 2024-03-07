import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import BlockBase from '@/components/BlockBase.vue'

import App from './App.vue'
import router from './router' //index.js in folder will be picked automatically.

const app = createApp(App)

app.component('block-base', BlockBase)

app.use(createPinia()) //Помню что вещь полезная, позже изучать буду...
app.use(router)

app.mount('#app')

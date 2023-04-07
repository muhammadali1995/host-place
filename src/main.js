import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import Details from './pages/Details.vue'

import './assets/main.css'
import { createI18n } from 'vue-i18n'
import { messages } from './translation.json'
import { createRouter, createWebHistory } from 'vue-router'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

const routes = [
    { path: '/', component: Home },
    { path: '/details', component: Details },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')

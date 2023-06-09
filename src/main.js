import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import Details from './pages/VPS-details.vue'
import Webhosting from './pages/Webhosting.vue'

import './assets/main.css'
import { createI18n } from 'vue-i18n'
import { messages } from './translation.json'
import { createRouter, createWebHistory } from 'vue-router'

const i18n = createI18n({
    locale: 'english',
    fallbackLocale: 'en',
    messages
})

const routes = [
    { path: '/', component: Home },
    { path: '/vps', component: Details },
    { path: '/webhosting', component: Webhosting },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')

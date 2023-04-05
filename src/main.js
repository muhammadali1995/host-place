import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    }
}

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

const app = createApp(App)

app.use(i18n)

app.mount('#app')

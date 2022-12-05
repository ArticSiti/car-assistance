import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/style.scss'

import YmapPlugin from 'vue-yandex-maps'
import '@/assets/js/ymap.js'

const settings = {
  apiKey: '4102edff-be5d-4ca7-a0be-417766fe6de8',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

createApp(App).use(store).use(router).use(YmapPlugin, settings).mount('#app')

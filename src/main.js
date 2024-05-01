import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// custom style css
import './assets/sass/style.scss';

const app = createApp(App)
app.use(createPinia())
app.mount('#app')

// bootstrap js
import * as bootstrap from 'bootstrap';
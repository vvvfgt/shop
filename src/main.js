import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/layouts/index.scss'
// eslint-disable-next-line no-unused-vars
import axios from "axios";

const app = createApp(App)
app.config.globalProperties.axios = axios

app.use(router)
app.mount('#app')

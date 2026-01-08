import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BASE_URL, API_KEY } from "@/variable/conf";
import apiPlugin from './plugins/api';
import tools from './plugins/tool';

const app = createApp(App)

app.use(apiPlugin, {
    baseURL: BASE_URL,
    apiKey: API_KEY
});

app.use(tools, {
    maxLength: 80
});

app.use(router)

app.mount('#app')

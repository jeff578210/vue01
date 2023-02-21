import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router/index.js';
const app = createApp(App)
app.use(router)
app.mount('#app')

//創建vue實體放置(.mount)到#app
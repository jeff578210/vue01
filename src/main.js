import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import card from './components/card.vue';
import router from './router/index.js';
const app = createApp(App)
app.component("card",card)
// 全域註冊讓每個檔案都能使用這個元件
app.use(router)
app.mount('#app')

//創建vue實體放置(.mount)到#app
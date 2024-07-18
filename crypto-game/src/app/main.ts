import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index'; // Импортируйте маршрутизатор
import './style.css'

const app = createApp(App);

app.use(router); // Используйте маршрутизатор

app.mount('#app');
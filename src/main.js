import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.baseURL = 'http://personal_work.test/appy-task/appy-backend/public/api/';
axios.defaults.withCredentials = false;

const app = createApp(App)

app.use(router)

app.mount('#app')

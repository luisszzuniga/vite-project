import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


createApp(App).use(router).use(Bootstrap).mount('#app');

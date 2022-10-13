import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import emailjs from '@emailjs/browser';

import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

emailjs.init('S51_U78N5VTCqFP6p');
createApp(App).use(router).use(Bootstrap).mount('#app');

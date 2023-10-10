import './assets/main.css'
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createRouter,createWebHashHistory, createWebHistory} from 'vue-router'
import App from './App.vue'
import routes from './routes'
/*
const app = createApp(App)
app.use(createPinia())
app.mount('#app')
*/

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    //history: createWebHashHistory(),
    
    //History with proper URLS:

    history: createWebHistory(),
    
    routes, // short for `routes: routes` (quando la variabile è identica puoi scrivere così)
  })
  
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
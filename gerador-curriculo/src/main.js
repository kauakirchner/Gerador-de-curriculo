import { createApp } from 'vue'
import App from './App.vue'
import VueToast from 'vue-toast-notification';
import router from './Routes'

const app = createApp(App)
app.use(VueToast);
app.use(router)
app.mount('#app')


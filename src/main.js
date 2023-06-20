// Every Vue application starts by creating a new application instance with the createApp function:
import { createApp } from 'vue'
// Если вы используете однофайловые компоненты, мы обычно импортируем корневой компонент из другого файла
// import the root component App from a single-file component.
import App from './App.vue'
import {router} from "@/router/router";

const app = createApp(App)

app.use(router)
app.mount('#app')

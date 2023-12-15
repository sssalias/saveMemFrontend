import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'

import { VueMasonryPlugin } from 'vue-masonry'

const emitter = mitt()


const app = createApp(App)
app.config.globalProperties.emmiter = emitter

app
    .use(router)
    .use(VueMasonryPlugin)
    .mount('#app')

// createApp(App).use(router).mount('#app')

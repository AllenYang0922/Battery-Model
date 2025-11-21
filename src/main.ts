import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { registerFontAwesome } from './plugins/fontawesome';
import router from './router';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
registerFontAwesome(app);
app.use(router);
app.mount('#app');

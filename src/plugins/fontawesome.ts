import type { App } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faClock,faWifi } from '@fortawesome/free-solid-svg-icons';

library.add(faClock,faWifi);

export function registerFontAwesome(app: App) {
  app.component('font-awesome-icon', FontAwesomeIcon);
}

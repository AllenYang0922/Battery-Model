import type { App } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faClock,
  faWifi,
  faDiagramProject,
  faRightToBracket,
  faBolt,
  faBatteryThreeQuarters,
  faThermometerHalf,
  faArrowRight,
  faMicrochip,
  faDatabase,
  faLayerGroup,
  faEye,
  faSquare,
  faChartLine,
  faBrain,
  faBatteryFull,
  faGaugeHigh,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faClock,
  faWifi,
  faDiagramProject,
  faRightToBracket,
  faBolt,
  faBatteryThreeQuarters,
  faThermometerHalf,
  faArrowRight,
  faMicrochip,
  faDatabase,
  faLayerGroup,
  faEye,
  faSquare,
  faChartLine,
  faBrain,
  faBatteryFull,
  faGaugeHigh,
  faChartPie
);

export function registerFontAwesome(app: App) {
  app.component('font-awesome-icon', FontAwesomeIcon);
}

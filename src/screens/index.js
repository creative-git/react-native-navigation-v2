import { Navigation } from 'react-native-navigation';

import home from './home';
import sideMenu from './sideMenu';
import sideMenuRight from './sideMenuRight';
import screen1 from './screen1';
import screen2 from './screen2';


export function registerScreens() {
  Navigation.registerComponent('home', () => home);
  Navigation.registerComponent('sideMenuRight', () => sideMenuRight);
  Navigation.registerComponent('sideMenu', () => sideMenu);
  Navigation.registerComponent('screen1', () => screen1);
  Navigation.registerComponent('screen2', () => screen2);
}
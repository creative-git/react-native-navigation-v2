import { Navigation } from "react-native-navigation";
import { registerScreens } from "./screens";
import { iconsMap, iconsLoaded } from '@assets/icons';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
	iconsLoaded
		.then(() => {
			startApp();
		})
});

function startApp() {
	const sideMenuAppScreens = {
		left: {
			component: {
				id: 'navigation.drawer.left',
				name: 'sideMenu',
			},
		},
		center: {
			bottomTabs: {
				children: [{
					stack: {
						children: [{
							component: {
								name: 'home',
								options: {
									topBar: {
										title: {
											text: 'home'
										},
										leftButtons: [{
											id: 'sideMenu',
											icon: iconsMap["ios-menu"],
											iconColor: '#000',
										}],
									}
								}
							}
						}],
						options: {
							bottomTab: {
								text: 'Home',
								textColor: '#AAA',
								iconColor: '#AAA',
								selectedIconColor: '#666',
								selectedTextColor: '#666',
								icon: iconsMap["ios-home"],
							}
						}
					}
				},
				{
					stack: {
						children: [{
							component: {
								name: 'screen1'
							}
						}],
						options: {
							bottomTab: {
								text: 'Screen 1',
								textColor: '#AAA',
								iconColor: '#AAA',
								selectedIconColor: '#666',
								selectedTextColor: '#666',
								icon: iconsMap["ios-cart"]
							}
						}
					}
				}
				]
			}
		}
	}
	Navigation.setRoot({
		root: {
			sideMenu: sideMenuAppScreens
		}
	});
}


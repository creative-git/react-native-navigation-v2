import Ionicons from 'react-native-vector-icons/Ionicons';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
    'ios-menu': [30],
    'ios-home-outline': [30],
    'ios-home': [30],
    'ios-search': [30],
    'ios-camera-outline': [30],
    'ios-camera': [30],
    'ios-cart-outline': [30],
    'ios-cart': [30],
    'ios-contact-outline': [30],
    'ios-contact': [30],
    'ios-close': [40],
    'ios-list-outline': [30],
    'ios-list': [30],
    'ios-person': [30],
    'ios-person-outline': [30],
    'ios-timer': [30],
    'ios-arrow-back': [30],
    'ios-send': [30],
};
const defaultIconProvider = Ionicons;
const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
    new Promise.all(
        Object.keys(icons).map(iconName => {
            const Provider = icons[iconName][1] || defaultIconProvider; // Ionicons
            const color = icons[iconName][2] || "#000";
            return Provider.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                color
            )
        })
    ).then(sources => {
        Object.keys(icons).forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));
        resolve(true);
    });
});
export {
    iconsMap,
    iconsLoaded
};
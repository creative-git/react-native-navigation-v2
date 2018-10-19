import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class App extends Component {

    constructor(props) {
        super(props);
        // initial state
        this.isClosed = true;
    }

    componentDidMount() {
        console.log(Platform.OS );
        
        Navigation.mergeOptions('navigation.drawer.left', {
            sideMenu: {
                left: {
                    enabled: Platform.OS == "ios" ? false : true,
                }
            }
        });
        this.toggleMenu();
    }

    toggleMenu() {
        //Handle sideMenu toggle
        Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {           
            if (buttonId === 'sideMenu') {
                Navigation.mergeOptions('navigation.drawer.left', {
                    sideMenu: {
                        left: {
                            visible: this.isClosed,
                            enabled: Platform.OS == "ios" ? false : true,
                        }
                    }
                });
            }
            this.isClosed = Platform.OS == "ios" ? !this.isClosed : true
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>side left</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

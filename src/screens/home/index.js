import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class App extends Component {
  /*
    static get options() {
      return {
        topBar: {
          title: {
            text: 'Home'
          },
        }
      };
    }
    */

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React fff s</Text>
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'home',
              }
            });
          }}
          title="View next screen"
        />
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

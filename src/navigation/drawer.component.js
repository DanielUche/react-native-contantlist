import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageStyle: {
    height: 250,
    width: 250,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    overlayColor: 'white',
  },
  buttonContainer: {
    width: 250,
    paddingTop: 70,
    paddingBottom: 10,
  },
  buttonStyle: {
    borderRadius: 50,
    backgroundColor: 'rgb(46,139,87)',
  },
});


class MenuDrawer extends Component {
  popScreen = () => {
    const { componentId } = this.props;
    Navigation.pop(componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Menu
        </Text>
        <Text>
          Menu
        </Text>
        <Text>
          Menu
        </Text>
      </View>
    );
  }
}

export default MenuDrawer;

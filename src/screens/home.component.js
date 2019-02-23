import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet, Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons';
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


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    // Bind the current component to get its' events
    Navigation.events().bindComponent(this);
  }

  popScreen = () => {
    const { componentId } = this.props;
    Navigation.pop(componentId);
  }

  navigationButtonPressed = ({ buttonId }) => {
    if (buttonId !== 'humbuggerMenuButton') {
      return;
    }

    // Use the assigned id here
    Navigation.mergeOptions('menuDrawer', {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to Home Page
        </Text>
        <Text>
          Welcome to Home Page
        </Text>
        <Text>
          Welcome to Home Page
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Button } from 'react-native-elements';

import { gotoSignIn, gotoHome } from '../navigation';

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


class SignInScreen extends Component {
  popScreen = () => {
    const { componentId } = this.props;
    // Navigation.pop(componentId);
    gotoHome();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Sign In screen
        </Text>
        <Text>
          Sign In screen
        </Text>
        <Text>
          Sign In screen woooooooo
        </Text>
        <Button title="Go back home" onPress={this.popScreen} />
      </View>
    );
  }
}

export default SignInScreen;

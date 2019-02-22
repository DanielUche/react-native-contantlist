import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Button,
} from 'react-native-elements';

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

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceName: '',
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.imageStyle}
            source={require('../assets/img/home.png')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title=" Create Account"
            onPress={this.getDeviceName}
            buttonStyle={{ ...styles.buttonStyle, backgroundColor: 'rgb(255,222,173)' }}
          />
          <Button
            title="Sign In"
            onPress={this.getDeviceName}
            buttonStyle={{ ...styles.buttonStyle, marginTop: 20 }}
          />
        </View>
        <Text>
          Terms & Conditions
        </Text>
      </View>
    );
  }
}

export default SignUpScreen;

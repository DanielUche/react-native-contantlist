import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const styles = StyleSheet.create({
  contaioner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceName: '',
    };
  }

  getDeviceName() {
    Alert.alert('you are on' + JSON.stringify(DeviceInfo.getDeviceName()));
  }


  render() {
    return (
      <View style={styles.contaioner}>
        <Text>
          Wo wos wobi
        </Text>
        <Button 
          title="Please Click Me" 
          onPress={this.getDeviceName }
        />
      </View>
    )
  }
}

export default StartScreen;
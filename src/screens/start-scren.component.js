import React, { Component } from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert
} from 'react-native';

const styles = StyleSheet.create({
  contaioner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class StartScreen extends Component {
  render() {
    return (
      <View style={styles.contaioner}>
        <Text>
          Wo wos wobi
        </Text>
        <Button 
          title="Please Click Me" 
          onPress={() => Alert.alert('wobi wos wo')}
        />
      </View>
    )
  }
}

export default StartScreen;
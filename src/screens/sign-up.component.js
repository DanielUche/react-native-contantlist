import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Button,
} from 'react-native-elements';
import { gotoSignIn } from '../navigation';

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

type Props = {
  componentId: string;
}

class SignUpScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // deviceName: '',
    };
  }

  gotoSignIn = () => {
    const { componentId } = this.props;
    gotoSignIn(componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Sign Up screen
        </Text>
        <Button onPress={this.gotoSign} title="Goto Sign Page" />
      </View>
    );
  }
}

export default SignUpScreen;

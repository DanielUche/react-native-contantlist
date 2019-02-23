import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Button,
} from 'react-native-elements';
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

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Sign Up',
        },
      },
    };
  }

  gotoSignIn = () => {
    const { componentId } = this.props;
    gotoSignIn(componentId);
  }

  gotoHome = () => {
    const { componentId } = this.props;
    gotoHome(componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Sign Up screen
        </Text>
        <Button onPress={this.gotoSignIn} title="Goto Sign Page" />
        <Button onPress={this.gotoHome} title="Goto Home/Welcome Page" />
      </View>
    );
  }
}

export default SignUpScreen;

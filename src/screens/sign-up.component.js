import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native';
import {
  Button,
  Input,
  CheckBox,
  SocialIcon,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { gotoSignIn, gotoHome } from '../navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32985f',
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
    width: 300,
    marginTop: 50,
    paddingBottom: 10,
  },
  largeText: {
    // color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonStyle: {
    padding: 10,
    borderWidth: 0,
    borderRadius: 60,
    backgroundColor: 'rgb(46,139,87)',
  },
  buttonTitleStyle: {
    color: 'white',
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

  // static get options() {
  //   return {
  //     topBar: {
  //       title: {
  //         text: 'Sign Up',
  //       },
  //     },
  //   };
  // }

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
        <Text style={styles.largeText}>
          Create Account
        </Text>
        <Input
          placeholderTextColor="#97ddb6"
          placeholder="Username"
          underlineColorAndroid="transparent"
          inputContainerStyle={{
            borderBottomWidth: 0,
            padding: 5,
          }}
          containerStyle={{
            borderColor: 'transparent',
            borderWidth: 1,
            borderRadius: 50,
            backgroundColor: '#267147',
            margin: 10,
            width: 300,
          }}
          inputStyle={{
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 16,
            color: 'white',
          }}
          leftIcon={(
            <Icon
              name={`${Platform.OS === 'ios' ? 'ios-person' : 'md-person'}`}
              size={24}
              color="white"
            />
          )}
        />
        <Input
          placeholderTextColor="#97ddb6"
          textContentType="password"
          secureTextEntry
          placeholder="Password"
          underlineColorAndroid="transparent"
          inputContainerStyle={{
            borderBottomWidth: 0,
            padding: 5,
          }}
          containerStyle={{
            borderColor: 'transparent',
            borderWidth: 1,
            borderRadius: 50,
            backgroundColor: '#267147',
            // margin: 10,
            width: 300,
          }}
          inputStyle={{
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 16,
            color: 'white',
          }}
          leftIcon={(
            <Icon
              name={`${Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}`}
              size={24}
              color="white"
            />
          )}
        />
        <View>
          <CheckBox
            title="Keep Me Logged In"
            checked={false}
            size={16}
            checkedColor="#97ddb6"
            containerStyle={{
              borderWidth: 0,
              backgroundColor: 'transparent',
            }}
            textStyle={{
              color: '#97ddb6',
              fontSize: 12,
            }}
          />
        </View>
        <View style={{ ...styles.buttonContainer }}>
          <Button
            title=" Create Account"
            onPress={this.gotoSignUp}
            buttonStyle={{ ...styles.buttonStyle, backgroundColor: '#ffa725' }}
          />
        </View>
      </View>
    );
  }
}

export default SignUpScreen;

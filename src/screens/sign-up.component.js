import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import {
  Button,
  Input,
  CheckBox,
} from 'react-native-elements';
import { gotoHome } from '../navigation';
import { auth } from '../store/actions/auth.action';

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
  signUp: Function;
  loading: boolean;
  error: string;
}

class SignUpScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      controls: {
        email: '',
        password: '',
      },
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

  gotoSignUp = () => {
    const { controls } = this.state;
    const { email, password } = controls;
    const { signUp } = this.props;
    if (email.length && password.length) {
      signUp(controls, 'register');
    }
  }

  onInputChanged = (key, value) => {
    this.setState(prevState => ({
      ...prevState,
      controls: {
        ...prevState.controls,
        [key]: value,
      },
    }));
  }

  gotoHome = () => {
    const { componentId } = this.props;
    gotoHome(componentId);
  }

  render() {
    const { loading, error } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>
          Create Account
        </Text>
        {
          error && !loading ? (
            <Text>
              { error }
            </Text>
          ) : null
        }
        <Input
          onChangeText={val => this.onInputChanged('email', val)}
          placeholderTextColor="#97ddb6"
          placeholder="E-Mail"
          autoCapitalize="none"
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
          onChangeText={val => this.onInputChanged('password', val)}
          placeholderTextColor="#97ddb6"
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
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
            loading={loading}
            title=" Create Account"
            onPress={() => this.gotoSignUp()}
            buttonStyle={{ ...styles.buttonStyle, backgroundColor: '#ffa725' }}
          />
        </View>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.Auth.loading,
  success: state.Auth.success,
  error: state.Auth.error,
});

export const mapDispatchToProps = () => dispatch => bindActionCreators(
  { signUp: auth }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);

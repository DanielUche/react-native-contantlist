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
import { getTodos } from '../store/actions/todos.action';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#32985f',
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
  getUserTodos: Function;
  loading: boolean;
  error: string;
  todos: [];
}

class HomeScreen extends Component<Props> {
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

  componentDidMount() {
    const { getUserTodos } = this.props;
    getUserTodos();
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
    const { loading, error, todos } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          lsjdljls;d
        </Text>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.Todo.loading,
  todos: state.Todo.todos,
  error: state.Todo.error,
});

export const mapDispatchToProps = () => dispatch => bindActionCreators(
  { getUserTodos: getTodos }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

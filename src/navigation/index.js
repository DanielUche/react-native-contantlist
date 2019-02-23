/* eslint-disable quotes */
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export const gotoSignUp = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'SignUpScreen',
      children: [{
        component: {
          name: 'contactlist.SignUpScreen',
        },
      }],
    },
  },
});

export const gotoSignIn = id => Navigation.push(id, {
  component: {
    name: 'contactlist.SignInScreen',
    passProps: {
      text: 'Pushed screen: SignInScreen',
    },
    options: {
      topBar: {
        title: {
          text: 'Pushed screen title',
        },
      },
    },
  },
});

const menuOptions = () => Promise.all([
  Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30),
]).then(icons => Promise.resolve({
  topBar: {
    leftButtons: [{
      id: 'humbuggerMenuButton',
      icon: icons[0],
    }],
    drawBehind: false,
    animate: true,
  },
  sideMenu: {
    left: {
      width: 200,
    },
  },
  overlay: {
    interceptTouchOutside: true,
  },
  // 'parallax', 'door', 'slide', or 'slide-and-scale'
  animationType: 'slide-and-scale',
  openGestureMode: 'bezel',
}));

export const gotoHome = async () => {
  // const status = await Navigation.constants().statusBarHeight;
  // console.log(status);
  menuOptions().then((options) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              id: 'menuDrawer',
              name: 'contactlist.MenuDrawer',
            },
          },
          center: {
            stack: {
              children: [{
                component: {
                  name: 'contactlist.HomeScreen',
                  options,
                },
              }],
            },
          },
        },
      },
    });
  });
};

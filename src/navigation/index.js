/* eslint-disable quotes */
import { Navigation } from 'react-native-navigation';

export const gotoSignUp = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'SignUpScreen',
      children: [{
        component: {
          name: "contactlist.SignUpScreen",
        },
      }],
    },
  },
});

export const gotoSignIn = id => Navigation.push(id, {
  component: {
    name: "contactlist.SignInScreen",
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

export const gotoHome = () => Navigation.setRoot({
  root: {
    sideMenu: {
      left: {
        component: {
          name: "contactlist.MenuDrawer",
        },
      },
      center: {
        stack: {
          options: {},
          children: [{
            component: {
              name: "contactlist.HomeScreen",
            },
          }],
        },
      },
    },
  },
});

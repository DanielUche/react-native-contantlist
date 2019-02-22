/* eslint-disable quotes */
import { Navigation } from 'react-native-navigation';

export const gotoSignUp = (id) => {
  alert(id);
  Navigation.setRoot({
    root: {
      component: {
        name: "contactlist.SignUpScreen",
      },
    },
  });
};

export const gotoSignIn = (id) => {
  alert(id);
  Navigation.push(id, {
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
};

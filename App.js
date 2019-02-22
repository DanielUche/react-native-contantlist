/* eslint-disable quotes */
import { Navigation } from 'react-native-navigation';
import StartScreen from './src/screens/start-scren.component';
import SignUpScreen from './src/screens/sign-up.component';
import SignInScreen from './src/screens/sign-in.component';

const registerComponents = () => {
  Navigation.registerComponent("contactlist.StartScreen", () => StartScreen);
  Navigation.registerComponent("contactlist.SignUpScreen", () => SignUpScreen);
  Navigation.registerComponent("contactlist.SignInScreen", () => SignInScreen);
};

registerComponents();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "contactlist.StartScreen",
      },
    },
  });
});

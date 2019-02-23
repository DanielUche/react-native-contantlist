/* eslint-disable quotes */
import { Navigation } from 'react-native-navigation';
import StartScreen from './src/screens/start-screen.component';
import SignUpScreen from './src/screens/sign-up.component';
import SignInScreen from './src/screens/sign-in.component';
import HomeScreen from './src/screens/home.component';
import MenuDrawer from './src/navigation/drawer.component';

const registerComponents = () => {
  Navigation.registerComponent("contactlist.StartScreen", () => StartScreen);
  Navigation.registerComponent("contactlist.SignUpScreen", () => SignUpScreen);
  Navigation.registerComponent("contactlist.SignInScreen", () => SignInScreen);
  Navigation.registerComponent("contactlist.HomeScreen", () => HomeScreen);
  Navigation.registerComponent("contactlist.MenuDrawer", () => MenuDrawer);
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

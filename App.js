import { Navigation } from 'react-native-navigation';
import StartScreen from './src/screens/start-scren.component';

const registerComponents = () => {
  Navigation.registerComponent("contactlist.StartScreen", () => StartScreen);
};

registerComponents();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "contactlist.StartScreen"
      }
    }
  });
});


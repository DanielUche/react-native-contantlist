import React from 'react';
import { Navigation } from 'react-native-navigation';
import StartScreen from './src/screens/start-screen.component';
import SignUpScreen from './src/screens/sign-up.component';
import SignInScreen from './src/screens/sign-in.component';
import HomeScreen from './src/screens/home.component';
import MenuDrawer from './src/navigation/drawer.component';
import AppStoreProvider from './src/store/provider-wrapper.component';


function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <AppStoreProvider>
        <Component
          {...props}
        />
      </AppStoreProvider>
    );

    return <EnhancedComponent />;
  };
}


const registerComponents = () => {
  Navigation.registerComponent('contactlist.StartScreen', () => WrappedComponent(StartScreen));
  Navigation.registerComponent('contactlist.SignUpScreen', () => WrappedComponent(SignUpScreen));
  Navigation.registerComponent('contactlist.SignInScreen', () => WrappedComponent(SignInScreen));
  Navigation.registerComponent('contactlist.HomeScreen', () => WrappedComponent(HomeScreen));
  Navigation.registerComponent('contactlist.MenuDrawer', () => WrappedComponent(MenuDrawer));
};

registerComponents();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'contactlist.StartScreen',
      },
    },
  });
});

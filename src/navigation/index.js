/* eslint-disable quotes */
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { APP_PAGES } from '../../constant';


export const gotoSignUp = () => Navigation.setRoot({
  root: {
    component: {
      name: APP_PAGES.sign_up.name,
    },
  },
});

export const startPage = () => Navigation.setRoot({
  root: {
    component: {
      name: APP_PAGES.start.name,
    },
  },
});

export const gotoSignIn = () => Navigation.setRoot({
  root: {
    component: {
      name: APP_PAGES.sign_in.name,
    },
  },
});

const menuOptions = text => Promise.all([
  Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30),
]).then(icons => Promise.resolve({
  layout: {
    orientation: ['portrait', 'landscape'], // An array of supported orientations
  },
  topBar: {
    leftButtons: [{
      id: 'humbuggerMenuButton',
      icon: icons[0],
      color: 'white',
    }],
    hideOnScroll: false,
    noBorder: true,
    visible: true,
    drawBehind: true,
    buttonColor: 'white',
    backButton: {
      title: 'Back', // ios only
      showTitle: false, // ios only
      color: 'red',
    },
    // borderHeight: 1.3, // android only
    elevation: 1.5, // TopBar elevation in dp android only
    // topMargin: 24, // top margin in dp android only
    background: {
      color: 'rgb(46,139,87)',
      translucent: false, // ios only
      blur: false, // ios only
    },
    title: {
      color: 'white',
      text,
      fontFamily: 'Helvetica',
    },
  },
  sideMenu: {
    left: {
      width: 300,
      // shouldStretchDrawer: false,
      // animationVelocity: 2500, //default is 840
    },
    animationType: 'slide-and-scale', // defaults to none if not provided, options are 'parallax', 'door', 'slide', or 'slide-and-scale'
    openGestureMode: 'entireScreen',
  },
  overlay: {
    interceptTouchOutside: true,
  },
  popGesture: true,
}));

export const gotoHome = async () => {
  menuOptions('Home').then((options) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            visible: true,
            enabled: true,
            component: {
              id: APP_PAGES.menu.id,
              name: APP_PAGES.menu.name,
            },
          },
          center: {
            stack: {
              children: [{
                component: {
                  name: APP_PAGES.home.name,
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

Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
  switch (buttonId) {
    case 'humbuggerMenuButton':
      Navigation.mergeOptions(APP_PAGES.menu.id, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
      break;

    default:
      break;
  }
});

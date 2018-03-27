import React from 'react';
import { Platform, StatusBar, StyleSheet, View, TouchableOpacity, Text, Icon } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { isSignedIn, onSignOut } from "./components/auth";
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';
import SingleAppointmentScreen from './screens/SingleAppointmentScreen';
import {
  StackNavigator,
  DrawerNavigator,
  SwitchNavigator,
} from 'react-navigation';
import { Header } from "react-native-elements";
import HomeScreen from './screens/HomeScreen';
const headerBar = (navigation) => {
  return(
    <View>
      <Header
      Style = {{
        backgroundColor : "rgba(92, 99,216, 1)",
      }}
      leftComponent={
        { icon: 'menu', color: '#fff', onPress: () => navigation.navigate('DrawerToggle')  }}
      centerComponent={{ image: require('./assets/images/oldtimes_logo.png') }}
      rightComponent={{ icon: 'settings', color: '#fff', onPress: () => onSignOut().then(navigation.navigate('Auth'))}}
      />
    </View>
  );
};


const HomeScreenStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'HomeScreen',
      headerMode: 'screen',
      drawerLabel: 'HomeScreen',
      header: ( headerBar(navigation)),
    }),
  }
);
const AddScreenStack = StackNavigator(
  {
    AddScreen: {
      screen: AddScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      
      initialRouteName: 'AddScreen',
      headerMode: 'screen',
      drawerLabel: 'AddAppointment',
      header: ( headerBar(navigation)),
    }),
  }
);
const SingleAppointmentScreenStack = StackNavigator(
  {
    SingleAppointmentScreen: {
      screen: SingleAppointmentScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      
      initialRouteName: 'SingleAppointmentScreen',
      headerMode: 'screen',
      drawerLabel: 'SingleAppointmentScreen',
      header: ( headerBar(navigation)),
    }),
  }
);
const AppointmentscreenStack = StackNavigator(
  {
    AppointmentScreen: {
      screen: AppointmentScreen,
    },
    AddScreen: {
      screen: AddScreenStack,
    },
    SingleAppointmentScreen: {
      screen: SingleAppointmentScreen,
    }

  },
  {
    navigationOptions: ({ navigation }) => ({
      
      initialRouteName: 'AppointmentScreen',
      headerMode: 'screen',
      drawerLabel: 'AppointmentScreen',
      header: ( headerBar(navigation, 'Appointments')),
    }),
  }
);



const AppStack = DrawerNavigator(
  {
    Home: {
      screen: HomeScreenStack,
    },
    Appointment: {
      screen: AppointmentscreenStack,
    },
    Add: {
      screen: AddScreenStack,
    },
    single: {
      screen: SingleAppointmentScreenStack,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
);
const AuthStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    },
  },
  {
  initialRouteName: 'Login',
  }
);


const AuthCheck = SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);


export default class App extends React.Component {
  render() {

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
  
    
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {

    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {

        return <AuthCheck />;
  }
}

  // _loadResourcesAsync = async () => {
  //   return Promise.all([
  //     Asset.loadAsync([
  //       require('./assets/images/robot-dev.png'),
  //       require('./assets/images/robot-prod.png'),
  //     ]),
  //     Font.loadAsync({
  //       // This is the font that we are using for our tab bar
  //       ...Ionicons.font,
  //       // We include SpaceMono because we use it in HomeScreen.js. Feel free
  //       // to remove this if you are not using it in your app
  //       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  //     }),
  //   ]);
  // };

  // _handleLoadingError = error => {
  //   // In this case, you might want to report the error to your error
  //   // reporting service, for example Sentry
  //   console.warn(error);
  // };

  // _handleFinishLoading = () => {
  //   this.setState({ isLoadingComplete: true });
  // };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

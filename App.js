import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { isSignedIn } from "./components/auth";
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import AddScreen from './screens/AddScreen';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    },
    AppointmentScreen: {
      screen: AppointmentScreen,
    },
    AddScreen: {
      screen: AddScreen,
    },
  },
  {
    initialRouteName: 'Login',
  }
);


export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
    signedIn: false,
    checkedSignIn: false
  };


  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert(err));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    console.log(checkedSignIn);    
    
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {

    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
        return <RootStack />;
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

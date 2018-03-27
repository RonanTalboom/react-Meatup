import React, {Component} from 'react';
// import { login } from '../assets/css/login.css';
import { onSignIn, USER_KEY } from '../components/auth.js';

import { OnSignIn } from "../components/auth";
import { 
    View, 
    StyleSheet,
    Card,
    ScrollView,
    TextInput, 
    Image,
    Button,
    Form,
    FormControl,
    InputField,
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
} from 'react-native';
export default class AddScreen extends Component {
  static navigationOptions = {
    title: 'Add',
  };
  constructor(props) {
    super(props);
    this._bootstrapAsync();

    this.state = {
      Username: null,
      password: null
    };
  }
  _bootstrapAsync = async () => {
    const USER_KEY = await AsyncStorage.getItem('USER_KEY');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(USER_KEY ? 'App' : 'Auth');
  };

  
  render() {
    return (
        <View style={styles.container}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    );
  }
}


const styles = StyleSheet.create({
   login: {
       margin: 20,
       padding: 20,
    }
  });

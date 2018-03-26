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
} from 'react-native';
export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);

    this.state = {
      Username: null,
      password: null
    };
  }

  
  render() {
    return (
        <View >
            <TextInput
                ref='Username' 
                label='Username' 
                placeholder='Username'
                style={styles.login}
                onChangeText={(Username) => this.setState({ Username: Username})}
                />
    
            <TextInput
                ref='password'
                label='password'
                placeholder='password'
                onChangeText={(password) => this.setState({ password: password})}
                />



            <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#FFF"
                title="SIGN IN"
                onPress={() => {
                    //change the user_KEY
                    let USER_KEY = this.state
                    onSignIn(USER_KEY).then (
                        this.props.navigation.navigate('Home')
                    )
                    
                }}
            />
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

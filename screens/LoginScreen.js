import React, {Component} from 'react';
// import { login } from '../assets/css/login.css';
import { onSignIn, USER_KEY } from '../components/auth.js';

import { OnSignIn } from "../components/auth";
import { 
    View, 
    StyleSheet,
    ScrollView,
    TextInput, 
    Image,
    Form,
    FormControl,
    InputField,
    TouchableHighlight,
    Text,
    MenuButton,
} from 'react-native';
import { Card, Button } from "react-native-elements";
export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    state = {
        Username: null,
        password: null
    };

    onPress(){
        let USER_KEY = this.state;
        onSignIn(USER_KEY).then (
            this.props.navigation.navigate('Home')
        )
    }
  
  render() {
    return (
        <View
            style={styles.login_view}
        >
            <View
                style={styles.login_box}
            >
            <View style={styles.login_logo} >
                <Image
                    style={styles.login_image}
                    source={require('../assets/images/oldtimes_logo.png')}
                />
            </View>
                <TextInput
                    underlineColorAndroid='transparent'
                    ref='Username' 
                    label='Username' 
                    placeholder='Username'
                    style={styles.login_input}
                    onChangeText={(Username) => this.setState({ Username: Username})}
                    />
        
                <TextInput
                    underlineColorAndroid='transparent'
                    ref='password'
                    label='password'
                    placeholder='password'
                    style={styles.login_input}
                    onChangeText={(password) => this.setState({ password: password})}
                    />

                <TouchableHighlight
                    style={styles.login_button}
                    onPress={() => {
                        let USER_KEY = this.state;
                        onSignIn(USER_KEY).then (
                            this.props.navigation.navigate('App')
                        ) 
                    }}
                >
                    <Text style={styles.login_text_white} > LOGIN </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.login_register}
                    onPress={() => {
                       
                    }}
                >
                    <Text style={styles.login_text_register} > Create New User </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
   login: {
       margin: 20,
       padding: 20,
    },
    login_image:{
        width: 200,
        height: 220,
        resizeMode: 'contain'
    },
    login_logo:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    login_text_register: {
        marginTop: 20,
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
    },
    login_text_white: {
        color: 'white',
    },
    login_text:{
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        fontWeight: '200',
        marginBottom: 60, 
    },
    login_input: {
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        paddingLeft: 30,
        fontSize: 9,
        marginBottom: 10, 
        borderColor: '#ffffff',
        borderWidth: 1,
        borderBottomWidth: 0,
    },
    login_box: {
        opacity: 1,
        padding: 60,
        marginTop: 30,
    },
    login_view: {
        backgroundColor : "rgba(92, 99,216, 1)",
        alignContent: 'center',
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    login_button:{
        marginTop: 20,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#51CFB1',
        borderRadius: 30,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderBottomWidth: 0,
    }

  });

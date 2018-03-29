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
import DatePicker from 'react-native-datepicker'


export default class AddScreen extends Component {

    constructor(props){
        super(props)
        // const time = Date.parse(new Date());
        this.state = {
            datetime: '',
            date:'',
            Starttime: '',
            EndTime: '',
        }
      }
    

  
  render() {
    return (
        <View style={styles.margin_top}>
            <TextInput
                    underlineColorAndroid='transparent'
                    ref='Username' 
                    label='Username' 
                    placeholder='Activity'
                    style={styles.login_input}
                    onChangeText={(Username) => this.setState({ Username: Username})}
                    />
            <TextInput
                    underlineColorAndroid='transparent'
                    ref='Username' 
                    label='Username' 
                    placeholder='Location'
                    style={styles.login_input}
                    onChangeText={(Username) => this.setState({ Username: Username})}
                    />
            <DatePicker
                    style={{width: 200}}
                    date={this.state.Starttime}
                    mode="datetime"
                    format="YYYY-MM-DD HH:mm"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    onDateChange={(datetime) => {this.setState({Starttime: datetime});}}
            />
            <DatePicker
                    style={{width: 200}}
                    date={this.state.Endtime}
                    mode="datetime"
                    format="YYYY-MM-DD HH:mm"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    onDateChange={(datetime) => {this.setState({EndTime: datetime});}}
            />
            <TextInput
                    underlineColorAndroid='transparent'
                    ref='Username' 
                    label='Username' 
                    placeholder='EndTime'
                    style={styles.login_input}
                    onChangeText={(Username) => this.setState({ Username: Username})}
                    />
        

                <TouchableHighlight
                    style={styles.login_button}
                    onPress={() => {
                        console.alert('user added')
                    }}
                >
                    <Text style={styles.login_text_white} > ADD </Text>
                </TouchableHighlight>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    margin_top: {
        marginTop: 20,
    },
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
 

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TouchableHighlight,
  Icon,
} from 'react-native';
import {
  DrawerNavigator,
} from 'react-navigation';
import { WebBrowser } from 'expo';
import AppointmentScreen from './AppointmentScreen';
import {
  NavigationAction,
} from 'react-navigation';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
         <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#FFF"
                title="Appointment"
                onPress={() => {
                  this.props.navigation.navigate('Appointment') 
                }}
            />
             <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#FFF"
                title="menu"
                onPress={() => {
                  this.props.navigation.navigate('DrawerToggle');
                    
                }}
            />
      </View>
    );
  }


  // _handleHelpPress = () => {
  //   WebBrowser.openBrowserAsync(
  //     'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
  //   );
  // };
}

const styles = StyleSheet.create({

});

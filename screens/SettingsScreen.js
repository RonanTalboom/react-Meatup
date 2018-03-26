import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    // try {
    //   const value = await AsyncStorage.getItem(USER_KEY);
    //   if (value !== null){
    //     // We have data!!
       

    //   }
    // } catch (error) {
    //   // Error retrieving data
    // }

    return <ExpoConfigView />;
  }
}

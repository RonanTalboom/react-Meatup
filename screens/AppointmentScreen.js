import React, {Component} from 'react';
// import { login } from '../assets/css/login.css';
import { onSignIn, USER_KEY } from '../components/auth.js';
import { getAppointment } from "../components/AppointmentLogic";
import { OnSignIn } from "../components/auth";
import { List, ListItem, SearchBar, Icon, Button } from "react-native-elements";
import { 
    View, 
    StyleSheet,
    Card,
    ScrollView,
    TextInput, 
    Image,
    Form,
    FormControl,
    InputField,
    ListView,
    Text,
    SectionList,
    FlatList,
    // List,
    // ListItem, 
    // SearchBar, 
} from 'react-native';

export default class AppointmentScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Appointment',
        title: 'Appointment',
    };
    constructor() {
        super();
        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
            text: "",
          };
      }

    componentDidMount() {
        this.makeRemoteRequest();
    };
    makeRemoteRequest = () => {
        const url = "";
        // this.setState({ loading: true });
        
        // fetch(url)
        // .then(res => res.json())
        // .then(res => {
        //   this.setState({
        //     data: page === 1 ? res.results : [...this.state.data, ...res.results],
        //     error: res.error || null,
        //     loading: false,
        //     refreshing: false
        //   });
        // })
        // .catch(error => {
        //   this.setState({ error, loading: false });
        // });
        this.setState({
            data: getAppointment(),
            filterdata: getAppointment()
        });
    
    };
    renderSeparator = () => {
    return (
        <View
        style={{
            height: 1,
            width: "86%",
            backgroundColor: "#CED0CE",
            marginLeft: "14%"
        }}
        />
    );
    };
    handleRefresh = () => {
    this.setState(
        {
        refreshing: true
        },
        () => {
        this.makeRemoteRequest();
        }
    );
    };
    filterSearch(text){
        let data = this.state.data;
        console.log(text)
        const newData = text ? data.filter(item => {
          return item.Activity.indexOf(text) > -1;
        }) : data;
        this.setState({
            filterdata: newData,
            text: text
        })

    }

    renderHeader = () => {
        return <SearchBar 
        placeholder="Type Here..." 
        lightTheme round 
        onChangeText={(text => this.filterSearch(text)) }
        />;
    };
    goToOtherScreen() {
        this.props.navigation.navigate('SingleAppointmentScreen');
    }
  
    render() {
        return (
            <View>
                <View style={styles.appointemnt_maps} >
                </View>    
                                <Button
                    title="Add Apointment"
                    plus
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={{
                        backgroundColor: "green",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                    containerStyle={{ marginTop: 20 }}
                    onPress = {() =>{
                        this.goToOtherScreen()
                    }}
                    />
                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                    <FlatList
                        data={this.state.filterdata}
                        renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={item.Activity}
                            subtitle={item.Location}
                            containerStyle={{ borderBottomWidth: 0 }}
                            onPress = {() => {
                                console.log('click');
                                this.goToOtherScreen(item)
                            }}
                        />
                        )}
                        keyExtractor={item => item.ID}
                        ItemSeparatorComponent={this.renderSeparator}
                        ListHeaderComponent={this.renderHeader}
                        onRefresh={this.handleRefresh}
                        refreshing={this.state.refreshing}
                    />
                </List>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    appointemnt_maps: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    appointment_image:{
        width: 400,
        height: 240,
        resizeMode: 'contain',
    },
  });

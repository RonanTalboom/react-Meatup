import React, {Component} from 'react';
// import { login } from '../assets/css/login.css';
import { onSignIn, USER_KEY } from '../components/auth.js';
import { getAppointment } from "../components/AppointmentLogic";
import { OnSignIn } from "../components/auth";
import { List, ListItem, SearchBar } from "react-native-elements";
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
    ListView,
    Text,
    FlatList,
    // List,
    // ListItem, 
    // SearchBar, 
} from 'react-native';

export default class AppointmentScreen extends Component {
    static navigationOptions = {
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
        // if (text === ""){
        //     newData = data;
        // }
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
  
    render() {
        return (
            <View>
                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                    <FlatList
                        data={this.state.filterdata}
                        renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={item.Activity}
                            subtitle={item.Location}
                            containerStyle={{ borderBottomWidth: 0 }}
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

  });

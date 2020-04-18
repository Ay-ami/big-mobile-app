import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'

export default class App extends React.Component {

    state = {
        username: '', 
        password: '',
        data: ''
     }
     handleUsername = (text) => {
        this.setState({ username: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     login = (data, password) => {
        alert('username: ' + data + ' password: ' + password)
     }
  
     componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
              data: responseJson
           })
        })
        .catch((error) => {
           console.error(error);
        });
     }
   

  render() {
    return (
        <View style = {{flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', flex: 1, padding: 20}}>
            <Text style = {{flex: 1, fontSize: 40, justifyContent: 'center'}}> 
                  Login screen 
            </Text>
            <Text>
               {this.state.data.body}
            </Text>
            <Image
                    style={{flex: 3}}
                    source={require('../assets/test.gif')}
            />
           <TextInput style = {{
                margin: 15,
                height: 40,
                width: 300,
                //flex: 1,
                borderColor: '#7a42f4',
                borderWidth: 1
             }}
              underlineColorAndroid = "transparent"
              placeholder = "Username"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              onChangeText = {this.handleUsername}/>
           
           <TextInput secureTextEntry={true} style = {{
                margin: 15,
                height: 40,
                width: 300,
                //flex: 1,
                borderColor: '#7a42f4',
                borderWidth: 1
             }}
              underlineColorAndroid = "transparent"
              placeholder = "Password"
              placeholderTextColor = "#9a73ef"
              autoCapitalize = "none"
              onChangeText = {this.handlePassword}/>
           
           <TouchableOpacity
              style = {{
                backgroundColor: '#7a42f4',
                padding: 10,
                margin: 15,
                height: 40,
                width: 300,
                //flex: 1
             }}
              onPress = {
                 () => this.login(this.state.data.body, this.state.password)
              }>
              <Text style = {{color: 'white' }}> Submit </Text>
           </TouchableOpacity>
        </View>
     )

      
  }

  

  
}

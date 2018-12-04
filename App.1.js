/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, StyleSheet,
  Input, TextInput, Image, ImageBackground, View, TouchableOpacity, Text
} from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";
import wallpaper from './images/wallpaper.png'
import { Icon, InputGroup } from 'native-base'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends Component {

  static navigationOptions =
    {
      title: 'HomeScreen',
    };

  render() {

    return (

      <View style={styles.MainContainer}>

        <Text style={styles.text}>This is Home Screen Activity.</Text>

        {/* <Button onPress = { this.gotoNextActivity } title = 'Open Second Activity'/> */}

      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Login: App,
    Home: HomeScreen
  },
  {
    initialRouteName: "Login"
  }
);
export default createAppContainer(RootStack);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  gotoNextActivity = () => {
    this.props.navigation.navigate('Home');
  }
  onPressButton = () => {
    alert('Email  : ' + this.state.email + "\n" + 'Password : ' + this.state.password);
  }

  render() {
    let imageuri = { uri: 'https://reactjs.org/logo-og.png' };
    return (
      <View style={styles.container}>
        <ImageBackground source={wallpaper} style={styles.container}>
          <View  >
            <Image source={imageuri} style={styles.image}></Image>
          </View>

          <View  >
            <InputGroup>
              <Icon name='person' style={styles.inlineImg}></Icon>
              {/* <Image source={username} style={styles.inlineImg} /> */}
              <TextInput
                style={styles.email}
                placeholder="Email"
                onChangeText={(email) => this.setState({ email })}
              ></TextInput>
            </InputGroup>
            <Text>{this.state.email}</Text>
          </View>
          <View  >
            <InputGroup>
              <Icon name='password' style={styles.inlineImg}></Icon>
              {/* <Image source={password} style={styles.inlineImg} /> */}
              <TextInput
                style={styles.pass}
                secureTextEntry
                placeholder="Password"

                onChangeText={(password) => this.setState({ password })}
              ></TextInput>
            </InputGroup>
            <Text>{this.state.password}</Text>
          </View>
          <View  >
            <TouchableOpacity style={styles.button} onPress={this.gotoNextActivity} >
              <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Login</Text>
            </TouchableOpacity>
          </View >
        </ImageBackground>
      </View >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  image: {
    width: 100,
    borderRadius: 50,
    marginBottom: 50,
    alignSelf: 'center',
    height: 100
  },
  email: {
    width: 400,
    borderRadius: 20,
    paddingRight: 50,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    height: 40,
  },
  pass: {
    width: 400,
    borderRadius: 20,
    paddingRight: 50,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    height: 40,
  },
  button: {
    marginBottom: 10,
    width: 260,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#F035E0',
    borderRadius: 20,
    zIndex: 100,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 25,
    height: 25,
    right: 15,
    top: 15,
  },
  MainContainer: {

    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
    padding: 11

  },

  text:
  {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10
  },
});

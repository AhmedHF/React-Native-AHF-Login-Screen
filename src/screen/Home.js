/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {

    static navigationOptions =
        {
            title: 'HomeScreen',
        };

    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.MainContainer}>

                <Text style={styles.text}>This is Home Screen Activity.</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigate('details')}  >
                    <Text>Open Details Activity</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5fcff',
        padding: 11
    },
    text: {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10
    },
    button: {
        marginBottom: 10,
        width: 260,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#F035E0',
        borderRadius: 20,
        zIndex: 100,
      },
});

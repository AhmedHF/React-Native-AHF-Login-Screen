/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Details extends Component {

    static navigationOptions =
        {
            title: 'DetailsScreen',
        };

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.text}>This is Detalils Screen Activity.</Text>
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
});

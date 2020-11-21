import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default class BicepCurl extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render(props) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ marginBottom: 10, margin: 24, fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Dumbbell Bicep Curl</Text>
                <Button
                    style={{ marginBottom: 10 }}
                    title="Add a rep"
                    onPress={() => { this.setState({ counter: this.state.counter + 1 }); }}
                />
                <Button
                    style={{ marginBottom: 10 }}
                    title="Reset"
                    onPress={() => { this.setState({ counter: this.state.counter = 0 }); }}
                />
                <Text style={{ marginBottom: 20 }}>Reps: {this.state.counter}</Text>
                <Button
                    title="Back to home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }

}
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default class OnTheRoad extends Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render(props) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ marginBottom: 10, margin: 24, fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>On The Road by Jack Kerouac</Text>
                <Image style={{ width: 277, height: 457, marginBottom: 10 }} source={require('../../img/OnTheRoad.jpg')} />
                <Button
                    style={{ marginBottom: 10 }}
                    title="Add To Cart"
                    onPress={this.toggle}
                />
                {this.state.on && <Text style={{ marginBottom: 10 }}>Added to cart!</Text>}
                <Button
                    style={{ marginBottom: 10 }}
                    title="Back to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}
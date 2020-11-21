import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginBottom: 10, margin: 24, fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Home</Text>
            <Button
                style={{ marginBottom: 10 }}
                title="Barbell Bench Press"
                onPress={() => props.navigation.navigate('BarbellBenchPress')}
            />
            <Button
                title="Dumbbell Bicep Curl"
                onPress={() => props.navigation.navigate('DumbbellBicepCurl')}
            />
        </View>
    );
}

export default Home;
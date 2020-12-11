import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Home = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginBottom: 10, margin: 24, fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Classic Book Store</Text>
            <Button
                style={{ marginBottom: 10 }}
                title="The Sun Also Rises by Ernest Hemingway"
                onPress={() => props.navigation.navigate('TheSunAlsoRises')}
            />
            <Button
                style={{ marginBottom: 10 }}
                title="On The Road by Jack Kerouac"
                onPress={() => props.navigation.navigate('OnTheRoad')}
            />
            <Button
                style={{ marginBottom: 10 }}
                title="Catch-22 by Joseph Heller"
                onPress={() => props.navigation.navigate('Catch22')}
            />
            <Button
                style={{ marginBottom: 10 }}
                title="The Catcher In The Rye by J.D. Salinger"
                onPress={() => props.navigation.navigate('CatcherInTheRye')}
            />
            <Button
                style={{ marginBottom: 10 }}
                title="Brave New World by Aldous Huxley"
                onPress={() => props.navigation.navigate('BraveNewWorld')}
            />
            <Button
                style={{
                    elevation: 8,
                    backgroundColor: "#009688",
                    borderRadius: 10,
                    paddingVertical: 10,
                    paddingHorizontal: 12,
                    marginBottom: 10,
                }}
                title="Slaughter House Five by Kurt Vonnegut"
                onPress={() => props.navigation.navigate('SlaughterHouseFive')}
            />
        </View>
    );
}

export default Home;
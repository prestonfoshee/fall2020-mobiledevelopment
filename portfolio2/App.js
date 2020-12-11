import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import TheSunAlsoRises from './components/TheSunAlsoRises';
import OnTheRoad from './components/OnTheRoad';
import Catch22 from './components/Catch22';
import CatcherInTheRye from './components/CatcherInTheRye';
import BraveNewWorld from './components/BraveNewWorld';
import SlaughterHouseFive from './components/SlaughterHouseFive';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="TheSunAlsoRises" component={TheSunAlsoRises} />
        <Drawer.Screen name="OnTheRoad" component={OnTheRoad} />
        <Drawer.Screen name="Catch22" component={Catch22} />
        <Drawer.Screen name="CatcherInTheRye" component={CatcherInTheRye} />
        <Drawer.Screen name="BraveNewWorld" component={BraveNewWorld} />
        <Drawer.Screen name="SlaughterHouseFive" component={SlaughterHouseFive} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import DwayneJohnson from './components/DwayneJohnson';
import KanyeWest from './components/KanyeWest';
import OprahWinfrey from './components/OprahWinfrey';

export default function App() {
  return (
    <View style={styles.container}>
      <DwayneJohnson styles={styles} />
      <KanyeWest styles={styles} />
      <OprahWinfrey styles={styles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Preston Foshee</Card.Title>
        <Text>Steak</Text>
        <Card.Divider />
        <Text>Eggs</Text>
        <Card.Divider />
        <Button title="SUBMIT"></Button>
      </Card>
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
});

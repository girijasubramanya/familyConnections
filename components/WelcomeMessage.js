// WelcomeMessage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeMessage({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to FamilyConnections!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ADD8E6', // Set your desired background color
  },
  text: {
    fontSize: 20,
    color:'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '25%', // Adjust the margin to bring the message down
  },
});

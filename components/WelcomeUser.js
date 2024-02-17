// WelcomeUser.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeUser ({ route }) {
  const { fullName, familyNickname } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hello {fullName} ({familyNickname})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

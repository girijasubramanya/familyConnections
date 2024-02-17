// App.js
import "react-native-gesture-handler";
import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeMessage from './components/WelcomeMessage'; 
import RegisterUser from './components/RegisterUser';
import WelcomeUser from './components/WelcomeUser';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.appContainer}>
      <WelcomeMessage/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RegisterUser">
          <Stack.Screen name="Please Register!" component={RegisterUser} />
          <Stack.Screen name="WelcomeUser" component={WelcomeUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 55,
    backgroundColor: '#ADD8E6'
  }

})

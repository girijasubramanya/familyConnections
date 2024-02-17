import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

//import auth from '@react-native-firebase/auth'

export default function RegisterUser ({ navigation, route}) {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [familyNickname, setFamilyNickname] = useState('');

  const handleRegistration = () => {
    // Check if all fields are filled
    if (!phoneNumber || !fullName || !familyNickname) {
      Alert.alert('Please fill in all fields');
    } else {
      // Display the entered values
      Alert.alert(
        'Registration Successful again!',
        `Phone Number: ${phoneNumber}\nFull Name: ${fullName}\nFamily Nickname: ${familyNickname}`
      );
      // Navigate to the WelcomeUser page and pass user input as parameters
        navigation.navigate('WelcomeUser', {
          fullName: fullName,
          familyNickname: familyNickname
          //familyNickname: familyNickname,
        }
      );

    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        onChangeText={(text) => setPhoneNumber(text)}
      />

      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        onChangeText={(text) => setFullName(text)}
      />

      <Text style={styles.label}>Family Nickname:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your family nickname"
        onChangeText={(text) => setFamilyNickname(text)}
      />

      <Button 
        title="OK" 
        onPress={handleRegistration}
      />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 16,
    marginTop: 20,
    backgroundColor: '#deffe',
  
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
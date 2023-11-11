import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import './RegistrationScreenStyles';

import tw from 'twrnc';

const RegistrationScreen = (props) => {
  const [login, setLogin] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  
  const handleRegistration = () => {
    // Implement your registration logic here
    console.log('Nickname:', login);
    console.log('Phone number:', phonenumber);
    
    // Add your registration API call or authentication logic here\
    if (true) {
      props.setIsLoggedIn(true)
      props.setLogin(login)
    }
  }

  const goToSms = () => {
    setIsRegistering(true);
  };

  const handleReturn = () => {
    setIsRegistering(false)
  }

  if (isRegistering == false) {
    return (
      <View style={tw`flex-1 items-center justify-center p-20`}>
        <Text style={tw`text-center font-bold text-3xl`}>Registration</Text>

        <TextInput
          style={tw`items-center justify-center w-40 h-12 border border-gray-500 rounded-4 p-4 m-1`}
          placeholder="Nickname"
          onChangeText={(text) => setLogin(text)}
          value={login}
        />

        <TextInput
          style={tw`items-center justify-center w-40 h-12 border border-gray-500 rounded-4 p-4 m-1`}
          placeholder="Phone number"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phonenumber}
          keyboardType="phone-number"
        />

        <TouchableOpacity style={tw`items-center justify-center bg-blue-950 p-4 rounded-4 border m-1`} onPress={goToSms}>
          <Text style={tw`font-bold text-white text-xl`}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
  else if (isRegistering == true) {
    return (
      <View style={tw`flex-1 items-center justify-center p-20`}>
        <Text style={tw`text-center font-bold text-3xl`}>Enter the SMS code</Text>

        <TextInput
          style={tw`items-center justify-center w-40 h-12 border border-gray-500 rounded-4 p-4 m-1`}
          placeholder="Code from SMS"
          onChangeText={(text) => setLogin(text)}
          value={login}
        />

        <TouchableOpacity style={tw`items-center justify-center p-4 rounded-4 bg-blue-950 border m-1`} onPress={() => handleRegistration()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`items-center justify-center bg-gray-500 rounded-4 p-4 border m-1`} onPress={handleReturn}>
          <Text style={styles.buttonText}>Return</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegistrationScreen;

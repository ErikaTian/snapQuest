import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add authentication logic here (e.g., API call to verify credentials)

    console.log('Login button pressed');

  };

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton}>
  <Text style={styles.createAccountText}>Create an Account</Text>
</TouchableOpacity>




    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "50%", 
    justifyContent: 'center',
    alignItems: 'center',
    
    padding: 20,
    
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
   
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  account: {
    color: "black",
    fontSize: 16,
  },
  createAccountButton: {
    marginTop: 10, // Add margin to create space between buttons
    width: '100%',
    height: 40,
    backgroundColor: 'green', // Example background color for the button
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  createAccountText: {
    color: 'white', // Color for the text
    fontSize: 16,
  },
});

export default LoginScreen;

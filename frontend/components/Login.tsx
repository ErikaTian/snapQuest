import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userProfile = await AsyncStorage.getItem('userProfile');
      if (userProfile !== null) {
        const { email: storedEmail, password: storedPassword } = JSON.parse(userProfile);
        if (email === storedEmail && password === storedPassword) {
          navigation.navigate('Profile');
        } else {
          Alert.alert("Login Failed", "Incorrect email or password.");
        }
      } else {
        Alert.alert("Login Failed", "No account found. Please create an account.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Login Error", "An error occurred while trying to log in.");
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Please log in to check your profile</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountText}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    // flex: 1,
   // alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: "50%", 
    backgroundColor: "fff", 
    alignItems: 'center',

  },
  check: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // marginTop: "50%", 
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
  createAccountButton: {
    marginTop: 10,
    width: '100%',
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  createAccountText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "black", 
    marginBottom: 10,
    fontFamily: 'mon-b'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#888',
    fontFamily: 'mon-sb'
  },
  color:{
    backgroundColor: "#fff", 
  }
});

export default LoginScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add authentication logic here (e.g., API call to verify credentials)
    console.log('Login button pressed');
  };
  const handleCreateAccount = () => {
    // Add authentication logic here (e.g., API call to verify credentials)
    console.log('Login button pressed');
  };

return (
    <View style =  {styles.container}>

    <Text style={styles.title}>Welcome Back!</Text>
    <Text style={styles.subtitle}>Please log in to check your profile</Text>
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

          <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
       <Text style={styles.createAccountText}>Create an Account</Text>
      </TouchableOpacity>
 

    </View>
); 
}





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

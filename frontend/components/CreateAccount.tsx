import React, { useState } from 'react';
import firebase from 'firebase/app';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { userCollection, addDoc } from '../firebaseConfig';

// Initialize docId outside of the component
let docId = '';

const CreateAccountScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = async () => {
    const userData = {
      name: name,
      email: email,
      password: password
    };

    try {
      const docRef = await addDoc(userCollection, userData);

      console.log('New user added with ID:', docRef.id);
      docId = docRef.id; // Update the value of docId
      return docRef.id;
    } catch (error) {
      console.error('Error adding user to Firestore:', error);
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput style={styles.input} placeholder="User Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    // fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: "margarsa",
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
});

// Export the CreateAccountScreen component
export default CreateAccountScreen;
export {docId};
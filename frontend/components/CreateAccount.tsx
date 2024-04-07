import React, { useState } from 'react';
import firebase from 'firebase/app';
import {inspect} from "util";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {userCollection, addDoc, auth, db, doc, collection} from '../firebaseConfig';

//import styles = module



const CreateAccountScreen = ({ navigation } : any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [docId, setDocId] = useState('');

  const handleCreateAccount = async () => {
  
    const userData = {
      name: name,
      email: email,
      password: password
    };

    try {
      const docRef = await db.collections()(userCollection, userData);
  
      console.log('New user added with ID:', docRef.id);
      setDocId(docRef.id);
      return docRef.id; // Return the ID of the newly created document
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

// Styles remain unchanged
const styles = StyleSheet.create({
    container: {
      marginTop: "50%",
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
    
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      fontFamily: 'mon-b'
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

export default CreateAccountScreen;
export const docId;



// -----------------
/* firestore.createUserWithEmailAndPassword(email, password)
      
      .then((userCredential: any) => {
        console.log("user created");
        // After creating the user, update their profile with the display name
        userCredential.user.updateProfile({
          displayName: name
        }).then(() => {
          console.log("store data")
          // Optionally, save additional user info in Firestore
          const userData = {
            username: name,
            email: email,
          };
          firestore.collection('users').doc(userCredential.user.uid).set(userData)
            .then(() => {
              // Navigate to profile after successful account creation and profile update
              navigation.navigate('Profile');
            }).catch((error: Error) => console.error(error));
        }).catch((error: Error) => console.error(error));
      })
      .catch((error: Error) => console.error(error));*/



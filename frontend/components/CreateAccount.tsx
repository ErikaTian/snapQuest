// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';

// import { auth } from '../firebaseConfig';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';



// const CreateAccountScreen = ({navigation}: any) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // const navigation = useNavigation();
//   // const handleCreateAccount = () => {
//   //   // Add logic here to create the account (e.g., API call)
//   //   // Assuming successful account creation, navigate to ProfileScreen
//   //   navigation.navigate('Profile');
//   // };

//   const handleCreateAccount = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // After creating user, update their profile with the display name
//         updateProfile(userCredential.user, {
//           displayName: name
//         }).then(() => {
//           // Navigate to profile after successful account creation and profile update
//           navigation.navigate('Profile');
//         }).catch((error) => {
//           // Handle any errors from updating profile
//           console.error(error);
//         });
//       })
//       .catch((error) => {
//         // Handle any errors from account creation
//         console.error(error);
//       });
//   };  
  



//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create an Account</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="User Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry={true}
//         value={password}
//         onChangeText={setPassword}
//       />
// 
//       <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
//         <Text style={styles.buttonText}>Create Account</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: "50%",
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
  
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     fontFamily: 'mon-b'
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
//   button: {
//     width: '100%',
//     height: 40,
//     backgroundColor: 'blue',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default CreateAccountScreen;









import React, { useState } from 'react';
import firebase from 'firebase/app';
import {inspect} from "util";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {firestore} from '../firebaseConfig';

//import styles = module


const CreateAccountScreen = ({ navigation } : any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    try {
      const docRef = await firestore.collection('users');
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



// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// import { auth } from '../firebaseConfig';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';



// const LoginScreen = ({navigation}: any) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // const handleLogin = () => {
//   //   // Perform authentication logic here
//   //   // For simplicity, assume successful login for now
//   //   navigation.navigate('Profile');
//   // };

//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in, navigate to profile or next screen
//         navigation.navigate('Profile');
//       })
//       .catch((error) => {
//         // Handle errors here, such as wrong password or no user
//         console.error(error);
//       });
//   };
  


  
//   const handleCreateAccount = () => {
//     navigation.navigate('CreateAccount'); 
//   };

// return (
//     <View style =  {styles.container}>

//     <Text style={styles.title}>Welcome Back!</Text>
//     <Text style={styles.subtitle}>Please log in to check your profile</Text>
//  <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
// <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry={true}
//         value={password}
//         onChangeText={setPassword}
//       />
// 
//        <TouchableOpacity style={styles.button} onPress={handleLogin}>
//          <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//           <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
//        <Text style={styles.createAccountText}>Create an Account</Text>
//       </TouchableOpacity>
 

//     </View>
// ); 
// }





// const styles = StyleSheet.create({

//   container: {
//     // flex: 1,
//    // alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     marginTop: "50%", 
//     backgroundColor: "fff", 
//     alignItems: 'center',

//   },
//   check: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     // marginTop: "50%", 
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 20,
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
//   createAccountButton: {
//     marginTop: 10,
//     width: '100%',
//     height: 40,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   createAccountText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: "black", 
//     marginBottom: 10,
//     fontFamily: 'mon-b'
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 20,
//     color: '#888',
//     fontFamily: 'mon-sb'
//   },
//   color:{
//     backgroundColor: "#fff", 
//   }
// });

// export default LoginScreen;






import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { auth, firestore } from '../firebaseConfig';



const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firestore.signInWithEmailAndPassword(email, password)
      .then(() => {
        // Signed in, navigate to profile or next screen
        navigation.navigate('Profile');
      })
      .catch((error: Error) => console.error(error));
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

// Styles remain unchanged
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

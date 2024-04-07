import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@/components/Login';
import CreateAccountScreen from '@/components/CreateAccount';
import ProfileScreen from '@/components/Profile';
import firebase from 'firebase/app';
import { db, userCollection, addDoc, collection, doc , getDoc, updateDoc} from '../../firebaseConfig';


const Stack = createStackNavigator();

const Page = () => {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="CreateAccount" options={{ headerShown: false }} component={CreateAccountScreen} />
        <Stack.Screen name="Profile" options={{ headerShown: false }}  component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const incrementStreak = async (docId: string) => {
  try {
    // Get a reference to the document
    const documentRef = doc(db, 'your_collection_name', docId);
    // Get the current value of the "streak" field
    const userDoc = await getDoc(documentRef);
    let currentStreak = userDoc.data()?.streak || 0;
    let bestStreakSoFar = userDoc.data()?.longestStreak || 0;

    // Increment the streak
    currentStreak++;

    // If the current streak is greater than the best streak so far, update the document
    if (currentStreak > bestStreakSoFar) {
      await updateDoc(documentRef, { longestStreak: currentStreak });
    }

    console.log('Streak incremented successfully');
  } catch (error) {
    console.error('Error incrementing streak:', error);
    throw error;
  }
};

const resetStreak = async (docId: string) => {
  try {
    // Get a reference to the user document
    const documentRef = doc(db, 'users', docId);

    // Reset the streak to 0
    await updateDoc(documentRef, { streak: 0 });

    console.log('Streak reset successfully');
  } catch (error) {
    console.error('Error resetting streak:', error);
    throw error;
  }
};

const addPoints = async (docId: string, pointsGiven: number) => {
  try {
    // Get a reference to the user document
    const documentRef = doc(db, 'users', docId);

    // Get the current value of the "points" field from the user document
    const userDoc = await getDoc(documentRef);
    let currentPoints = userDoc.data()?.points || 0;

    // Add points to the current total
    currentPoints += pointsGiven;

    // Update the user document with the new points value
    await updateDoc(documentRef, { points: currentPoints });

    console.log('Points added successfully');
  } catch (error) {
    console.error('Error adding points:', error);
    throw error;
  }
};

const subtractPoints = async (docId: string, pointsTaken: number) => {
  try {
    // Get a reference to the user document
    const documentRef = doc(db, 'users', docId);

    // Get the current value of the "points" field from the user document
    const userDoc = await getDoc(documentRef);
    let currentPoints = userDoc.data()?.points || 0;

    // Subtract points from the current total
    currentPoints -= pointsTaken;

    // Update the user document with the new points value
    await updateDoc(documentRef, { points: currentPoints });

    console.log('Points subtracted successfully');
  } catch (error) {
    console.error('Error subtracting points:', error);
    throw error;
  }
};

const completeDailyQuest = async (docId: string) => {
  try {
    // Get a reference to the user document
    const documentRef = doc(db, 'users', docId);

    // Update the document to mark the daily quest as completed
    await updateDoc(documentRef, { completedDailyQuest: true });

    console.log('Daily quest completed successfully');
  } catch (error) {
    console.error('Error completing daily quest:', error);
    throw error;
  }
};

const resetDailyQuest = async (docId: string) => {
  try {
    // Get a reference to the user document
    const documentRef = doc(db, 'users', docId);

    // Update the document to reset the daily quest
    await updateDoc(documentRef, { completedDailyQuest: false });

    console.log('Daily quest reset successfully');
  } catch (error) {
    console.error('Error resetting daily quest:', error);
    throw error;
  }
};



export default Page;

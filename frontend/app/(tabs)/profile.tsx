import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@/components/Login';
import CreateAccountScreen from '@/components/CreateAccount';
import ProfileScreen from '@/components/Profile';

const Stack = createStackNavigator();

const Page = () => {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Page;

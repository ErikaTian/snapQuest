import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from'@/components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from '@/components/CreateAccount';
import Profile from '@/components/Profile';

const Stack = createStackNavigator();

const Page = () => {
  return (
    <View>
      <Profile />
    </View>
  )
}

export default Page
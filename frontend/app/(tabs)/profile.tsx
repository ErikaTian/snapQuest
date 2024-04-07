import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from'@/components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '@/components/Profile';

const Stack = createStackNavigator();

const Page = () => {
  return (
    <View>
      <LoginScreen />
    </View>
  )
}

export default Page
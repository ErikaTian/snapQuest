import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons, AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import {useState, useEffect} from 'react'; 
import { EventRegister } from 'react-native-event-listeners';
const Layout = () => {
  const[darkMode, setDarkMode] = useState(false)

  useEffect (() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data)=>{
      setDarkMode(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb'
        }, 
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          title: "Home",
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          tabBarLabel: 'Rewards',
          title: "Rewards", 
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="star-four-points-outline" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          tabBarLabel: 'Upload',
          title: "Upload Image", 
          tabBarIcon: ({ color, size }) => <MaterialIcons name="add-a-photo" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="following"
        options={{
          tabBarLabel: 'Other Users',
          title: "Other Users", 
          tabBarIcon: ({ color, size }) => <FontAwesome name="users" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'My Profile',
          title: "Profile", 
          tabBarIcon: ({ color, size }) => <AntDesign name="profile" size={24} color={color} />
        }}
      />
    </Tabs>
  );
};

export default Layout;

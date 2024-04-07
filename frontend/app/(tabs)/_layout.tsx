import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons, AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Layout = () => {
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
        name="index"
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
        name="profile"
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

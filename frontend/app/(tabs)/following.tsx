import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';


const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchField}>
        <Ionicons style={styles.searchIcon} name='ios-search' size={20} color={Colors.medium} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={Colors.medium}
          autoFocus={true} // Autofocus the TextInput when component mounts
        />
      </View>
      <Ionicons name="options-outline" size={20} color={Colors.primary} style={styles.optionButton} />
    </View>
  );
};

const Following = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require("@/assets/images/usericon.jpg")} style={styles.iconStyle}/>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Other Users</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}>Search</Text>
            <Ionicons name='chevron-down' size={20} color={Colors.primary} />
          </View>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color="blue" />
        </TouchableOpacity>
      </View>
      <SearchBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  titleContainer: {
    marginLeft: 20,
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 10,
  },
  iconStyle:{
    width: 30, 
    height: 30  
  }, 
  locationName: { flexDirection: 'row', alignItems: 'center' },
  searchContainer: {
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    color: Colors.mediumDark,
  },
  searchIcon: {
    marginRight: 10,
  },
  optionButton: {
    padding: 10,
  },
});

export default Following;

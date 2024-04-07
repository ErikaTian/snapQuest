import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { images } from '@/assets/data/images';
import { profile } from '@/assets/data/images';

const ProfileScreen = () => {
  const userName = 'John Doe'; // Replace 'John Doe' with the actual user's name

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={profile} style={styles.profileImage} />
          <Text style={styles.userName}>{userName}</Text>
        </View>
        <Text style={styles.header}>
          Pictures you have taken
        </Text>
        <View style={styles.imagesContainer}>
          {images.map((image, index) => (
            <View style={styles.picHolder} key={index}>
              <Image source={image.img} style={styles.image} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: "10%", 
    marginBottom: "25%",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  userName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 25,
    marginBottom: 16,
    paddingHorizontal: 16,
    fontFamily: "cute-font",
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10, // Add padding to the sides of the images container
  },
  picHolder: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textfont: {
    padding: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;

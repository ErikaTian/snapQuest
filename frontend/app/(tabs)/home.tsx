import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const Page = () => {
  // Replace 'USERNAME' with your state variable or prop
  const username = 'USERNAME';

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello {username}!</Text>
      </View>

      {/* Quest Card Section */}
      <View style={styles.questCard}>
        <Text style={styles.questTitle}>TODAY'S QUEST:</Text>
        <Text style={styles.questName}>Cherry Blossoms!</Text>
        <Text style={styles.questStatus}>Not completed yet!</Text>
      </View>
      
      {/* Additional components will go here */}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7C7C7C', // Placeholder color, match it with your actual color
  },
  header: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#FFFFFF', // This should be your theme color or header color
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Adjust as needed
  },
  questCard: {
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF', // Card background color
    shadowColor: '#000000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  questTitle: {
    fontSize: 16,
    color: '#4F4F4F', // Adjust as needed
    marginBottom: 8,
  },
  questName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333', // Adjust as needed
  },
  questStatus: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EB5757', // Adjust as needed, this is usually a highlight color
  },
  // Styles for additional components will go here
});

export default Page;

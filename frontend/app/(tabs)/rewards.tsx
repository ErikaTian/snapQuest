import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';

interface DiscountCode {
  id: string;
  code: string;
  description: string;
  redeemed: boolean;
}
// Sample data including a 'redeemed' field
const discountCodes: DiscountCode[] = [
  { id: '1', code: '10OFF', description: '10% Off on Arcteryx Beta Jacket', redeemed: false },
  { id: '2', code: '5CASHBACK', description: '5% Cashback on Next Purchase at Arcteryx', redeemed: false },
  { id: '3', code: 'BRINGAFRIEND', description: 'Bring a guest to our Bollywood Dance Class for free', redeemed: true },
  { id: '4', code: 'FREESPIN', description: 'One Free Spin Class', redeemed: true },
  { id: '5', code: '20OFF', description: 'Get 20% off on Arcteryx Alpha Gloves', redeemed: true }
];

const RewardScreen = () => {
  const currentPoints = 105;

 // Filter out redeemed and available rewards
 const [redeemedRewards, availableRewards] = discountCodes.reduce(
  ([redeemed, available], reward) =>
    reward.redeemed ? [[...redeemed, reward], available] : [redeemed, [...available, reward]],
  [[], []] as [DiscountCode[], DiscountCode[]]
);

const renderDiscountCodeItem = ({ item }: { item: DiscountCode }) => (
  <TouchableOpacity style={[styles.discountCodeItem, item.redeemed && styles.redeemedReward]}>
    <Text style={styles.discountCode}>{item.code}</Text>
    <Text style={styles.discountDescription}>{item.description}</Text>
    {item.redeemed && <Text style={styles.redeemedLabel}>Redeemed</Text>}
  </TouchableOpacity>
);

  return (
   
    <View style={styles.container}>
       <ScrollView>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsLabel}>Current Points</Text>
        <Text style={styles.pointsValue}>{currentPoints}</Text>
      </View>
      <Text style={styles.rewardHeading}>Available Rewards</Text>
      <FlatList
        data={availableRewards}
        renderItem={renderDiscountCodeItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.discountList}
      />

      {redeemedRewards.length > 0 && (
        <View>
          <Text style={styles.rewardHeading}>Redeemed Rewards</Text>
          <FlatList
            data={redeemedRewards}
            renderItem={renderDiscountCodeItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.discountList}
          />
        </View>
      )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  pointsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700', // Gold color for premium feel
    borderRadius: 20,
    margin: 20,
    paddingVertical: 40,
    paddingHorizontal: 50,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  pointsLabel: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 8,
  },
  pointsValue: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  rewardHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  discountList: {
    paddingHorizontal: 20,
  },
  discountCodeItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  discountCode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E91E63', // A color that pops, for the code
    marginBottom: 4,
  },
  discountDescription: {
    fontSize: 14,
    color: '#555555', // Subtle color for description
  },

  redeemedReward: {
    backgroundColor: '#CCCCCC', // A different color to indicate redemption
  },
  redeemedLabel: {
    fontSize: 14,
    color: '#777777',
    fontWeight: 'bold',
    marginTop: 4,
  },

});

export default RewardScreen;
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const BottomSheet = ({ stretches }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Today's Stretches:</Text>
        <FlatList
            data={stretches}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={item => item.id.toString()}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    height: '50%',  // Adjust as necessary
    padding: 15
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default BottomSheet;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';
import { AntDesign } from '@expo/vector-icons';

const SummaryScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Congratulations on completing your stretches for today!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Choice')}>
          <AntDesign name="arrowright" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: theme.colors.primary,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    // color: theme.colors.accent,
  },
  button: {
    backgroundColor: theme.colors.accent,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,  // for Android shadow
    shadowColor: '#000',  // for iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    marginRight: 10,
    color: theme.colors.primary,  // Adjusting based on your theme
  },
});

export default SummaryScreen;


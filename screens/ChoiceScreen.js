import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';
import {AntDesign, EvilIcons} from '@expo/vector-icons';

const ChoiceScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {/* handle meditation logic here */}}>
          <Text style={styles.buttonText}>20 mins Meditation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate("Start", { message: "All stretches done today come back tomorrow." })}>
          <EvilIcons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: theme.colors.accent,
    paddingHorizontal: 15,
    paddingVertical: 10,
    // borderRadius: 8,
    marginBottom: 20,
    backgroundColor: theme.colors.accent,
    borderRadius: 50,
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
  closeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: theme.colors.accent,
    paddingHorizontal: 15,
    paddingVertical: 10,
    // borderRadius: 8,
    marginBottom: 20,
    backgroundColor: theme.colors.secondary,
    borderRadius: 50,
    elevation: 5,  // for Android shadow
    shadowColor: '#000',  // for iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

  },
  closeButtonText: {
    fontSize: 18,
    marginRight: 10,
    color: theme.colors.secondary,  // Adjusting based on your theme
  },
});

export default ChoiceScreen;

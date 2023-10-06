import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';  // Assuming theme.js is in a parent directory
import { AntDesign } from '@expo/vector-icons';

const StartScreen = ({ route, navigation }) => {
  return (
      <View style={styles.container}>
        {route.params?.message
            ? <Text style={styles.messageText}>{route.params.message}</Text>
            : <Text style={styles.messageText}>Welcome Back!</Text>}
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.buttonText}>Start</Text>
          <AntDesign name="arrowright" size={20} color={theme.colors.primary} />
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
  messageText: {
    fontSize: 30,
    color: theme.colors.accent,
    marginBottom: 30,
    textAlign: 'center'
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.accent,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    color: theme.colors.primary,
    marginRight: 10
  }
});

export default StartScreen;

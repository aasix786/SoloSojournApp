import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import { AntDesign } from '@expo/vector-icons';

const StartScreen = ({ route, navigation }) => {
  return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('../assets/relaxation.png')} />

        {route.params?.message
            ? <Text style={styles.messageText}>{route.params.message}</Text>
            : <Text style={styles.messageText}>Solo SoJourn</Text>}

        <Text style={styles.subtitle}>Harmony in Every Pose.</Text>

        <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Welcome')}>
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
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 15,
  },
  backgroundImage: {
    // position: 'absolute',
    marginTop: 2,
    marginBottom:50,
    width: '20%',
    height: '10%',
    opacity: 0.3,
  },
  messageText: {
    fontSize: 40,
    color: theme.colors.accent,  // Adjust based on your theme
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.accent,  // Adjust based on your theme
    textAlign: 'center',
    marginBottom: 80,
  },
  startButton: {
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
});

export default StartScreen;

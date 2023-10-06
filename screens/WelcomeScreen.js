import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import theme from '../theme';
import {AntDesign} from '@expo/vector-icons';

const WelcomeScreen = ({ navigation }) => {
  return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>

          <Text style={styles.title}>Solo SoJourn</Text>
          <Text style={styles.tagline}>Your Ten-Minute Retreat to Rediscover.</Text>

          <Text style={styles.explanation}>
            Solo SoJourn is your sanctuary in daily chaos, advocating just ten minutes of reflection and stretch.
          </Text>
          <Text style={styles.explanation}>
            It embodies solitary rejuvenation and emphasizes self-care through each mindful moment.
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => {
            // Here, pass the randomStretches to the Routine screen
            navigation.navigate('Routine');
          }}>

            <AntDesign name="arrowright" size={30} color={theme.colors.primary} />
          </TouchableOpacity>


        </View>
      </SafeAreaView>

  );
};

// Styles for the WelcomeScreen (along with modal styles)
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.accent,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.colors.accent, // Assuming this stands out.
    marginBottom: 10,
  },
  tagline: {
    fontSize: 20,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  explanation: {
    marginTop:10,
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10, // Adding this to prevent the text from touching the screen edges, especially if the text is longer.
  },
  button:{
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
  }

});

export default WelcomeScreen;

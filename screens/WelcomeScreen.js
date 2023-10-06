import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Modal } from 'react-native';
import theme from '../theme';
import stretchesData from '../data/stretchesData.json';

const WelcomeScreen = ({ navigation }) => {
  const [randomStretches, setRandomStretches] = useState([]);

  useEffect(() => {
    // Assuming you want to select five random stretches for the sake of this example.
    setRandomStretches(selectRandomStretches(stretchesData, 5));

  }, []);



  const selectRandomStretches = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Ready for a refreshing stretch routine?</Text>
          <Button
              title="Let's Start"
              onPress={() => {
                // Here, pass the randomStretches to the Routine screen
                navigation.navigate('Routine', { randomStretches: randomStretches });
              }}
              color={theme.colors.secondary}
          />

       
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
  }
});

export default WelcomeScreen;

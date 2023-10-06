import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import theme from '../theme';
import stretchesData from '../data/stretchesData.json';

const StretchesModal = ({modalVisible, setModalVisible , startTimer}) => {
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
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(false);
      startTimer()
    }}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Today's Stretches:</Text>
      {randomStretches.map(stretch => (
          <Text key={stretch.id}>{stretch.name}</Text>
      ))}
      <Button
          title="Close"
          onPress={() => {
            setModalVisible(!modalVisible);
            startTimer()
          }}
      />
    </View>
  </View>
</Modal>
  );
};

// Styles for the WelcomeScreen (along with modal styles)
const styles = StyleSheet.create({
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

export default StretchesModal;

// ChoiceScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const ChoiceScreen = ({ navigation }) => {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="20 mins Meditation" onPress={() => {/* handle meditation logic here */}} />
        <Button title="Close" onPress={() => navigation.navigate("StartScreen", { message: "All stretches done today come back tomorrow." })} />
      </View>
  );
};

export default ChoiceScreen;

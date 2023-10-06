import React from 'react';
import { View, Text, Button } from 'react-native';

const SummaryScreen = ({ navigation }) => {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Congratulations on completing your stretches for today!</Text>
        <Button title="Back to Choices" onPress={() => navigation.navigate("ChoiceScreen")} />
      </View>
  );
};

export default SummaryScreen;
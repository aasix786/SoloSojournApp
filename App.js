// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import WelcomeScreen from './screens/WelcomeScreen';
// import RoutineScreen from './screens/RoutineScreen';
// import SummaryScreen from './screens/SummaryScreen';
// import ChoiceScreen from './screens/ChoiceScreen';
// import StartScreen from './screens/StartScreen';
//
// const Stack = createStackNavigator();
//
// export default function App() {
//   return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Start">
//           <Stack.Screen
//               name="Start"
//               component={StartScreen}
//               options={{headerShown: false}}
//           />
//           <Stack.Screen
//               name="Welcome"
//               component={WelcomeScreen}
//               options={{headerShown: false}}
//           />
//           <Stack.Screen
//               name="Routine"
//               component={RoutineScreen}
//               options={{headerShown: false}}
//           />
//           <Stack.Screen
//               name="Summary"
//               component={SummaryScreen}
//               options={{headerShown: false}}
//           />
//           <Stack.Screen
//               name="Choice"
//               component={ChoiceScreen}
//               options={{headerShown: false}}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//   );
// }
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import RoutineScreen from './screens/RoutineScreen';
import stretchesData from './data/stretchesData';
import ChoiceScreen from './screens/ChoiceScreen';
import SummaryScreen from './screens/SummaryScreen';
import StartScreen from './screens/StartScreen';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
const Stack = createStackNavigator();

export default function App() {
  const [randomStretches, setRandomStretches] = useState([]);

  useEffect(() => {
    const selectedStretches = stretchesData.sort(() => 0.5 - Math.random()).slice(0,5);
    setRandomStretches(selectedStretches);
  }, []);

  return (
    <GestureHandlerRootView  style={{ flex: 1 }}>
   <BottomSheetModalProvider>
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
                        name="Start"
                        component={StartScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Routine"
                        component={RoutineScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Summary"
                        component={SummaryScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Choice"
                        component={ChoiceScreen}
                        options={{headerShown: false}}
                    />
        </Stack.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
 
 
  );
}

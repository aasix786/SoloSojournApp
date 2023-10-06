import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Modal, Button, Linking } from 'react-native';
import theme from '../theme';
import { AntDesign } from '@expo/vector-icons';
import { BottomSheetModal} from '@gorhom/bottom-sheet';
import StretchesModal from '../components/StretchesModal';
import { Feather } from '@expo/vector-icons';

const RoutineScreen = ({ route, navigation }) => {

  const [selectedStretches, setSelectedStretches] = useState([]);
  const [currentStretchIndex, setCurrentStretchIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isStretchListVisible, setStretchListVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(true); // Open by default
  const AddBottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["20%","40%"], []);
  useEffect(() => {
    let timer;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isTimerRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0 && currentStretchIndex < selectedStretches.length - 1) {
      setCurrentStretchIndex(currentStretchIndex + 1);
      setTimeLeft(120); // Resetting timer for next stretch
    } else if (timeLeft <= 0) {
      setIsTimerRunning(false); // Stop timer if all stretches are done
      navigation.navigate("Summary");
    }
  }, [timeLeft]);

  const handleNextStretch = () => {
    console.log("Next button pressed");
    if (currentStretchIndex < selectedStretches.length - 1) {
      setCurrentStretchIndex(prevIndex => prevIndex + 1);
      setTimeLeft(120)
    }
    else{
      setIsTimerRunning(false);
      navigation.navigate("Summary");
    }
  };
const startTimer = () => {
  if (!isTimerRunning) {
    setIsTimerRunning(true);
  }
}
const openBottomSheet = useCallback(() => {
  AddBottomSheetRef.current?.present();
}, []);
const closeBottomSheet = useCallback(() => {
  AddBottomSheetRef.current?.dismiss();
}, []);
const handleAddBottomSheet = useCallback((index) => {
  index !== 1 &&
  AddBottomSheetRef.current?.dismiss()
}, []);
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.timer}>
            {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}
          </Text>
          <TouchableOpacity onPress={() => {
            console.log("Top Info button pressed");
            setModalVisible(true)
            // setStretchListVisible(true);
          }}>
            <AntDesign name="infocirlceo" size={24} color={theme.colors.accent} />
          </TouchableOpacity>
        </View>

        <View style={styles.stretchInfoContainer}>
          <Text style={styles.stretchTitle}>
            {selectedStretches[currentStretchIndex]?.name}

          </Text>
        </View>

        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.bottomLeft} onPress={() => {
            console.log("Bottom Info button pressed");
            openBottomSheet()
            setIsTimerRunning(false);

            // setStretchListVisible(true);
          }}>
            <Feather name="arrow-up-circle" size={30} color="black" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomRight} onPress={handleNextStretch}>
            <AntDesign name="arrowright" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <Modal
            animationType="slide"
            transparent={true}
            visible={isStretchListVisible}
        >
          <View style={styles.modalContent}>
            <Text>{selectedStretches[currentStretchIndex]?.name}</Text>
            <Text>{selectedStretches[currentStretchIndex]?.description}</Text>
            {selectedStretches[currentStretchIndex]?.video_link && (
                <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(selectedStretches[currentStretchIndex]?.video_link)}>
                  Watch Video
                </Text>
            )}
            <Button title="Close" onPress={() => {
              console.log("Close button pressed in the modal");
              setStretchListVisible(false);
             startTimer()
            }} />
          </View>
        </Modal>
        <StretchesModal modalVisible={modalVisible} setModalVisible={setModalVisible} startTimer={startTimer} setSelectedStretches={setSelectedStretches}/>
        <BottomSheetModal
          ref={AddBottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleAddBottomSheet}
          backgroundStyle={{backgroundColor:"#fff"}}
          handleIndicatorStyle={{backgroundColor:"#000"}}
          enablePanDownToClose={true}
        >
           <View style={{width:"100%", alignItems:"center", paddingVertical:20}}>
      <Text allowFontScaling={false} style={{fontSize:22, color:"#000", }}>How To</Text>
     </View>
     <View style={{width:"100%", backgroundColor: '#fff'}}>
       <View style={styles.modalContent}>
         <Text style={styles.stretchName}>
           {selectedStretches[currentStretchIndex]?.name}
         </Text>
         <Text style={styles.stretchDescription}>
           {selectedStretches[currentStretchIndex]?.description}
         </Text>
         {selectedStretches[currentStretchIndex]?.video_link && (
             <Text style={styles.videoLink} onPress={() => Linking.openURL(selectedStretches[currentStretchIndex]?.video_link)}>
               Watch Video
             </Text>
         )}

            <View style={{marginTop:20}}>
              <TouchableOpacity
                  style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
                  onPress={() => {
                    console.log("Close button pressed in the modal");
                    closeBottomSheet();
                    startTimer();
                  }}>
                <Feather name="arrow-down-circle" size={24} color="black" />

              </TouchableOpacity>
            </View>
        
          </View>
       
     </View>
   </BottomSheetModal>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  timer: {
    fontSize: 20,
    color: theme.colors.secondary,
  },
  stretchInfoContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 200,
  },
  stretchTitle: {
    fontSize: 30,
    color: theme.colors.accent,
    marginBottom: 30,
    textAlign: 'center'
  },
  modalContent: {
    width: "100%",
    alignItems: 'center',
    padding: 15,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 20,
  },
  bottomLeft: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  bottomRight: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  stretchName: {
    fontSize: 20,
    color: theme.colors.primary, // Or whatever the property is named in your theme
    marginBottom: 10, // Margin for the gap
  },
  stretchDescription: {
    fontSize: 16,
    color: theme.colors.secondary, // Or whatever the property is named in your theme
    marginBottom: 10,
    width: "75%",
    // Margin for the gap
  },
  videoLink: {
    fontSize: 16,
    color: theme.colors.accent,
    fontWeight: 'bold' // Assuming you might have a property for link colors
  },
});

export default RoutineScreen;

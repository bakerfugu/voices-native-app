import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import RecordingOrb from '../../Components/RecordingOrb.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';


export default function RecordHome() {
    const navigation = useNavigation();
    const [time, setTime] = useState(0);
    const [recordState, changeRecordState] = useState({
        paused: true,
        orb: Images.blueOrb,
        instructions: 'Tap to Record'
    });
    var interval = null;


    const restartTimer = () => {
        changeRecordState({
            paused: true,
            orb: Images.blueOrb,
            instructions: 'Tap to Record'
        });
        setTime(0);
        

    }

    const pauseOrContinue = () => {
        recordState.paused ? 
        changeRecordState({
            paused: false,
            orb: Images.yellowOrb,
            instructions: "Tap to Pause"
        }) :
        changeRecordState({
            paused: true,
            orb: Images.blueOrb,
            instructions: 'Tap to Start'
        })
    }

    useEffect(() => {
        
        if (!recordState.paused) {
            interval = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        }
        else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[recordState]);

    const nextPage =  () => {
        navigation.navigate('EditStory');
    }
    


    return (
        

       <View style ={styles.container}>
           <BackgroundGradient/>
           <View style={styles.orbView}>
               <RecordingOrb onPress={pauseOrContinue} recordState={recordState} time={time}/>
           </View>
           
           <View style={styles.buttonView}>
                <LongButton label='Restart' onPress={restartTimer}/>
                <LongButton label='Edit Story' onPress={nextPage}/>
           </View>

       </View>
       
            

       
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        justifyContent: 'center'
    },
    orbView: {
        flex: 3,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'grey'
    
    },
    buttonView: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        paddingHorizontal: 5
    }
  });



    //add confirmation to restart button to prevent user from accidentally doing it
    //put restart and edit story button next to each other
    //potentially record snippets instead of the entire story
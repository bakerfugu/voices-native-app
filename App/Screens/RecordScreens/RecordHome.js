import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, Alert, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import RecordingOrb from '../../Components/RecordingOrb.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import metrics from '../../Themes/Metrics.js';


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
    
    Alert.alert(
        "Are you sure you would like to restart your recording?",
        "The existing recording will be erased permanently.",
        [
            {
            text: "Cancel",
            onPress: () => {
                console.log('does not want to restart')
            },
            style: "cancel"
            },
            { text: "OK", onPress: () => {
                changeRecordState({
                    paused: true,
                    orb: Images.blueOrb,
                    instructions: 'Tap to Record'
                });
                setTime(0);
            } }
        ],
        { cancelable: false }
        );  

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
           <View style={styles.header}/>

           
           <View style={styles.orbView}>
               <RecordingOrb onPress={pauseOrContinue} recordState={recordState} time={time}/>
           </View>

           <View style={styles.uploadFile}> 

           </View>
           
           <View style={styles.buttonView}>
                <LongButton label='Restart' onPress={restartTimer} disabled={(time===0 || !recordState.paused)}/>
                <LongButton label='Edit Story' onPress={nextPage} disabled={time===0 || !recordState.paused}/>
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
        flex: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    
    },
    buttonView: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: metrics.paddingBottom,
        paddingHorizontal: 5,
    
    }, 
    header: {
        width: '100%',
        height: metrics.headerHeight,
    },

  });



    //add confirmation to restart button to prevent user from accidentally doing it
    //put restart and edit story button next to each other
    //potentially record snippets instead of the entire story
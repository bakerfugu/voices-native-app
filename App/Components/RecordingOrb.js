import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Images} from '../Themes'
import Timer from './Timer.js'

import {AntDesign, FontAwesome5} from '@expo/vector-icons'



export default function RecordingOrb ({onPress, time, recordState}) {
    
    // const [instructions, setInstructions] = useState('Tap to Start');
    // const [orb, setOrb] = useState(Images.blueOrb);
    
    // const [time, setTime] = useState(0);
    // const [paused, changeRecordState] = useState(true);
    // var interval = null;

    
    // const continueTimer = () => {
    //     changeRecordState(false);
        
    // }

    // const pauseTimer = () => {
    //     changeRecordState(true);
    // }


    // const switchOrb = () => {
    //     if (orb===Images.blueOrb) {
    //         setOrb(Images.yellowOrb);
    //         setInstructions('Tap to Stop');
    //         changeRecordState(false);
    //     }
    //     else {
    //         setOrb(Images.blueOrb);
    //         setInstructions('Tap to Start');
    //         changeRecordState(true);           
    //     }
    // }

    // useEffect(() => {
        
    //     if (!paused) {
    //         interval = setInterval(() => {
    //             setTime(time => time + 1);

    //         }, 1000);
    //     }
    //     else {
    //         clearInterval(interval);
    //     }
    //     return () => clearInterval(interval);
    // },[paused]);

  
    return (    
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.orbView} onPress={onPress}>
                
                <Image source={recordState.orb} resizeMode='contain' style={styles.blueOrb}/>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Timer style={styles.timer} time={time}/>
                    <FontAwesome5 name={recordState.paused ? 'microphone' : 'pause'} color={'white'} size={48} style={{marginTop: 10}}/>
                </View>
                
            
                
            </TouchableOpacity>
            {/* <AntDesign name={'caretup'} size={24} style={{marginTop: 10}}/> */}
            {/* <Text style={styles.instructions}>{recordState.instructions}</Text> */}

        </View>

    )
}

const styles = StyleSheet.create({
    
    container: {
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    orbView: {
        height: '70%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        // backgroundColor: 'green'
        
    },
    blueOrb: {
        height: '100%',
        aspectRatio: 1,
    
    },
    buttons: {
        flex: 1,
        backgroundColor: 'green'
    },
    instructions: {
        // marginTop: 20,
        fontSize: 24
    },
    timer: {
        position: 'absolute',
        left: 0,
        top: 0,
    }

  });


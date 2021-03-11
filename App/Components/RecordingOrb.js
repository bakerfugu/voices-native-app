import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Images} from '../Themes'
import Timer from './Timer.js'
import { Dimensions } from 'react-native';
import {FontAwesome5, MaterialIcons} from '@expo/vector-icons'



export default function RecordingOrb ({onPress, time, recordState}) {

  
    return (    
        <View style={styles.container}>
            
            
            <TouchableOpacity style={styles.orbView} onPress={onPress}>
                
                
                 <Image source={recordState.paused ? Images.record : Images.pause} resizeMode='contain' style={styles.blueOrb}/>
                 
                {/*<View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    
                    <FontAwesome5 name={recordState.paused ? 'microphone' : 'stop'} color={'white'} size={100} style={{marginTop: 10}}/>
                </View> */}
               
    
            </TouchableOpacity>
            <View style={styles.timerView}>
                <Timer style={styles.timer} time={time}/>
            </View>
            

        </View>

    )
}


const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    
    container: {
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    orbView: {
        height: '80%',
        // width: '100%',

        aspectRatio: 1,
        // borderRadius: windowWidth * .35,
        // borderColor: 'lightgrey',
        // borderWidth: 4,
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
        // backgroundColor: 'green'
    },
    instructions: {
        // marginTop: 20,
        fontSize: 24
    
    },
    timer: {
        // position: 'absolute',
        // left: 0,
        // top: 0,
        
    },
    timerView:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'grey'
    }

  });


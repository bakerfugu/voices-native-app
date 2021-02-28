import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RecordHome() {
    return (
        // <View style={styles.container}>
 
        //      <Text>

        //         Welcome to the recording tab. This page will represent the start of the recording process. 
        //         On this page, we need to add in a glowing button that willl allow the user to start/stop recording.

        //     </Text>
            
        // </View>

       <View style ={styles.container}>
           <LinearGradient colors={['#FDF0AF', '#ffffff']} style={styles.background}>
               <Text>Hello World!</Text>
           </LinearGradient>
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
    }
  });
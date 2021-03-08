import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import StoryLocationComponent from '../../Components/StoryLocationComponent.js'
import storyLocations from '../../Components/StoryLocations';  
    
export default function StoryList ({route, navigation}) {
    const {locationIndex} = route.params;

    useEffect(() => {
        
        navigation.setOptions({
            title: storyLocations[locationIndex].title,
        });
    }, []);

    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            <View style={styles.header}>

            </View>

            <StoryLocationComponent locationIndex={locationIndex}/>
            
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 75,
        // backgroundColor: 'grey',
        left: 0,
        top: 0

    },
    test: {
        flex: 1,
        width: '100%',
        backgroundColor: 'lightblue'
    }
});

    

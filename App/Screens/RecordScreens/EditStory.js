import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import {
    Dropdown,
    GroupDropdown,
    MultiselectDropdown,
  } from 'sharingan-rn-modal-dropdown';
    
    
export default function EditStory () {



    const navigation = useNavigation();
    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            <View style={styles.header}/>
            
            <Button title={'Story Info'} onPress={() => {navigation.navigate('StoryInfo')}}/>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    header: {
        width: '100%',
        height: 100,
        // backgroundColor: 'grey',
        left: 0,
        top: 0
    },
});

    

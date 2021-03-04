import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import StoryInfoForm from '../../Components/StoryInfoForm.js';
import TagsOverlay from '../../Components/TagsOverlay.js';
    
    
export default function StoryInfo () {
    const navigation = useNavigation();
    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            <View style={styles.header}/>
            <StoryInfoForm/>
            <Button title={'Confirmation'} onPress={() => {navigation.navigate('Confirmation')}}/>
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
        height: 100,
        width: '100%'
    }
});

    

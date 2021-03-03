import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
    
    
export default function StoryList () {
    const navigation = useNavigation();
    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            <View style={styles.header}>

            </View>
            
            <View style={styles.test}>
                <Button title={'Story Listen'} onPress={() => {navigation.navigate('StoryListen')}}/>
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
    header: {
        width: '100%',
        height: 100,
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

    

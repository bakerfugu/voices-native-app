import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
    
    
export default function Confirmation () {
    const navigation = useNavigation();
    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            <Button title={'Record New Story'} onPress={() => {navigation.navigate('RecordHome')}}/>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

    

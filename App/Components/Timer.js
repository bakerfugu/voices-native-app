import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Images} from '../Themes';


export default function Timer ({time}) {
    const formattedTime = (time) => {
        // let minutes = Math.floor(time / 60);
        // let sec = time % 60;
        let min = `${Math.floor(time / 60)}`
        min = `0${min % 60}`.slice(-2)
        let sec = `0${(time % 60)}`.slice(-2)

        return (
            min.toString() + ' : ' + sec.toString()
        );
    }
    return (
        <Text style={styles.timer}>
           {formattedTime(time)}
        </Text>
    )
}

const styles = StyleSheet.create({
    
    timer: {
        fontSize : 48,
        fontWeight: '300',
        color: 'black',
    }
});
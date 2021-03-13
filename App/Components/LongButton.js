import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


//'#FFDF00'
//['#FCC201', '#FCCD12','#FCC201']

export default function LongButton (props) {
    return (
        // <TouchableOpacity style={props.disabled ? styles.disabled : styles.able}  onPress={props.onPress} disabled={props.disabled}>       
        <TouchableOpacity style={props.disabled ? styles.disabled : styles.able}  onPress={props.onPress} disabled={props.disabled}> 
        <LinearGradient colors={['#FCC201', '#FCCD12','#FCC201']} style={styles.button} start={[0.9, 0.9]} end={[0.0, 0.3]}>      
            <Text>{props.label}</Text>
        </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    able: {
        borderRadius: 15,
        flex: 1,

    },
    disabled: {
        borderRadius: 25,
        flex: 1,
        opacity: 0.4,
    },
    button: {
        borderRadius: 20,
        //flex: 1,
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#F1B600',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: '2%', 
        // marginBottom: 50, 
    }
});
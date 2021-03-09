import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';


export default function LongButton (props) {
    return (
        <TouchableOpacity style={props.disabled ? styles.disabled : styles.able} onPress={props.onPress} disabled={props.disabled}>
            <Text>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    able: {
        borderRadius: 15,
        flex: 1,
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#F1B600',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 10

    },
    disabled: {
        borderRadius: 15,
        flex: 1,
        height: 50,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#F1B600',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 10
    }
});
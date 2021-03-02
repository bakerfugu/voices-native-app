import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';


export default function LongButton (props) {
    return (
        <TouchableOpacity style={styles.LongButton} onPress={props.onPress}>
            <Text>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    LongButton: {
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

    }
});
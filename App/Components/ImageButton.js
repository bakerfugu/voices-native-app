import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';


export default function ImageButton (props) {
    return (
        <TouchableOpacity style={styles.ImageButton} onPress={props.onPress}>
            <Text>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ImageButton: {
        borderRadius: 15,
        height: 400,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#F1B600',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 10,

        height: 150,
        width: '48%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        paddingHorizontal: 5

    }
});
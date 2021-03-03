import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';


export default function DeleteOrEdit (props) {
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.DeleteOrEdit} onPress={props.onPress}>
            <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.DeleteOrEdit} onPress={props.onPress}>
            <Text>Remove</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1B600',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 'auto',
        width: '26%',
        padding: '1%',
        borderRadius: 15
     
    },
    DeleteOrEdit: {
        borderRadius: 10,
        height: 'auto',
        width: 'auto',
        backgroundColor: 'white',
        padding: '5%',
        paddingRight: '15%',
        borderWidth: 3,
        borderColor: '#F1B600',
    },
});
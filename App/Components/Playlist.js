import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';


export default function Playlist (props) {
    console.log(props.value);
    return (
        <View style={styles.playlistContainer}>
            <TouchableOpacity style={styles.playlistPreviewImage} onPress={props.onPress}>
                <Image source={props.value.image} style={styles.playlistPreviewImage}></Image>
            </TouchableOpacity>
            <Text style={styles.title}>{props.value.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    playlistPreviewImage: {
        width: 120, 
        height: 120, 
        alignSelf: 'center', 
    }, 
    playlistContainer: {
        padding: 30, 
        paddingTop: 10
    }, 
    title: {
        paddingTop: 10, 
        width: 120, 
        textAlign: 'center'
    }

});
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';


export default function Playlist ({playlist, onPress}) {
    // console.log("here playlist inside comp", playlist)
    return (
        <View style={styles.playlistContainer}>
            <TouchableOpacity style={styles.playlistPreviewImage} onPress={onPress}>
                <Image source={playlist.image} style={styles.playlistPreviewImage}></Image>
            </TouchableOpacity>
            <Text style={styles.title}>{playlist.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    playlistPreviewImage: {
        width: 120, 
        height: 120, 
        alignSelf: 'center', 
        borderRadius: 15, 
    }, 
    playlistContainer: {
        padding: 30, 
        paddingTop: 10
    }, 
    title: {
        paddingTop: 10, 
        width: 120, 
        textAlign: 'center',
        fontFamily: "Montserrat"
    }

});
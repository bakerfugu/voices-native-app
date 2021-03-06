import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function PlaylistHome() {
    const navigation = useNavigation();
    return (
        <View style ={styles.container}>
            <Text>
                Welcome to the Playlist homepage. On this page, we need to implement the following: 
                1. Some playlists w/ the cover photos
                2. Profile image in top right. 

                
            </Text>
            <Button title={'List View of Playlist'} onPress={() => navigation.navigate('PlaylistListView')}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';

export default function PlaylistHome() {
    return (
        <View style ={styles.container}>
            <Text>
                Welcome to the Playlist homepage. On this page, we need to implement the following: 
                1. Some playlists w/ the cover photos
                2. Profile image in top right. 

                
            </Text>
            
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
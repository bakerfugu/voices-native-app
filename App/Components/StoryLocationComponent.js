import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ImageBackground } from 'react-native';
import LocationInfo from '../Components/LocationInfo.js';
export default function StoryLocationComponent () {
    return (
        <View style={styles.container}>
            <LocationInfo/>
            {/* <ListofStories/> */}

        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    }
});
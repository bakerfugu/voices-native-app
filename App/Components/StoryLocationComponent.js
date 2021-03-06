import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ImageBackground } from 'react-native';
import LocationInfo from './LocationInfo.js';
import ListOfStories from './ListOfStories.js';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';


export default function StoryLocationComponent () {
    const navigation = useNavigation();
    return (

        <View style={styles.container}>
            <ListOfStories/>
            <Button title={'Story Listening Page'} onPress={() => {navigation.navigate('StoryListen')}}/>

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
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import MapView from 'react-native-maps';

export default function MainMap() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            

           
            <Button title={'StoryList'} onPress={() => {navigation.navigate('StoryList')}}/>
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
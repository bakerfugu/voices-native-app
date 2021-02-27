import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';

export default function RecordHome() {
    return (
        <View style={styles.container}>
            <Text>
                Welcome to the recording tab. This page will represent the start of the recording process. 
                On this page, we need to add in a glowing button that willl allow the user to start/stop recording. 


                
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
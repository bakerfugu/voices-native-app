import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ImageBackground } from 'react-native';
import { Images } from '../Themes';
export default function LocationInfo () {
    return (
        <View style={styles.container}>
            <Text>99 Stories Available</Text>
            <View style={styles.background}>
                <ImageBackground source={Images.yellowOrb} resizeMode={'contain'} style={styles.orb}>
                    <Image source={Images.parliament} resizeMode='contain' style={styles.locationImage}/>
                </ImageBackground>
                
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'grey'
    },
    background: {
        width: '70%',
        aspectRatio: 1,
        // backgroundColor: 'pink'
        
    },
    orb: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    locationImage: {
        height: '80%',
        aspectRatio: 1,
    
    }
  

});
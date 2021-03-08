import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ImageBackground, ScrollView} from 'react-native';
import { Images } from '../Themes';
import StoryClip from './StoryClip.js';
import storyLocations from './StoryLocations';


export default function LocationInfo (locationIndex) {
    //console.log('This is location in LocationInfo', info.location);
    //console.log('This is num_stories in LocationInfo', info.num_stories);
    location = storyLocations[locationIndex];
    
    return (
        <View style={styles.container}>
            {/* <Text style={styles.locationTitle}>{location.title}</Text> */}
            <Text>{location.stories.length} Stories Available</Text>
            <View style={styles.background}>
                <ImageBackground source={Images.yellowOrb} resizeMode={'contain'} style={styles.orb}>
                    <Image source={location.image} resizeMode='contain' style={styles.locationImage}/>
                </ImageBackground>             
            </View>
            

        </View>


    );
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
        borderRadius: 400,
        aspectRatio: 1,
        alignSelf: 'center', 
        justifyContent: 'center',
        
    
    },
    flatlist: {
        marginTop: 20,
        flex: 1,
        width:'100%'
    }, 
    locationTitle: {
        fontSize: 30,
    
        fontWeight: 'bold',
        textAlign: 'center', 
    }
  

});
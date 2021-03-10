import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import StoryLocationComponent from '../../Components/StoryLocationComponent.js'
import storyLocations from '../../Components/StoryLocations';  
import { Ionicons } from '@expo/vector-icons'
    
export default function StoryList ({route, navigation}) {
    const {locationIndex} = route.params;

    useEffect(() => {
        console.log("this is storyLocations[locationIndex] ", storyLocations[locationIndex]);
        navigation.setOptions({
            title: storyLocations[locationIndex].title,
            numStories: storyLocations[locationIndex].stories.length
        });
    }, []);

    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            <View style={styles.header}>
                <View style={styles.backButton}>
                    <Ionicons name="chevron-back-outline" size={34} color="black" />
                </View>

                <View style={styles.titleView}> 
                    <Text style={styles.title}>
                        {storyLocations[locationIndex].title}
                        </Text>
                        <Text style={styles.numStories}>
                        {storyLocations[locationIndex].stories.length + " Stories Available"}
                        </Text>
                </View>

                <View style={styles.backButton}>

                </View>
                

            </View>

            <StoryLocationComponent locationIndex={locationIndex}/>
            
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 75,
        // backgroundColor: 'grey',
        left: 0,
        top: 0,
        flexDirection: 'row',
        paddingLeft: 10, 
        justifyContent: 'center'
        

    },
    test: {
        flex: 1,
        width: '100%',
        backgroundColor: 'lightblue'
    },
    titleView: {
        width:'75%',
        alignItems:'center',
       
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
        // backgroundColor: 'grey',
        width: '12.5%',


    },
    title: {
        marginTop: '5%',
        fontSize: 26, 
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '3%', 
    }
});

    

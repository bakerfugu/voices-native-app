import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ImageBackground, ScrollView} from 'react-native';
import { Images } from '../Themes';
import LocationInfo from './LocationInfo';
import StoryClip from './StoryClip.js';
import storyLocations from './StoryLocations';


export default function ListOfStories ({locationIndex}) {
    //console.log("this is props in ListOfStories ", props);
    //console.log("this is props.location in ListOfStories ", props.location);

    //console.log("This is storyLocations ", storyLocations);
    const locationInfo = storyLocations[locationIndex];

    

    return (
        <View style={styles.flatlist}>
            <FlatList
                data={locationInfo.stories}
                renderItem={(story) => {
                    console.log("Printing playlist: ", story);
                    return <StoryClip key={story.item.title} value={story.item}/>
                    }
                }
                keyExtractor={(item) => item.id}
                ListHeaderComponent={LocationInfo(locationIndex)}
            />

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
    flatlist: {
        // marginTop: 20,
        flex: 1,
        width:'100%'
    }
  

});
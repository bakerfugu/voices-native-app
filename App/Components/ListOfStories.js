import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ImageBackground, ScrollView} from 'react-native';
import { Images } from '../Themes';
import LocationInfo from './LocationInfo';
import StoryClip from './StoryClip.js';


export default function ListOfStories () {

    

    const DATA = [
        {
          id: "1",
          title: "First Item",
        },
        {
          id: "2",
          title: "Second Item",
        },
        {
          id: "3",
          title: "Third Item",
        },
        {
        id: "4",
        title: "First Item",
        },
        {
        id: "5",
        title: "Second Item",
        },
        {
        id: "6",
        title: "Third Item",
        }
    ];



    const renderItem = () => {
        return (
            <StoryClip/>
        );

    }


    return (
        <View style={styles.flatlist}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={LocationInfo}
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
        marginTop: 20,
        flex: 1,
        width:'100%'
    }
  

});
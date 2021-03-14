import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import Playlist from '../../Components/Playlist.js';
import { Images, Metrics } from '../../Themes';
import storyPlaylists from '../../Components/StoryPlaylists';




export default function PlaylistHome() {
    const navigation = useNavigation();


    let playlists = [];
    console.log("this is playlists ", storyPlaylists);
    for (let i = 0; i < storyPlaylists.length; i++) {
        let playlist = {
            title: storyPlaylists[i].title,
            image: storyPlaylists[i].image,
            stories: storyPlaylists[i].stories,
        }
        playlists.push(playlist);

    }

    for (let i = 0; i < storyPlaylists.length; i++) {
        let playlist = {
            title: storyPlaylists[i].title,
            image: storyPlaylists[i].image,
            stories: storyPlaylists[i].stories,
        }
        playlists.push(playlist);

    }


    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            {/* <Text style={styles.title}>My Playlists</Text> */}
            <View style={styles.header}/>
            

            <FlatList 
                    contentContainerStyle={styles.grid}
                    numColumns={2} 
                    data={playlists} 
                    // scrollEnabled={true}
                    directionalLockEnabled={true}
                    keyExtractor={(playlist, index) => index}
                    renderItem={(playlist) => {
                        console.log("Printing playlist: ", playlist);
                        return <Playlist key={playlist.item.title} value={playlist.item} onPress={() => navigation.navigate('PlaylistListView', {playlist: playlist})}/>
                        }
                    }
                    />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    grid: {
        marginBottom: 32, 
        marginTop: 10, 
        alignItems: 'center', 
    }, 

    photoContainer: {
        height: 10, 
        width: 10,
        padding: 100,
        paddingLeft: 200
    },
    profImage: {
        height: 100, 
        width: 100,
    }, 
    title: {
        alignSelf: 'center', 
        paddingRight: 200, 
    }, 
 
    profileHeader: {
        alignContent: 'flex-start', 

        textAlignVertical: 'center'
    },
    header: {
        width: '100%',
        height: Metrics.headerHeight,
    },

  });
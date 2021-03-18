import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import Playlist from '../../Components/Playlist.js';
import { Images, Metrics } from '../../Themes';

import { getPlaylists } from '../../Components/StoryPlaylists'

export default function PlaylistHome() {
    const navigation = useNavigation();

    const [playlists, setPlaylists] = useState(null);

    const retrievePlaylists = async () => {
        const gotPlaylists = await getPlaylists();
        setPlaylists(gotPlaylists)
    }

    useEffect(() => {
        retrievePlaylists();
    }, [])

    // console.log("got playlists?", playlists)
    return (
        <View style={styles.container}>
            <BackgroundGradient />
            <View style={styles.header} />

            {playlists && 
                <FlatList
                    contentContainerStyle={styles.grid}
                    numColumns={2}
                    data={playlists}
                    // scrollEnabled={true}
                    directionalLockEnabled={true}
                    keyExtractor={(playlist) => playlist.title}
                    renderItem={({item}) => (
                        <Playlist 
                            key={item.title} 
                            playlist={item} 
                            onPress={() => navigation.navigate('PlaylistListView', { storyReferencePlaylist: item })} 
                        />
                    )}
                />
            }

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
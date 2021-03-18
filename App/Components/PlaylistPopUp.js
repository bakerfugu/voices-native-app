import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';
import LongButton from './LongButton'
import { LinearGradient } from 'expo-linear-gradient';
import Playlist from './Playlist.js';
import { MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getPlaylists } from './StoryPlaylists'


export default function PlaylistPopUp({ modalVisibile, setModalVisibility, setConfirmation, createPlaylist, storyObject }) {

    const [playlists, setPlaylists] = useState(null);

    const retrievePlaylists = async () => {
        const gotPlaylists = await getPlaylists();
        setPlaylists(gotPlaylists)
    }

    useEffect(() => {
        retrievePlaylists();
    }, [])

    const addStoryToPlaylist = async (playlist) => {
        const addedStoryReferencesString = await AsyncStorage.getItem(`userPlaylist-${playlist.title}`);
        const userAddedStoryReferences = addedStoryReferencesString ? JSON.parse(addedStoryReferencesString) : [];

        const newStoryReference = {
            locationIndex: storyObject.locationIndex,
            title: storyObject.title
        }
        
        await AsyncStorage.setItem(`userPlaylist-${playlist.title}`, JSON.stringify([...userAddedStoryReferences, newStoryReference]))

        setModalVisibility(false);
        setConfirmation(true)
    }

    const createNewPlaylist = async () => {
        setModalVisibility(false);
        createPlaylist(true);
    }

    return (
        <Modal
            visible={modalVisibile}
            transparent={true}
        >
            <View style={styles.centeredView}>


                <View style={styles.modalView}>
                    <MaterialIcons name='cancel' size={28} color='black' onPress={() => setModalVisibility(false)} style={styles.cancel} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 24, fontFamily: "Montserrat" }}>Add to Playlist</Text>
                    </View>

                    <View style={{ width: '70%', height: 60, alignSelf: 'center', marginTop: 10 }}>
                        <LongButton label='Create New Playlist' onPress={() => createNewPlaylist()} disabled={false} />
                    </View>

                    {playlists && 
                        <FlatList
                            contentContainerStyle={styles.grid}
                            numColumns={2}
                            data={playlists}
                            scrollEnabled={false}
                            // scrollEnabled={true}
                            directionalLockEnabled={true}
                            keyExtractor={(playlist) => playlist.title}
                            renderItem={({item}) => (
                                <Playlist 
                                    key={item.title} 
                                    playlist={item} 
                                    onPress={() => addStoryToPlaylist(item)} 
                                />
                            )}
                        />
                    }

                </View>

            </View>


        </Modal>

    )
}

const styles = StyleSheet.create({
    centeredView: {

        height: '100%',
        justifyContent: "center",
        alignItems: "stretch",
        marginTop: 150


    },
    modalView: {

        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 35,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    grid: {
        marginBottom: 32,

        alignItems: 'center',

    },
    cancel: {
        position: 'absolute',
        left: 15,
        top: 15
    }
});
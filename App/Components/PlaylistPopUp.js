import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';
import LongButton from './LongButton'
import { LinearGradient } from 'expo-linear-gradient';
import Playlist from './Playlist.js';
import storyPlaylists from './StoryPlaylists';
import { MaterialIcons } from '@expo/vector-icons'

export default function PlaylistPopUp ({modalVisibile, setModalVisibility, setConfirmation, createPlaylist}) {

    let playlists = [];
    // console.log("this is playlists ", storyPlaylists);
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
        
    console.log(modalVisibile)

    const openSuccessModal = () => {
        setModalVisibility(false);
        setConfirmation(true)
    }

    const createNewPlaylist = () => {
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
                        <MaterialIcons name='cancel' size={28} color='black' onPress={() => setModalVisibility(false)} style={styles.cancel}/>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            
                            
                            <Text style={{fontSize: 24, fontFamily: "Montserrat"}}>Add to Playlist</Text>

                            

                        </View>
            
                        <View style={{width: '70%', height: 60, alignSelf: 'center', marginTop: 10}}>
                            <LongButton label='Create New Playlist' onPress={() => createNewPlaylist()}  disabled={false}/>
                        </View>

                        
                        <FlatList 
                                contentContainerStyle={styles.grid}
                                numColumns={2} 
                                data={playlists} 
                                scrollEnabled={false}
                                
                                // scrollEnabled={true}
                                directionalLockEnabled={true}
                                keyExtractor={(playlist, index) => index}
                                renderItem={(playlist) => {
                                    // console.log("Printing playlist: ", playlist);
                                    return <Playlist key={playlist.item.title} value={playlist.item} onPress={openSuccessModal}/>
                                    }
                                }
                        />
                        
                        
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
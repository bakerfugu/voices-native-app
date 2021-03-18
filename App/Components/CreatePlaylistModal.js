import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, FlatList, Button, TextInput } from 'react-native';
import LongButton from './LongButton'
import { MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function CreatePlaylistModal ({visible, setVisible, setConfirmation, storyObject}) {

    const [playlistName, setPlaylistName] = useState('');

    const create = async () => {
        const playlistsString = await AsyncStorage.getItem(`userPlaylists`);
        const userAddedPlaylists = playlistsString ? JSON.parse(playlistsString) : [];

        const newPlaylist = {
            title: playlistName,
            stories: [],
            image: storyObject.image,
        }
        await AsyncStorage.setItem(`userPlaylists`, JSON.stringify([...userAddedPlaylists, newPlaylist]));

        const addedStoryReferencesString = await AsyncStorage.getItem(`userPlaylist-${newPlaylist.title}`);
        const userAddedStoryReferences = addedStoryReferencesString ? JSON.parse(addedStoryReferencesString) : [];

        const newStoryReference = {
            locationIndex: storyObject.locationIndex,
            title: storyObject.title
        }
        
        await AsyncStorage.setItem(`userPlaylist-${newPlaylist.title}`, JSON.stringify([...userAddedStoryReferences, newStoryReference]));

        setConfirmation(true);
        setVisible(false);
    }

    return (
        <Modal
            visible={visible}
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                        <MaterialIcons name='cancel' size={28} color='black' onPress={() => setVisible(false)} style={styles.cancel}/>
                        
                        <TextInput
                            style={styles.textInput} 
                            placeholder="Title" 
                            onChangeText={text => setPlaylistName(text)}
                        >

                        </TextInput>

                        <View style={{width: '50%', marginVertical: '5%', marginBottom: '8%'}}>
                            <LongButton label='Create' onPress={create} disabled={false}/>
                        </View>
                        
                        
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
      
        
        
      },
      modalView: {
  
        marginHorizontal: '10%',
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 35,
        paddingTop: '20%',
        
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
    },
    textInput: {
    
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        borderColor: '#F1B600',
        borderBottomWidth: 5,
        fontSize: 26,
        fontFamily: 'Montserrat', 
        marginBottom: "5%"
    }
});


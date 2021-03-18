import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import storyPlaylists from '../../Components/StoryPlaylists';
import Playlist from '../../Components/Playlist';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import StoryProfiles from '../../Components/StoryProfiles'
import StoryClipForProfile from '../../Components/StoryClipForProfile'
import SharingModal from '../../Components/SharingModal';
import CreatePlaylistModal from '../../Components/CreatePlaylistModal.js';
import Confirmation from '../../Components/ConfirmationModal';  
import NavigationModal from '../../Components/NavigationModal';
import PlaylistPopUp from '../../Components/PlaylistPopUp';

export default function userProfile ({route, navigation}) {
    const [sharingModal, openSharing] = useState(false);
    const [createPlaylistModal, createPlaylist] = useState(false);
    const[modalVisibile, setModalVisibility] = useState(false);
    const[confirmationModal, setConfirmation] = useState(false);
    const [profile, setProfile] = useState("");
    const [clicked, setClicked] = useState();

    let storyList;
    if (profile.stories) {
    storyList = profile.stories.map((story) => 
  
        <StoryClipForProfile
            story={story}
            setModalVisibility={setModalVisibility}
            openSharing={openSharing}
            setClicked={setClicked}
        />
    );
  }

  useEffect( () => {
     const {author} = route.params;
     
     const profile = StoryProfiles[author];
     setProfile(profile);
     console.log(profile.stories)
     
  }, []);

 

    return (
        <View style={{flex:1}}>
            <BackgroundGradient/>
        
            <ScrollView style={styles.scroll}>
            
            <Image source={Images.profSettings} style={styles.settings} resizeMode='contain' />
            <View style={styles.photoContainer}>
                <View style={styles.profImageView}>
                <Image 
                    source={profile.image}
                    resizeMode='contain' 
                    style={styles.profImage}
                />
                </View>
                
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.handle}>
                    {profile.author}
                </Text>
                <Text style={styles.location}>
                   {profile.location}
                </Text>


                <View style={styles.metaData}>
                    <Text>
                        <Text style={styles.number}>{profile.stories ? profile.stories.length : 0}</Text> Stories Told
                    </Text>
                    <Image source={Images.dot} style={styles.dot} />
                    <Text>
                    <Text style={styles.number}>{profile.playlists ? profile.playlists.length : 0}</Text> Playlists 
                    </Text>
                </View>
           
                <View style={styles.bioContainer}>
                    <Text style={{fontFamily: 'Montserrat', fontSize:16}}>{profile.bio}</Text>
                </View>
              
            </View>
            

            <View style={{width: '100%' ,flexDirection: 'center'}}>
                <Text id="stories" style={styles.s_header}>Stories</Text>
                <View style={{justifyContent:'center', alignItems: 'center', flex: 1, marginTop: '5%'}}>
                    {storyList}
                </View>
            </View>
            {/* <View style={{width: '100%' ,flexDirection: 'center', alignItems: 'center'}}>
                <Text style={styles.p_header}>Playlists</Text>
                <FlatList 
                scrollEnabled={false}
                contentContainerStyle={styles.grid}
                numColumns={2} 
                data={storyPlaylists} 
                // scrollEnabled={true}
                directionalLockEnabled={true}
                keyExtractor={(playlist, index) => index}
                renderItem={(playlist) => {
                    // console.log("Printing playlist: ", playlist);
                    return <Playlist key={playlist.item.title} value={playlist.item} onPress={() => navigation.navigate('PlaylistListView', {playlist: playlist.item})}/>
                    }
                }
                />
                
            </View> */}

            
         
        </ScrollView>
            { modalVisibile && <PlaylistPopUp modalVisible={modalVisibile} setModalVisibility={setModalVisibility} setConfirmation={setConfirmation} createPlaylist={createPlaylist}/> }
            
            { confirmationModal && <Confirmation visible={confirmationModal} setConfirmation={setConfirmation}/> }

            { sharingModal && <SharingModal visible={sharingModal} setVisible={openSharing} title={clicked.title} author={clicked.author}/> }

            { createPlaylistModal && <CreatePlaylistModal visible={createPlaylistModal} setVisible={createPlaylist}/> }
        </View>

    );


}

const styles = StyleSheet.create({
    settings: {
        height: 30,
        width: 30,
        alignSelf: 'flex-end',
        marginTop: '2%',
        marginRight: '4%',
        marginBottom: '-3%'
    },
    photoContainer: {
        // flex: 1,
        // width: '100%',
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        backgroundColor: 'white',
        marginBottom: 30, 
        alignSelf: 'center'
    }, 
    infoContainer: {
        flex: 1,
        width: '100%',
        marginTop: '-5%',
        alignItems: 'center',
        
    },
    scroll: {
        flex: 1,
        height:'100%',
        width: '100%',
     
    },
    handle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    location: {
        fontWeight: '100',
        marginTop: '1%'
    },
    metaData:{
        marginTop: '1%',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: '100'
    },
    dot: {
        height: 15,
        width: 15,
        marginLeft: '3%',
        marginRight: '3%'
    },
    number: {
        fontWeight: 'bold'
    },
    bioContainer: {
        marginTop: '3%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#F1B600',
        alignItems: 'center',
        width: '90%',
        height: 'auto',
        padding: '3%'
    },
    s_header: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: '5%',
        marginTop: '10%',
        marginBottom: '-3%'

    },
    p_header: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: '5%',
        marginTop: '10%',
        marginBottom: '4%',
        alignSelf: 'flex-start'
    },
    playlistImg: {
        height: 150,
        width: 150,
        marginLeft: '5%'
    },
    playlistTitle: {
        marginLeft: '5%',
        fontSize: 16
    },
    playlistObj: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '2%'
    },
    listRow: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '6%'

    },
    listContainer: {
        alignItems: 'center'
    },
    profImage: {
        height: 200,
        aspectRatio: 1,
        borderRadius: 100,
        borderColor: '#F1B600',
        borderWidth:3,
        
    },

  
});
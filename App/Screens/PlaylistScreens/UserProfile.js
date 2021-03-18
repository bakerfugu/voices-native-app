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
import StoryClipForProfile from '../../Components/StoryClipForProfile'
import { getPlaylists } from '../../Components/StoryPlaylists'
import SharingModal from '../../Components/SharingModal';
import CreatePlaylistModal from '../../Components/CreatePlaylistModal.js';
import Confirmation from '../../Components/ConfirmationModal';  
import NavigationModal from '../../Components/NavigationModal';
import PlaylistPopUp from '../../Components/PlaylistPopUp';



export default function userProfile () {
    // let data = {
    //     handle: '@taylorl',
    //     location: 'Los Angeles',
    //     storyCt: 2,
    //     playlistCt: 4, 
    //     bioText: "fakebio"
    // };

const [profile, setProfile] = useState({
    handle: "",
    image: "",
    bio: "",
});
const [userStories, setUserStories] = useState('')
const [bio, setBio] = useState('')
const [playlists, setPlaylists] = useState('')

const [sharingModal, openSharing] = useState(false);
const [createPlaylistModal, createPlaylist] = useState(false);
const[modalVisibile, setModalVisibility] = useState(false);
const[confirmationModal, setConfirmation] = useState(false);
const [clicked, setClicked] = useState("");

const getProfile = async () => {
try {
    const value = await AsyncStorage.getItem('profile');
    const parsed = JSON.parse(value)
    setProfile(parsed);
    console.log("These are the keys", await AsyncStorage.getAllKeys())
    const storiesString = await AsyncStorage.getItem('userStories')
    const stories = storiesString ? JSON.parse(storiesString) : [];
    setUserStories(stories)
    const gotPlaylists = await getPlaylists();
    setPlaylists(gotPlaylists);
    // console.log("These are your playlists", playlists)
    
}
catch (e) {
    console.log(e)
}


}
  useEffect( () => {
     getProfile();
  }, []);

  const getPermissionAsync = async (permission) => {
    const { status } = await Permissions.askAsync(permission);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll or camera permissions to make this work!');
    }
  }
  const pickImage = async () => {
    await getPermissionAsync(Permissions.CAMERA_ROLL);
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
    });
    if (!result.cancelled) {
      profile.image = result.uri;
      setProfile(profile);
      const updated = JSON.stringify(profile);
      await AsyncStorage.setItem('profile', updated)
    }
  }

  const updateProfile = async (text) => {
      profile.bio = bio;
      setProfile(bio);
      const updated = JSON.stringify(profile);
      await AsyncStorage.setItem('profile', updated);
  }

    let storyList;
    if (userStories) {
    // console.log('here are my user stories',userStories)
    storyList = userStories.map((story) => 
  
        <StoryClipForProfile
            story={story}
            setModalVisibility={setModalVisibility}
            openSharing={openSharing}
            setClicked={setClicked}
        />
    );
  }

  
    const navigation = useNavigation();

    return (

        <View style={{flex:1}}>
            <BackgroundGradient/>
        
            <ScrollView style={styles.scroll}>

            <Ionicons name="chevron-back-outline" size={34} color="black" onPress={() => navigation.goBack()} style={styles.backButton} />
            <Ionicons name={"settings-outline"} size={30} color={'black'} style={styles.settings}/>
            <TouchableOpacity style={styles.photoContainer} onPress={pickImage}>
                {profile?.image? 
                <View style={styles.profImageView}>
                <Image 
                    source={{uri: profile.image}}
                    resizeMode='cover' 
                    style={styles.profImage}
                />
                </View>
                : 
                <Ionicons name="ios-person-add" size={100} color="black" />}
            </TouchableOpacity>

            <View style={styles.infoContainer}>
                <Text style={styles.handle}>
                    {profile?.handle ? profile.handle : ""}
                </Text>
                <Text style={styles.location}>
                    San Francisco
                </Text>


                <View style={styles.metaData}>
                    <Text>
                        <Text style={styles.number}>{userStories ? userStories.length : 0}</Text> Stories Told
                    </Text>
                    <Image source={Images.dot} style={styles.dot} />
                    <Text>
                    <Text style={styles.number}>{playlists ? playlists.length : 0}</Text> Playlists 
                    </Text>
                </View>
                    
                {profile?.bio?
                    <TouchableOpacity style={styles.bioContainer} >
                        <Text style={{fontFamily: "Montserrat", fontSize:18}}>{profile.bio}</Text>
                    </TouchableOpacity>
                    :
                    <TextInput
                        multiline={true}
                        fontSize={18}
                        style={styles.bioContainer}
                        placeholder="Enter your bio here" 
                        onChangeText={(text) => setBio(text)}
                        onSubmitEditing={(text) => updateProfile(text)}
                    />
                }
                
              
            </View>
            

            <View style={{width: '100%' ,flexDirection: 'center'}}>
                <Text id="stories" style={styles.s_header}>Your Stories</Text>
                <View style={{justifyContent:'center', alignItems: 'center', flex: 1}}>
                    {userStories.length>0 ? 
                    
                    <View style={{justifyContent:'center', alignItems: 'center', flex: 1, marginTop: '5%', width: '100%'}}>
                        {storyList}
                    </View>
                    :
                    
                    <View style={{width: '90%', padding: '8%', borderColor: '#FCC201', borderWidth: 2, borderRadius: 15, marginTop: '5%'}}>
                        <Text style={{fontFamily: 'Montserrat', fontSize: 16}}>You have not posted any stories yet!</Text>
                    </View>
                    }

                </View>
            </View>
            <View style={{width: '100%',flexDirection: 'center', alignItems: 'center'}}>
                <Text style={styles.p_header}>Your Playlists</Text>

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
                
            </View>

            
         
        </ScrollView>

        { modalVisibile && 
                <PlaylistPopUp 
                    modalVisible={modalVisibile}
                    setModalVisibility={setModalVisibility} 
                    setConfirmation={setConfirmation} 
                    createPlaylist={createPlaylist}
                    storyObject={clicked} 
                /> 
            }
            
            { confirmationModal && <Confirmation visible={confirmationModal} setConfirmation={setConfirmation}/> }

            { sharingModal && <SharingModal visible={sharingModal} setVisible={openSharing} title={clicked.title} author={clicked.author}/> }

            { createPlaylistModal && 
                <CreatePlaylistModal 
                    visible={createPlaylistModal} 
                    setVisible={createPlaylist}
                    setConfirmation={setConfirmation} 
                    storyObject={clicked} 
                /> 
            }
        </View>
    );
        

}

const styles = StyleSheet.create({
    settings: {
        position: 'absolute',
        top: 10,
        right: 10
        
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
        alignSelf: 'center',
        marginTop: '10%'
    }, 
    infoContainer: {
        flex: 1,
        width: '100%',
        marginTop: '1%',
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
        alignItems: 'flex-start',
        width: '90%',
        height: 'auto',
        padding: '3%',
        textAlignVertical: 'bottom',
        fontFamily: 'Montserrat',
        
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
        borderWidth:3
        
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    grid: {
        paddingTop: 5,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#F1B600',
        // marginBottom: 32,
        alignItems: 'flex-start',
    },
  
});
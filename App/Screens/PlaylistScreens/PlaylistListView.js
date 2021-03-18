import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Image, Modal, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StoryClip from '../../Components/StoryClip';
import CircleList from 'react-native-circle-list'
import { Images } from '../../Themes';
import BackgroundGradient from '../../Components/BackgroundGradient';
import Header from '../../Components/Header';
import PlaylistPopUp from '../../Components/PlaylistPopUp';
import { Ionicons } from '@expo/vector-icons'
import Confirmation from '../../Components/ConfirmationModal';  
import SharingModal from '../../Components/SharingModal';
import CreatePlaylistModal from '../../Components/CreatePlaylistModal.js';
import { getPlaylistWithUserStories } from '../../Components/StoryPlaylists'

const { width, height } = Dimensions.get('screen');
const RADIUS = (1.6 * width) / 2;

const data = [
    {
        key: 1,
        value: 1,
    },
    {
        key: 2,
        value: 1,
    },
    {
        key: 3,
        value: 1,
    },
    {
        key: 4,
        value: 1,
    },
    {
        key: 5,
        value: 1,
    },
    {
        key: 6,
        value: 1,
    },
    {
        key: 7,
        value: 1,
    },
    {
        key: 8,
        value: 1,
    },
    {
        key: 9,
        value: 1,
    },
    {
        key: 10,
        value: 1,
    },
    {
        key: 11,
        value: 1,
    },
    {
        key: 12,
        value: 1,
    }
];

export default function PlaylistListView({ route, navigation }) {
    const { storyReferencePlaylist } = route.params;

    const [currStory, setStory] = useState(null);
    const [modalVisibile, setModalVisibility] = useState(false)
    const [playlist, setPlaylist] = useState(storyReferencePlaylist);
    const [loaded, setLoaded] = useState(false);

    const [listRef, setRef] = useState(null);
    const [sharingModal, openSharing] = useState(false);
    const [createPlaylistModal, createPlaylist] = useState(false);
    const [confirmationModal, setConfirmation] = useState(false);

    const retrievePlaylist = async () => {
        const gotPlaylist = await getPlaylistWithUserStories(storyReferencePlaylist.title);
        // console.log("got playlist in listview", gotPlaylist);
        setPlaylist(gotPlaylist);
        setStory({
            info: gotPlaylist.stories[0],
            index: 0
        });
        setLoaded(true);
    }

    useEffect(() => {
        retrievePlaylist();
    }, [])

    const renderItem = ({ item, index }) => {
        const storyIndex = index % playlist.stories.length;
        const storyToDisplay = playlist.stories[storyIndex]
        return (
            <ImageBackground source={Images.yellowOrb} resizeMode='contain' style={{height: 80, width: 80, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={storyToDisplay.image} resizeMode='cover' style={{height: 60, width: 60, borderRadius: 30}}/>
            </ImageBackground>    
        );
    }

    const nextStory = () => {  
        const index = currStory.index;
        const new_index = (index + 1) % 12
        const storyIndex = new_index % playlist.stories.length;

        const storyObject = playlist.stories[storyIndex];
        listRef.scrollToIndex(new_index);
        setStory({
            info: storyObject,
            index: new_index
        });
    }
    const prevStory = () => {
        const index = currStory.index;
        const new_index = (index - 1 + 12) % 12
        const storyIndex = new_index % playlist.stories.length;

        const storyObject = playlist.stories[storyIndex];
        listRef.scrollToIndex(new_index);
        setStory({
            info: storyObject,
            index: new_index
        });
    }

    return (
        <View style={styles.container}>
            <BackgroundGradient />

            <Header playlist={playlist} page='Playlist-ListView' title={playlist.title} />
            <View style={styles.flatlist}>
                <View style={styles.backgroundCircle} />

                {loaded &&
                    <CircleList
                        data={data}
                        visibilityPadding={3}
                        renderItem={renderItem}
                        radius={RADIUS}
                        keyExtractor={(item) => `${item.key}`}
                        innerRef={component => setRef(component)}
                        elementCount={12}
                        selectedItemScale={2.7}
                        swipeSpeedMultiplier={40}
                        containerStyle={{ paddingTop: 76, marginBottom: '3%' }}
                        onScrollEnd={(item) => {
                            const index = item % playlist.stories.length;
                            setStory({
                                info: playlist.stories[index],
                                index: item,
                            })
                        }}
                    />
                }
            </View>

            <View style={styles.arrows}>
                <Ionicons name='arrow-back-sharp' color='#FCC201' size={48} onPress={prevStory}/>
                <Ionicons name='arrow-forward-sharp' color='#FCC201' size={48} onPress={nextStory}/>
            </View>

            {currStory &&
                <StoryClip
                    storyObject={currStory.info} 
                    setModalVisibility={setModalVisibility}
                    openSharing={openSharing}
                />
            }
            
            { modalVisibile && 
                <PlaylistPopUp 
                    modalVisible={modalVisibile}
                    setModalVisibility={setModalVisibility} 
                    setConfirmation={setConfirmation} 
                    createPlaylist={createPlaylist}
                    storyObject={currStory.info} 
                /> 
            }
            
            { confirmationModal && <Confirmation visible={confirmationModal} setConfirmation={setConfirmation}/> }

            { sharingModal && <SharingModal visible={sharingModal} setVisible={openSharing} title={currStory.info.title} author={currStory.info.author}/> }

            { createPlaylistModal && 
                <CreatePlaylistModal 
                    visible={createPlaylistModal} 
                    setVisible={createPlaylist}
                    setConfirmation={setConfirmation} 
                    storyObject={currStory.info} 
                /> 
            }

        </View>

    );

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        height: 100,
        width: '100%'
    },
    flatlist: {
        //marginTop: '6%',
        //marginBottom: 20,
        marginBottom: height / 500,
        marginTop: height / 80,
        // flex: 1,
        width: '100%',
        // backgroundColor: 'grey',s
    },
    backgroundCircle: {
        borderColor: '#FCC201',
        borderWidth: 10,
        width: RADIUS * 2,
        aspectRatio: 1,
        borderRadius: RADIUS,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 120,
    },
    arrows: {
        marginTop: '-10%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      
        // backgroundColor: 'grey'
    }
});
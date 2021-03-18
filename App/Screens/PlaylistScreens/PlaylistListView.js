import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Image, Modal, Dimensions, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StoryClip from '../../Components/StoryClip';
import  CircleList  from 'react-native-circle-list'
import {Images} from '../../Themes';
import BackgroundGradient from '../../Components/BackgroundGradient';
import Header from '../../Components/Header';
import PlaylistPopUp from '../../Components/PlaylistPopUp';
import { Ionicons } from '@expo/vector-icons'
import Confirmation from '../../Components/ConfirmationModal';  
import SharingModal from '../../Components/SharingModal';
import CreatePlaylistModal from '../../Components/CreatePlaylistModal.js';


const {width, height} = Dimensions.get('screen');
const RADIUS = (1.6 * width) / 2;  

export default function PlaylistListView ({route, navigation}) {

    const {playlist} = route.params;

    //const[currStory, setStory] = useState('');
    const[currStory, setStory] = useState({
        info: playlist.stories[0],
        index: 0
     })
    const[modalVisibile, setModalVisibility] = useState(false);
    const[listRef, setRef] = useState(null);
    const [sharingModal, openSharing] = useState(false);
    const [createPlaylistModal, createPlaylist] = useState(false);
    const[confirmationModal, setConfirmation] = useState(false);

    useEffect(() => {
        // console.log(currStory)
    }, [currStory])

    // useEffect(() => {
    //     console.log(playlist.stories[0])
    //     const newStory = playlist.stories[0]
    //     setStory(newStory)
    // }, [])

    useEffect(() => {
        //const {locationIndex} = route.params;
        const story = playlist.stories[0];
        setStory({
            info: story,
            index: 0,
        })
    }, []);

    const data = [

        {
            key: 1, 
            value: 1,
        },
        {
            key: 2, 
            value: 1,
        } , 
        {
            key: 3, 
            value: 1,
        } ,    
        {
            key: 4, 
            value: 1,
        }  ,
        {
            key: 5, 
            value: 1,
        } , 
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


    
    const renderItem = ({item, index}) => {
        console.log(item);
        let storyIndex = index % playlist.stories.length;
            return (
                <ImageBackground source={Images.yellowOrb} resizeMode='contain' style={{height: 80, width: 80, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={playlist.stories[storyIndex].image} resizeMode='cover' style={{height: 62, width: 62, borderRadius: '50%'}}/>
                </ImageBackground>    
        );
    }

    const nextStory = () => {  
        console.log('next story')
        const index = currStory.index;
        const new_index = (index + 1) % 12
        let storyIndex = new_index % playlist.stories.length;
        listRef.scrollToIndex(new_index);
        setStory({
            info: playlist.stories[storyIndex],
            index: new_index
        });
    }
    const prevStory = () => {
        
        const index = currStory.index;
        let new_index;
        if (index == 0) {
            new_index = 11
        }
        else {
            new_index = index - 1;
        }
        console.log(new_index)

        let storyIndex = new_index % playlist.stories.length;
        listRef.scrollToIndex(new_index);
        setStory({
            info: playlist.stories[storyIndex],
            index: new_index
        });
        
    }

    return (
        <View style={styles.container}>
            <BackgroundGradient/>
            
            <Header playlist={playlist} page='Playlist-ListView' title={playlist.title}/>
            <View style={styles.flatlist}>

                <View style ={styles.backgroundCircle}/>
                <CircleList
                    elementCount={12}
                    selectedItemScale={2.7}
                    swipeSpeedMultiplier={40}
                    containerStyle={{paddingTop: 80, marginBottom: '2%'}}
                    onScrollEnd={(item) => {
                        let index = item % storyLocations[locationIndex].stories.length;
                        setStory({
                            info: storyLocations[locationIndex].stories[index],
                            index: item
                        })
                    }}


                    data={data}
                    innerRef={component => setRef(component)}
                    visibilityPadding={3}
                    renderItem={renderItem}
                    radius={RADIUS}
                    keyExtractor={(item) => `${item.key}`}
                    //keyExtractor={(item) => item.id}
                    elementCount={12}
                    selectedItemScale={2.7}
                    swipeSpeedMultiplier={40}
                    containerStyle={{paddingTop: 76, marginBottom: '3%'}}
                    onScrollEnd={(item) => {
                        let index = item % playlist.stories.length;
                        //setStory(playlist.stories[index])
                        setStory({
                            info: playlist.stories[index],
                            index: item
                        })
                    }}
                    />
            </View>

            <View style={styles.arrows}>
                <Ionicons name='arrow-back-sharp' color='#FCC201' size={48} onPress={prevStory}/>
                <Ionicons name='arrow-forward-sharp' color='#FCC201' size={48} onPress={nextStory}/>

            </View>

            <StoryClip
                storyObject={currStory.info} 
                setModalVisibility={setModalVisibility}
                openSharing={openSharing}
            />
            
            { modalVisibile && <PlaylistPopUp modalVisible={modalVisibile} setModalVisibility={setModalVisibility} setConfirmation={setConfirmation} createPlaylist={createPlaylist}/> }
            
            { confirmationModal && <Confirmation visible={confirmationModal} setConfirmation={setConfirmation}/> }

            { sharingModal && <SharingModal visible={sharingModal} setVisible={openSharing} title={currStory.info.title} author={currStory.info.author}/> }

            { createPlaylistModal && <CreatePlaylistModal visible={createPlaylistModal} setVisible={createPlaylist}/> }

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
        marginBottom: height/500,
        marginTop: height/80,
        // flex: 1,
        width:'100%',
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
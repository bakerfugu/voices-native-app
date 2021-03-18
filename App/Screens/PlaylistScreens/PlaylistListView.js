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
import storyLocations from "../../Components/StoryLocations";


const {width, height} = Dimensions.get('screen');
const RADIUS = (1.6 * width) / 2;  

export default function PlaylistListView ({route, navigation}) {


    const getStory = (locationIndex, storyTitle) => {
        // console.log("hello part 1")
        let story = [];

         console.log("hello part 2", storyLocations[locationIndex]);
        for (const story of storyLocations[locationIndex].stories) {
          //story.push(...(location.stories.filter(story => story.title === storyTitle)));
          if (story.title === storyTitle) {
            return story;
          }
        }
      }

    const {playlist} = route.params;
    console.log("this is playlist", playlist);
    //const[currStory, setStory] = useState('');
    const storyObject = playlist.stories[0];
    const[currStory, setStory] = useState({
        info: getStory(storyObject.locationIndex, storyObject.title),
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
        const storyObject = playlist.stories[0];
        console.log("this is storyObj ", storyObject);
        //const storyObject = storyLocation.stories[storyIndex];
        //console.log("this is storyObject ", storyObject);
        const story = getStory(storyObject.locationIndex, storyObject.title);
        console.log("this is story ", story);
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
        const storyObject = playlist.stories[storyIndex];
        //console.log("this is storyObj ", storyObject);
        //const storyObject = storyLocation.stories[storyIndex];
        //console.log("this is storyObject ", storyObject);
        const story = getStory(storyObject.locationIndex, storyObject.title);
            return (
                <ImageBackground source={Images.yellowOrb} resizeMode='contain' style={{height: 80, width: 80, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={story.image} resizeMode='cover' style={{height: 62, width: 62, borderRadius: '50%'}}/>
                </ImageBackground>    
        );
    }

    const nextStory = () => {  
        console.log('next story')
        const index = currStory.index;
        const new_index = (index + 1) % 12
        let storyIndex = new_index % playlist.stories.length;

        const storyObject = playlist.stories[storyIndex];
        //console.log("this is storyObj ", storyObject);
        //const storyObject = storyLocation.stories[storyIndex];
        //console.log("this is storyObject ", storyObject);
        const story = getStory(storyObject.locationIndex, storyObject.title);
        console.log("this is story ", story);

        listRef.scrollToIndex(new_index);
        setStory({
            info: story,
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
        const storyObject = playlist.stories[storyIndex];
        //console.log("this is storyObj ", storyObject);
        //const storyObject = storyLocation.stories[storyIndex];
        //console.log("this is storyObject ", storyObject);
        const story = getStory(storyObject.locationIndex, storyObject.title);
        console.log("this is story ", story);

        //let storyIndex = new_index % playlist.stories.length;
        listRef.scrollToIndex(new_index);
        setStory({
            info: story,
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



                    data={data}
                    innerRef={component => setRef(component)}
                    visibilityPadding={3}
                    renderItem={renderItem}
                    radius={RADIUS}
                    //keyExtractor={(item) => `${item.key}`}
                    keyExtractor={(item) => item.id}
                    elementCount={12}
                    selectedItemScale={2.7}
                    swipeSpeedMultiplier={40}
                    containerStyle={{paddingTop: 76, marginBottom: '3%'}}
                    onScrollEnd={(item) => {
                        let index = item % playlist.stories.length;
                        let storyObject = playlist.stories[index];
                        //setStory(playlist.stories[index])
                        setStory({
                            info: getStory(storyObject.locationIndex, storyObject.title),
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
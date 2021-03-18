import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image} from 'react-native';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import { Images } from '../../Themes/index.js';
import staticStoryLocations, { getAppendedUserStories } from '../../Components/StoryLocations';  
import CircleList from 'react-native-circle-list';
import StoryClip from '../../Components/StoryClip'
import Header from '../../Components/Header'
import PlaylistPopUp from '../../Components/PlaylistPopUp';  
import Confirmation from '../../Components/ConfirmationModal';  
import NavigationModal from '../../Components/NavigationModal';
import { Ionicons } from '@expo/vector-icons'
import { setCustomRefreshControl } from 'react-native-global-props';
import SharingModal from '../../Components/SharingModal';
import CreatePlaylistModal from '../../Components/CreatePlaylistModal.js';


const {width, height} = Dimensions.get('screen');
const RADIUS = (1.6 * width) / 2;   

export default function StoryList ({route, navigation}) {


    const {locationIndex} = route.params;

    const[currStory, setStory] = useState({
        info: staticStoryLocations[locationIndex].stories[0],
        index: 0
     })
    const[storyLocation, setStoryLocation] = useState(staticStoryLocations[locationIndex]);
    // console.log('Printing story locations', storyLocation, staticStoryLocations)
    const[modalVisibile, setModalVisibility] = useState(false);
    const[confirmationModal, setConfirmation] = useState(false);
    const[navigationModal, setNavigation] = useState(false);
    const[listRef, setRef] = useState(null);
    const [sharingModal, openSharing] = useState(false);
    const [createPlaylistModal, createPlaylist] = useState(false);

    useEffect(() => {
        // console.log(currStory)
    }, [currStory]);

    const retrieveStories = async () =>{
        const retrievedStoryLocation = await getAppendedUserStories(locationIndex);
        console.log("This is the retrieved location", retrievedStoryLocation);
        setStoryLocation(retrievedStoryLocation);
        const story = retrievedStoryLocation.stories[0]
        setStory({
            info: story,
            index: 0,
        })
    }

    useEffect(() => {
       retrieveStories()
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

    ]

    const renderItem = ({item, index}) => {
        // console.log(item);
        // console.log("This is the story location", storyLocation)
        const storyIndex = index % storyLocation.stories.length;
        const storyToDisplay = storyLocation.stories[storyIndex]

        // console.log(storyToDisplay);
        // const imageToDisplay = (typeof storyToDisplay.image) === "string" ? {uri: storyToDisplay.image} : storyToDisplay.image;
        return (
            <ImageBackground source={Images.yellowOrb} resizeMode='contain' style={{height: 80, width: 80, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={storyToDisplay.image} resizeMode='cover' style={{height: 60, width: 60, borderRadius: 30}}/>
            </ImageBackground>    
        );
    }

    
    const nextStory = () => {  
        // console.log('next story')
        const index = currStory.index;
        const new_index = (index + 1) % 12
        let storyIndex = new_index % storyLocation.stories.length;
        listRef.scrollToIndex(new_index);
        setStory({
            info: storyLocation.stories[storyIndex],
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
        // console.log(new_index)
        let storyIndex = new_index % storyLocation.stories.length;
        listRef.scrollToIndex(new_index);
        setStory({
            info: storyLocation.stories[storyIndex],
            index: new_index
        });
        
    }

    
    
    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            
            <Header title={storyLocation.title} style={{fontFamily: 'Montserrat-Bold'}} page={'Story List'} playlist={null} setNavigation={setNavigation}/>
            <Text style={{fontFamily: 'Montserrat-Light', fontSize: 18, marginTop: -10}}>{storyLocation.stories.length} Stories Available</Text>
            <View style={styles.flatlist}>

                <View style ={styles.backgroundCircle}/>
                <CircleList
                    data={data}
                    innerRef={component => setRef(component)}
                    visibilityPadding={3}
                    renderItem={renderItem}
                    radius={RADIUS}
                    keyExtractor={(item) => `${item.key}`}
                    elementCount={12}
                    selectedItemScale={2.7}
                    swipeSpeedMultiplier={40}
                    containerStyle={{paddingTop: 80, marginBottom: '2%'}}
                    onScrollEnd={(item) => {
                        let index = item % storyLocation.stories.length;
                        setStory({
                            info: storyLocation.stories[index],
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
                location={storyLocation.title}
                storyObject={currStory.info}
                setModalVisibility={setModalVisibility}
                openSharing={openSharing}
            />

            { modalVisibile && <PlaylistPopUp modalVisible={modalVisibile} setModalVisibility={setModalVisibility} setConfirmation={setConfirmation} createPlaylist={createPlaylist}/> }
            
            { confirmationModal && <Confirmation visible={confirmationModal} setConfirmation={setConfirmation}/> }

            { navigationModal && <NavigationModal visible={navigationModal} setNavigation={setNavigation}/> }

            { sharingModal && <SharingModal visible={sharingModal} setVisible={openSharing} title={currStory.info.title} author={currStory.info.author}/> }

            { createPlaylistModal && <CreatePlaylistModal visible={createPlaylistModal} setVisible={createPlaylist}/> }
            
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      fontFamily: "Montserrat"
  
    },
    header: {
        width: '100%',
        height: 75,
        // backgroundColor: 'grey',
        left: 0,
        top: 0,
        flexDirection: 'row',
        paddingLeft: 10, 
        justifyContent: 'center',
        fontFamily: "Montserrat"
        

    },
    test: {
        flex: 1,
        width: '100%',
        backgroundColor: 'lightblue'
    },
    titleView: {
        width:'75%',
        alignItems:'center',
       
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
        // backgroundColor: 'grey',
        width: '12.5%',


    },
    title: {
        marginTop: '5%',
        fontSize: 26, 
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '3%', 
   
    },
    
    flatlist: {
        //marginTop: '5%',

        marginBottom: height/500,
        marginTop: height/80,
        // flex: 1,
        width:'100%',
        // backgroundColor: 'grey',
    },
    backgroundCircle: {
        borderColor: '#FCC201',
        borderWidth: 10,
        width: RADIUS * 2,
        aspectRatio: 1,
        borderRadius: RADIUS,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 120
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

    

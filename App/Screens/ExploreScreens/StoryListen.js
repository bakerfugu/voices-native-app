import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import Header from '../../Components/Header.js';
import { Images } from '../../Themes'
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'
import LongButton from '../../Components/LongButton'
import PlaylistPopUp from '../../Components/PlaylistPopUp';
import Confirmation from '../../Components/ConfirmationModal';
import NavigationModal from '../../Components/NavigationModal';
import TranscriptModal from '../../Components/TranscriptModal';
import SharingModal from '../../Components/SharingModal';
import CreatePlaylistModal from '../../Components/CreatePlaylistModal.js';
import Scrubber from 'react-native-scrubber'
import AudioPlayer, { getTimeStringFromMillis } from '../../Components/AudioPlayer'


export default function StoryListen({ route, navigation }) {
    const { storyObject, location } = route.params;
    const { title, author, date, length, tags, image, transcript, audio } = storyObject;
    // console.log("this is the audio", audio)

    // const [isPlaying, setPlayStatus] = useState(false);
    // const [currStory, setStory] = useState(0);

    const [modalVisibile, setModalVisibility] = useState(false);
    const [confirmationModal, setConfirmation] = useState(false);
    const [navigationModal, setNavigation] = useState(false);
    const [transcriptModal, openTranscript] = useState(false);
    const [sharingModal, openSharing] = useState(false);
    const [createPlaylistModal, createPlaylist] = useState(false);
    
    const [activeScrubberPosition, setActiveScrubberPosition] = useState(0);
    const [newScrubberPosition, setNewScrubberPosition] = useState(0);
    const [playingSound, setPlayingSound] = useState(false);
    const [duration, setDuration] = useState(0);
    const [audioLoaded, setAudioLoaded] = useState(false);

    useEffect(() => {
        setNewScrubberPosition(0);
    }, [audio])

    useEffect(() => {
        setPlayingSound(false);
        setActiveScrubberPosition(newScrubberPosition);
    }, [newScrubberPosition])

    const handleAudioStatus = ({ isLoaded, positionMillis, didJustFinish, durationMillis, error }) => {
        if (!isLoaded) {
            if (error) console.log("Audio status error", error);
            return;
        } else if (!audioLoaded) {
            setAudioLoaded(audioLoadedUpdated => {
                if (audioLoadedUpdated !== isLoaded) {
                    setDuration(durationMillis);
                    return isLoaded;
                }
                return audioLoadedUpdated;
            });
        }

        if (didJustFinish) {
            setPlayingSound(false);
        } else if (positionMillis) {
            setActiveScrubberPosition(positionMillis);
        }
    }

    const onScrubberMove = (newPosInSeconds) => {
        setNewScrubberPosition(newPosInSeconds * 1000);
    }

    return (

        <View style={styles.container}>
            <BackgroundGradient />
            <Header title={location} page='Story List' playlist={null} setNavigation={setNavigation} />
            <View style={styles.content}>

                <ImageBackground source={Images.yellowOrb} resizeMode='contain' style={{ height: 300, width: 300, justifyContent: 'center', alignItems: 'center', marginBottom: '10%' }}>
                    <Image source={image} resizeMode='cover' style={{ height: 240, width: 240, borderRadius: 120 }} />
                </ImageBackground>
                {/* <ImageBackground resizeMode='contain' style={{width: 300, aspectRatio: 1, alignItems: 'center', justifyContent: 'center'}} source={Images.yellowOrb} resizeMode='contain'>
                    <Image source={image} style={{width: 50, aspectRatio: 1, borderRadius: 200}} resizeMode='cover'/>
                </ImageBackground> */}

                <Text style={{ fontSize: 24, fontFamily: "Montserrat", textAlign: 'center', marginBottom: 10, marginLeft: 10, marginRight: 10 }}>{title}</Text>
                <Text style={{ fontSize: 18, fontFamily: "Montserrat-Light", textAlign: 'center'}}>{author}</Text>
                <View style={{width: '80%', marginTop: '5%'}}>
                    { audioLoaded && 
                        <Scrubber 
                            value={activeScrubberPosition / 1000}
                            onSlidingComplete={onScrubberMove}
                            totalDuration={duration / 1000}
                            trackColor='#1ddbb5'
                            scrubbedColor='#1ddbb5'
                            displayedValueStyle={{fontFamily: 'Montserrat', color:'black'}}
                        />
                    }
                </View>

                <View style={styles.playButtons}>
                    <Ionicons name={'play-back-sharp'} size={28} />
                    <TouchableOpacity onPress={() => {
                        setPlayingSound(playingUpdated => {
                            if (activeScrubberPosition > duration) return false;
                            return !playingUpdated;
                        })
                    }}>
                        <Ionicons name={playingSound ? 'pause-circle' : 'play-circle'} size={80} color={"#1ddbb5"} />
                    </TouchableOpacity>

                    <Ionicons name={'play-forward-sharp'} size={28} />
                </View>

                <AudioPlayer
                    audioSourceObject={audio}
                    playing={playingSound}
                    positionMillis={newScrubberPosition}
                    getStatusInfo={handleAudioStatus}
                />
            </View>
            
            <View style={styles.transcriptAndOptions}>
                <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'center' }}>
                    <LongButton label='Transcript' onPress={() => openTranscript(true)} disabled={false} />
                </View>

                <View style={{ width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Ionicons name={"md-share-outline"} size={34} color={'black'} style={styles.icon} onPress={() => openSharing(true)} />
                    <MaterialIcons name={"playlist-add"} size={38} color={'black'} style={styles.icon} onPress={() => setModalVisibility(true)} />
                </View>

            </View>


            { modalVisibile &&
                <PlaylistPopUp
                    modalVisible={modalVisibile}
                    setModalVisibility={setModalVisibility}
                    setConfirmation={setConfirmation}
                    createPlaylist={createPlaylist}
                    storyObject={storyObject}
                />
            }

            { confirmationModal && <Confirmation visible={confirmationModal} setConfirmation={setConfirmation} />}

            { navigationModal && <NavigationModal visible={navigationModal} setNavigation={setNavigation} />}

            { transcriptModal && <TranscriptModal visible={transcriptModal} openTranscript={openTranscript} transcript={transcript} title={title} author={author} />}

            { sharingModal && <SharingModal visible={sharingModal} setVisible={openSharing} title={title} author={author} />}

            { createPlaylistModal &&
                <CreatePlaylistModal
                    visible={createPlaylistModal}
                    setVisible={createPlaylist}
                    setConfirmation={setConfirmation}
                    storyObject={storyObject}
                />
            }        
        </View>







    );

}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',


    },

    content: {
        flex: 9,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: '50%',
        //width: 200, 
        //height: 200, 
        borderRadius: 25,
        marginBottom: 10

    },
    title: {
        fontSize: 22,
        marginBottom: 10,
    },
    author: {
        fontSize: 18,
        color: 'grey',

    },
    progressBar: {
        marginTop: 15,
        height: 10,
        width: '80%',
        backgroundColor: 'lightgrey'
    },
    playButtons: {
        width: '50%',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    transcriptAndOptions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '85%',

        // marginBottom: 15,


    },
    transcriptButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#F1B600',
        alignItems: 'center',
        borderRadius: 15,

    },


    transcript: {
        flex: 1,
        marginHorizontal: 30
    },





});



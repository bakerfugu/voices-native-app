import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import Trimmer from 'react-native-trimmer'

import SvgPlayButtonIcon from '../../../icons/PlayButtonIcon'
import BackgroundGradient from '../../Components/BackgroundGradient';
import metrics from '../../Themes/Metrics';
import LongButton from '../../Components/LongButton'
import AudioPlayer, { getTimeStringFromMillis } from '../../Components/AudioPlayer'

export default function EditStory({ route }) {
    const { audioUri, recordingDuration } = route.params;
    const navigation = useNavigation();

    const [leftHandlePos, setLeftHandlePos] = useState(0);
    const [rightHandlePos, setRightHandlePos] = useState(recordingDuration > 2000 ? recordingDuration - 1000 : 1000);
    const [activeScrubberPosition, setActiveScrubberPosition] = useState(0);
    const [newScrubberPosition, setNewScrubberPosition] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [duration, setDuration] = useState(recordingDuration);
    const [audioLoaded, setAudioLoaded] = useState(false);
    const scrubInterval = 100;

    useEffect(() => {
        setPlaying(false);
        if (newScrubberPosition > rightHandlePos) {
            setActiveScrubberPosition(rightHandlePos);
        } else if (newScrubberPosition < leftHandlePos) {
            setActiveScrubberPosition(leftHandlePos);
        } else {
            setActiveScrubberPosition(newScrubberPosition - (newScrubberPosition % 100));
        }
    }, [newScrubberPosition])

    const handleAudioStatus = ({ isLoaded, isPlaying, positionMillis, didJustFinish, durationMillis, error }) => {
        if (!isLoaded) {
            if (error) console.log("Audio status error", error);
            return;
        }
        setAudioLoaded(audioLoadedUpdated => {
            if (audioLoadedUpdated !== isLoaded) {
                return isLoaded;
            }
            return audioLoadedUpdated;
        });
        if (didJustFinish) {
            setPlaying(false);
        }
        if (positionMillis) {
            setRightHandlePos(rightHandlePosUpdated => {
                if (positionMillis > rightHandlePosUpdated - scrubInterval) {
                    // console.log("pausing in handle status!", positionMillis, rightHandlePosUpdated)
                    setPlaying(false);
                }
                return rightHandlePosUpdated;
            });
            setActiveScrubberPosition(positionMillis);
        }
    }

    const trimmedTime = () => {
        const lapse = rightHandlePos - leftHandlePos;
        return getTimeStringFromMillis(lapse);
    }

    const updateHandlePositions = ({ leftPosition, rightPosition }) => {
        // revert visual right handle shift
        rightPosition -= 200;
        setLeftHandlePos(leftPosition);
        if (leftPosition > activeScrubberPosition) setNewScrubberPosition(leftPosition);
        setRightHandlePos(rightPosition);
        if (rightPosition < activeScrubberPosition) setNewScrubberPosition(rightPosition);
    }

    // console.log("time deets", leftHandlePos, rightHandlePos, activeScrubberPosition)
    const scrubberTimeString = getTimeStringFromMillis(activeScrubberPosition);
    return (
        <View style={styles.container}>
            <BackgroundGradient />
            <View style={styles.header} />

            { audioLoaded ?
                <View style={styles.content}>
                    <View style={styles.timesColumn}>
                        <Text style={{ fontSize: 18, color: 'grey', textAlign: 'center' }}>Duration</Text>
                        <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', marginBottom: '5%' }}>{rightHandlePos > leftHandlePos ? trimmedTime() : '00 : 00'}</Text>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Trimmer
                            onHandleChange={updateHandlePositions}
                            totalDuration={duration}
                            trimmerLeftHandlePosition={leftHandlePos}
                            trimmerRightHandlePosition={rightHandlePos + 200}
                            tintColor={'#F1B600'}
                            trackBackgroundColor={'#dfdfdf'}
                            markerColor="#5a3d5c"
                            maxTrimDuration={600000}
                            minimumTrimDuration={0}
                            scrubberColor="#1ddbb5"
                            scrubberPosition={activeScrubberPosition}
                            onScrubbingComplete={(newPos) => setNewScrubberPosition(newPos)}
                            showScrollIndicator={true}
                            initialZoomValue={1}
                        />
                    </View>
                    <View style={styles.times}>
                        <View style={styles.timesColumn}>
                            <Text style={{ fontSize: 16, color: 'grey', textAlign: 'left' }}>Start</Text>
                            <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>{getTimeStringFromMillis(leftHandlePos)}</Text>
                        </View>
                        <View style={styles.timesColumn}>
                            <Text style={{ fontSize: 16, color: 'grey', textAlign: 'left' }}>End</Text>
                            <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>{getTimeStringFromMillis(rightHandlePos)}</Text>
                        </View>
                    </View>
                    {/* <SvgPlayButtonIcon
                        width={"80"}
                        height={"80"}
                    /> */}
                    {/* <Text style={{ fontSize: 22, color: 'black', textAlign: 'center' }}>{scrubberTimeString}</Text> */}
                    <Ionicons name={playing ? 'pause-circle' : 'play-circle'} size={100} color={"#1ddbb5"}
                        onPress={() => {
                            setPlaying(playingUpdated => {
                                if (activeScrubberPosition >= rightHandlePos) return false;
                                return !playingUpdated;
                            })
                        }}
                    />
                </View>
                :
                <View style={styles.content}>
                    <View style={styles.timesColumn}>
                        <Text style={{ fontSize: 36, color: 'grey', textAlign: 'center' }}>Loading...</Text>
                    </View>
                </View>
            }

            <AudioPlayer
                audioSourceObject={
                    { uri: audioUri || "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" }
                }
                playing={playing}
                positionMillis={newScrubberPosition}
                getStatusInfo={handleAudioStatus}
            />

            <View style={styles.buttonView}>
                <LongButton
                    onPress={() => {
                        const time = trimmedTime()
                        const min = time.slice(0, 2);

                        navigation.navigate('StoryInfo', { length: min === '00' ? '01' : min, audioUri: audioUri })
                    }}
                    disabled={rightHandlePos <= leftHandlePos}
                    label={'Next'} />


            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    header: {
        width: '100%',
        height: metrics.headerHeight,
        // backgroundColor: 'grey',
        left: 0,
        top: 0
    },
    times: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '140%',
        marginTop: '-7%'
    },
    timesColumn: {
        flexDirection: 'column',
    },
    buttonView: {
        flex: 1,
        width: '50%',
        justifyContent: 'flex-end',
        marginBottom: '15%'
    },
    content: {
        flex: 8,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});



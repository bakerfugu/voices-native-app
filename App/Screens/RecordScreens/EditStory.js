import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    View,
    Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Trimmer from 'react-native-trimmer'

import SvgPlayButtonIcon from '../../../icons/PlayButtonIcon'
import BackgroundGradient from '../../Components/BackgroundGradient.js';    
import {
    Dropdown,
    GroupDropdown,
    MultiselectDropdown,
  } from 'sharingan-rn-modal-dropdown';
import metrics from '../../Themes/Metrics';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LongButton from '../../Components/LongButton.js'
import { Ionicons } from '@expo/vector-icons'
    
    
export default function EditStory () {

    

    const navigation = useNavigation();
    const [leftHandlePos, setLeftHandlePos] = useState(0);
    const [rightHandlePos, setRightHandlePos] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [scrubberPosition, setScrubberPosition] = useState(1000);
    const [playing, setPlaying] = useState(false);
    const scrubInterval = 50;
    var interval = null;

    const calculateTimes = (position) => {
        
        let totalSecs = Math.floor(position / 1000);
        console.log(totalSecs)
        // let minutes = Math.floor(time / 60);
        // let sec = time % 60;
        let min = `${Math.floor(totalSecs / 60)}`
        
        min = `0${min % 60}`.slice(-2)
        let sec = `0${(position % 60)}`.slice(-2)

        return (
            min.toString() + ' : ' + sec.toString()
        );
    }

    const trimmedTime = () => {
        const lapse = rightHandlePos - leftHandlePos;
        return calculateTimes(lapse);
    }
        
    useEffect(() => {
        setStartTime(calculateTimes(leftHandlePos));
        setEndTime(calculateTimes(rightHandlePos));

    }, [leftHandlePos, rightHandlePos]);

    useEffect((interval) => {
        if (playing) {
            playScrubber(interval)
        }
        else {
            pauseScrubber(interval)
        }
        

        return clearInterval(interval);
    }, [playing])
   

    onHandleChange = ({ leftPosition, rightPosition }) => {
        setLeftHandlePos(leftPosition);
        setRightHandlePos(rightPosition);  
    }

   
            
       

    const onScrubbingComplete = (newValue) => {
        
        setPlaying(false);
        setScrubberPosition(newValue);
    }
    
    const playScrubber = () => {
        // this.setState({ playing: true });

        // this.scrubberInterval = setInterval(() => {
        //     this.setState({ scrubberPosition: this.state.scrubberPosition + scrubInterval })
        // }, scrubInterval)

        interval = setInterval(() => {
            setScrubberPosition(scrubberPosition => scrubberPosition + scrubInterval);
        }, scrubInterval);
  
    }

    const pauseScrubber = (interval) => {
        // clearInterval(this.scrubberInterval)

        // this.setState({ playing: false, scrubberPosition: this.state.trimmerLeftHandlePosition });

        clearInterval(interval);
        
        setScrubberPosition(leftHandlePos);
    }

    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            <View style={styles.header}/>
            
            <View style={styles.content}>
            <View style={styles.timesColumn}>

                    <Text style={{fontSize: 18, color: 'grey', textAlign: 'center'}}>Trimmed Time</Text>
                    <Text style={{fontSize: 22, color: 'black', textAlign: 'center'}}>{rightHandlePos > leftHandlePos ? trimmedTime() : '00 : 00'}</Text>

                </View>
           
            <View style={styles.times}>
                <View style={styles.timesColumn}>

                    <Text style={{fontSize: 18, color: 'grey', textAlign: 'center'}}>Start Time</Text>
                    <Text style={{fontSize: 22, color: 'black', textAlign: 'center'}}>{calculateTimes(leftHandlePos)}</Text>

                </View>
                <View style={styles.timesColumn}>

                    <Text style={{fontSize: 18, color: 'grey', textAlign: 'center'}}>End Time</Text>
                    <Text style={{fontSize: 22, color: 'black', textAlign: 'center'}}>{calculateTimes(rightHandlePos)}</Text>

                </View>
            </View>
            <View style={{marginBottom: 20}}>
            <Trimmer
                onHandleChange={onHandleChange}
                totalDuration={600000}
                trimmerLeftHandlePosition={leftHandlePos}
                trimmerRightHandlePosition={rightHandlePos}
                tintColor={'#F1B600'}
                trackBackgroundColor={'#dfdfdf'}
                markerColor="#5a3d5c"
                maxTrimDuration={600000}
                minimumTrimDuration={0}
                scrubberColor="#1ddbb5"
                scrubberPosition={scrubberPosition}
                onScrubbingComplete={onScrubbingComplete}
             
            />

            </View>
            
            {/* <SvgPlayButtonIcon
                width={"80"}
                height={"80"}
            /> */}
            
            
            <Ionicons name={playing ? 'pause-circle' : 'play-circle'} size={100} color={"#1ddbb5"} onPress={() => setPlaying(!playing)}/>

            </View>
            
            <View style={styles.buttonView}>
                <LongButton 
                onPress={() => {navigation.navigate('StoryInfo')}} 
                disabled={rightHandlePos<=leftHandlePos} 
                label={'Story Info'}/>
                
                
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
        width: '80%'
    },
    timesColumn: {
        flexDirection: 'column',
        marginBottom: 30

    },
    buttonView: {
        flex: 1,
        width: '65%',
        justifyContent: 'flex-end'
    },
    content: {
      flex: 8,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
});

    

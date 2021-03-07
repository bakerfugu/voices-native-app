import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    View,
    Button 
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
    
    
export default function EditStory () {

    

    const navigation = useNavigation();
    const [leftHandlePos, setLeftHandlePos] = useState(0);
    const [rightHandlePos, setRightHandlePos] = useState(0);

    onHandleChange = ({ leftPosition, rightPosition }) => {
        setLeftHandlePos(leftPosition);
        setRightHandlePos(rightPosition);
    }

    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            <Trimmer
                onHandleChange={onHandleChange}
                totalDuration={60000}
                trimmerLeftHandlePosition={leftHandlePos}
                trimmerRightHandlePosition={rightHandlePos}
             
            />
            <SvgPlayButtonIcon
                width={"80"}
                height={"80"}
            />
            <View style={styles.header}/>
            
            <Button title={'Story Info'} onPress={() => {navigation.navigate('StoryInfo')}}/>
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
        height: 100,
        // backgroundColor: 'grey',
        left: 0,
        top: 0
    },
});

    

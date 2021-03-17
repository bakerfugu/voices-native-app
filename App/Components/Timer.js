import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { getTimeStringFromMillis } from '../Components/AudioPlayer'


export default function Timer ({time}) {
    const timeStringWithoutDecimal = getTimeStringFromMillis(time).slice(0, 7);
    // console.log("timer", time, timeStringWithoutDecimal);
    return (
        <Text style={styles.timer}>
           {timeStringWithoutDecimal}
        </Text>
    )
}

const styles = StyleSheet.create({
    
    timer: {
        fontSize : 48,
        fontWeight: '300',
        color: 'black',
    }
});
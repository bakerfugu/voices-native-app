import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Images } from '../../Themes'
import FloatingStoryMapMarker from '../../Components/floatingStoryMapMarker'

export default function MainMap() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title={"What up, I title"}
                    // description={"what up I descrribe"}
                >
                    <FloatingStoryMapMarker imageSource={Images.parliament}/>
                </Marker>
            </MapView>
            <Button title={'StoryList'} onPress={() => {navigation.navigate('StoryList')}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
  });

{/* <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f)">
<circle cx="31" cy="31" r="24" fill="#F1C232"/>
</g>
<defs>
<filter id="filter0_f" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur"/>
</filter>
</defs>
</svg> */}

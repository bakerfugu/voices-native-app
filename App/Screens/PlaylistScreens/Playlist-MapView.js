import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ImageBackground, View, Image, Modal, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StoryClip from '../../Components/StoryClip';
import  CircleList  from 'react-native-circle-list'
import {Images} from '../../Themes';
import BackgroundGradient from '../../Components/BackgroundGradient';
import Header from '../../Components/Header';
import MapView, { Marker } from 'react-native-maps';
import FloatingStoryMapMarker from '../../Components/floatingStoryMapMarker'


export default function PlaylistMapView ({route, navigation}) {

    const {playlist} = route.params;
    const stories = playlist.stories
    const mapRef = useRef(null);
    console.log(playlist.stories);

    return (
        <View style={styles.container}>
            <BackgroundGradient/>

            <MapView 
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: 37.783363,
                    longitude: -122.403908,
                    latitudeDelta: 0.015922,
                    longitudeDelta: 0.015421,
                  }}
                  
            >

                {stories.map((item, index) => (
                <Marker title={item.title} coordinate={item.coordinates}
                    onPress={ (item) => {
                        navigation.navigate('StoryList', {locationIndex: index});
                    }}
                >
                    <FloatingStoryMapMarker imageSource={item.image}/>
                </Marker>
                    
                ))}
            


            </MapView>
            <View style={{position: 'absolute', top: 0}}>
                <Header playlist={playlist} title={playlist.title} page='Playlist-MapView'/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginTop: 75,

    },
});
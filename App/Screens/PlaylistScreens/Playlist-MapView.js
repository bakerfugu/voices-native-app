import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ImageBackground, View, Image, Modal, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import  CircleList  from 'react-native-circle-list'
import {Images} from '../../Themes';
import BackgroundGradient from '../../Components/BackgroundGradient';
import Header from '../../Components/Header';
import MapView, { Marker } from 'react-native-maps';
import FloatingStoryMapMarker from '../../Components/floatingStoryMapMarker'
import { getPlaylistWithUserStories } from '../../Components/StoryPlaylists'
import staticStoryLocations from '../../Components/StoryLocations'

function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
    })
}

export default function PlaylistMapView ({route, navigation}) {

    const { storyReferencePlaylist } = route.params;

    const [storyLocations, setStoryLocations] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const mapRef = useRef(null);

    const retrievePlaylist = async () => {
        const gotPlaylist = await getPlaylistWithUserStories(storyReferencePlaylist.title);

        const storiesWithUniqueLocations = removeDuplicates(gotPlaylist.stories, "locationIndex");
        const playlistStoryLocations = storiesWithUniqueLocations.map(story => ({
            ...story,
            coordinates: staticStoryLocations[story.locationIndex].coordinates
        }));

        // console.log("unique locations", playlistStoryLocations);
        setStoryLocations(playlistStoryLocations);
        setLoaded(true);
    }

    useEffect(() => {
        retrievePlaylist();
    }, [])

    return (
        <View style={styles.container}>
            <BackgroundGradient/>

            {loaded && 
                <MapView 
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={{
                        ...storyLocations[0].coordinates,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                >
                    {storyLocations.map((storyWithCoordinates) => (
                        <Marker 
                            title={storyWithCoordinates.title} 
                            coordinate={storyWithCoordinates.coordinates}
                            onPress={() => {
                                navigation.navigate('StoryListen', {storyObject: storyWithCoordinates, location: storyReferencePlaylist.title});
                            }}
                            key={storyWithCoordinates.title}
                        >
                            <FloatingStoryMapMarker imageSource={storyWithCoordinates.image}/>
                        </Marker>
                    ))}

                </MapView>
            }
            <View style={{position: 'absolute', top: 0}}>
                <Header playlist={storyReferencePlaylist} title={storyReferencePlaylist.title} page='Playlist-MapView'/>
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
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import FloatingStoryMapMarker from '../../Components/floatingStoryMapMarker'
import storyLocations from '../../Components/StoryLocations';
import DropDownPicker from 'react-native-dropdown-picker';
import { Images } from '../../Themes';
import { MaterialIcons } from '@expo/vector-icons'
import FloatingLocMarker from '../../Components/floatingLocMarker'
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { getPlaylists, getPlaylistWithUserStories } from '../../Components/StoryPlaylists'

export default function MainMap() {

    const mapRef = useRef(null);

    const data = [
        {
            value: '1',
            label: 'Barcelona',
        },

        {
            value: '4',
            label: 'San Francisco',

        },
    ];
    // console.log(storyLocations);

    const [location, setLocation] = useState(null)

  
    useEffect(() => {
        if (location === 'Barcelona') {
            mapRef.current.animateToRegion({
                latitude: 41.3851,
                longitude: 2.1734,
                latitudeDelta: 0.055922,
                longitudeDelta: 0.055421,
            }, 300)
        }
        else {
            mapRef.current.animateToRegion({
                latitude: 37.77634752089827,
                longitude: -122.44181123023144,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }, 300)
        }

    }, [location])

    const goHome = () => {
        if (location) {
            setLocation(null)
        }
        else {
            mapRef.current.animateToRegion({
                latitude: 37.77634752089827,
                longitude: -122.44181123023144,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }, 300)
        }
    }

    // const testAsync = async () => {
    //     const foo = await getPlaylists()
    //     // console.log("getting playlists", foo);
    //     const withUserStories = await getPlaylistWithUserStories(foo[1].title);
    //     console.log("getting with user stories", withUserStories);
    // }

    // useEffect(() => {
    //     testAsync();
    // }, [])

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={{ position: 'absolute', top: 0, height: 50, width: '100%', backgroundColor: '#FDF0AF', padding: 5 }}>
                <DropDownPicker
                    items={[
                        { label: 'San Francisco', value: 'San Francisco' },
                        { label: 'Barcelona', value: 'Barcelona' }
                    ]}
                    defaultValue={location}
                    containerStyle={{ height: 40 }}
                    style={{ backgroundColor: '#fafafa', borderRadius: 20 }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    style={{
                        borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                        borderColor: 'lightgrey', borderWidth: 2
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => {

                        setLocation(item.value)
                    }}
                    placeholder='Search for a Location'

                />
            </View>


            <MapView
                ref={mapRef}
                style={styles.map}
                mapType={"mutedStandard"}
                showsPointsOfInterest={false}
                initialRegion={{
                    latitude: 37.77634752089827,
                    longitude: -122.44181123023144,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5,
                }}

            >

                {storyLocations.map((item, index) => (
                    <Marker
                        title={item.title}
                        coordinate={item.coordinates}
                        onPress={(item) => {
                            navigation.navigate('StoryList', { locationIndex: index });
                        }}
                        key={item.title}
                    >
                        <FloatingStoryMapMarker imageSource={item.image} />
                    </Marker>

                ))}

                    <Marker
                        coordinate={{
                            latitude: 37.77634752089827, 
                            longitude: -122.44181123023144,
                        }}
                        title="You are here!"
                        
                    > 
                    {/* <FloatingLocMarker/> */}
                    
                                    
                    </Marker>


            </MapView>
            <MaterialIcons
                name='my-location'
                size={48}
                color='black'
                style={{position: 'absolute', bottom: 20, right: 10}}
                onPress={() => goHome()}
            />
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
        zIndex: -1

    },
});


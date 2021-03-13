import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, Button, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Images } from '../../Themes'
import FloatingStoryMapMarker from '../../Components/floatingStoryMapMarker'
import storyLocations from '../../Components/StoryLocations/index.js';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons'

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
        if (location==='Barcelona') {
            mapRef.current.animateToRegion({
                latitude: 41.3851,
                longitude: 2.1734,
                latitudeDelta: 0.015922,
                longitudeDelta: 0.015421,
                },300)
        }
        else {
            mapRef.current.animateToRegion({
                latitude: 37.783363,
                longitude: -122.403908,
                latitudeDelta: 0.015922,
                longitudeDelta: 0.015421,
                },300)
        }

        
    }, [location])
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={{position: 'absolute', top: 0, height: 50, width: '100%', backgroundColor: '#FDF0AF', padding: 5}}>
            <DropDownPicker
                items={[
                    {label: 'San Francisco', value: 'San Francisco'},
                    {label: 'Barcelona', value: 'Barcelona'}
                ]}
                defaultValue={location}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa', borderRadius: 20}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                style={{
                    borderTopLeftRadius: 10, borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                    borderColor: 'lightgrey', borderWidth: 2
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => {
                    
                    setLocation(item.value)
                }}
                placeholder='Search for a Location'
                    
            />
            </View>
            
        
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

                
                
                
            
                {storyLocations.map((item, index) => (
                <Marker title={item.title} coordinate={item.coordinates}
                    onPress={ (item) => {
                        navigation.navigate('StoryList', {locationIndex: index});
                    }}
                >
                    <FloatingStoryMapMarker imageSource={item.image}/>
                </Marker>
                    
                ))}

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
        zIndex: -1

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

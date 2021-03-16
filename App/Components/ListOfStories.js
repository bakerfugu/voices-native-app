import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ImageBackground, Dimensions} from 'react-native';
import { Images } from '../Themes';
import LocationInfo from './LocationInfo';
import StoryClip from './StoryClip.js';
import storyLocations from './StoryLocations';
import CircleList from 'react-native-circle-list';
import images from '../Themes/Images';

const {width} = Dimensions.get('screen');
const RADIUS = (1.5 * width) / 2;

export default function ListOfStories ({locationIndex}) {
    //console.log("this is props in ListOfStories ", props);
    //console.log("this is props.location in ListOfStories ", props.location);

    //console.log("This is storyLocations ", storyLocations);
    const locationInfo = storyLocations[locationIndex];
    // const {width} = Dimensions.get('screen');
    // const RADIUS = (1.5 * width) / 2;
    const data = [

    {
        key: 1, 
        value: 1,
    },
    {
        key: 2, 
        value: 1,
    } , 
    {
        key: 3, 
        value: 1,
    } ,    
    {
        key: 4, 
        value: 1,
    }  ,
    {
        key: 5, 
        value: 1,
    } , 
    {
        key: 6, 
        value: 1,
    },
    {
        key: 7, 
        value: 1,
    },
    {
        key: 8, 
        value: 1,
    },
    {
        key: 9, 
        value: 1,
    },
    {
        key: 10, 
        value: 1,
    },
    {
        key: 11, 
        value: 1,
    },
    {
        key: 12, 
        value: 1,
    }  

    ]

    const renderItem = () => {
        return (
            <ImageBackground source={Images.yellowOrb} style={{height: 80, width: 80, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={images.parliament} resizeMode='center' style={{height: 60, width: 60, borderRadius: '50%'}}/>
            </ImageBackground>
            
        )
    }

    return (
        <View style={styles.flatlist}>
            {/* <FlatList
                data={locationInfo.stories}
                renderItem={(story) => {
                    console.log("Printing playlist: ", story);
                    return <StoryClip key={story.item.title} value={story.item}/>
                    }
                }
                keyExtractor={(item) => item.id}
                ListHeaderComponent={LocationInfo(locationIndex)}
            /> */}


            <View style ={styles.backgroundCircle}/>
            <CircleList
                data={data}
                visibilityPadding={3}
                renderItem={renderItem}
                radius={RADIUS}
                keyExtractor={(item) => item.id}
                elementCount={12}
                selectedItemScale={2.7}
                swipeSpeedMultiplier={40}
                containerStyle={{paddingTop: 80, marginBottom: '5%'}}/>
            
            <StoryClip />
            {/* <Text style={{marginHorizontal: '8%', fontSize: 32, fontFamily: 'Montserrat' }}>It's the Start of Something New</Text>
            <Text style={{marginHorizontal: '8%', fontSize: 18, fontFamily: 'Montserrat'}}> Vanessa Hudgens</Text> */}
            


        </View>

  

    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'grey'
    },
    background: {
        width: '70%',
        aspectRatio: 1,
        // backgroundColor: 'pink'

    },
    flatlist: {
        // marginTop: 20,
        flex: 1,
        width:'100%',
        // backgroundColor: 'grey',
    },
    backgroundCircle: {
        borderColor: '#1ddbb5',
        borderWidth: 10,
        width: RADIUS * 2,
        aspectRatio: 1,
        borderRadius: RADIUS,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 120
    }
  

});
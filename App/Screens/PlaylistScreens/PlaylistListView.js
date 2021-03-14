import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Image, FlatList, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StoryClip from '../../Components/StoryClip';
import  CircleList  from 'react-native-circle-list'
import {Images} from '../../Themes';
import BackgroundGradient from '../../Components/BackgroundGradient';
import Header from '../../Components/Header';


const {width} = Dimensions.get('screen');
const RADIUS = (1.5 * width) / 2;  

export default function PlaylistListView ({route, navigation}) {

    const {playlist} = route.params;

    const[currStory, setStory] = useState(0);

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
    
    ];


    
    const renderItem = () => {
        return (
            <ImageBackground source={Images.yellowOrb} style={{height: 80, width: 80, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={Images.parliament} resizeMode='center' style={{height: 60, width: 60}}/>
            </ImageBackground>
            
        )
    }

    return (
        <View style={styles.container}>
            <BackgroundGradient/>
            
            <Header playlist={playlist} page='Playlist-ListView'/>
            <View style={styles.flatlist}>

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
                    containerStyle={{paddingTop: 80, marginBottom: '5%'}}
                    onScrollEnd={(item) =>setStory(item)}
                    />
            </View>

            <StoryClip />

        </View>
            
    );

}
   


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    header: {
        height: 100,
        width: '100%'
    },
    flatlist: {
        marginTop: '10%',
        // flex: 1,
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
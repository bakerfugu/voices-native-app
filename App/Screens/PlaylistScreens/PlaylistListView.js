import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Image, Modal, Dimensions, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StoryClip from '../../Components/StoryClip';
import  CircleList  from 'react-native-circle-list'
import {Images} from '../../Themes';
import BackgroundGradient from '../../Components/BackgroundGradient';
import Header from '../../Components/Header';
import PlaylistPopUp from '../../Components/PlaylistPopUp'


const {width} = Dimensions.get('screen');
const RADIUS = (1.5 * width) / 2;  

export default function PlaylistListView ({route, navigation}) {

    const {playlist} = route.params;

    const[currStory, setStory] = useState('');
    const[modalVisibile, setModalVisibility] = useState(false)

    useEffect(() => {
        console.log(playlist.stories[0])
        let story = playlist.stories[0]
        setStory({
            title: story.title,
            length: story.length,
            date: story.date,
            tags: story.tags,
            author: "Jennifer Lopez"
        })
    }, [])

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
            
            <Header playlist={playlist} page='Playlist-ListView' title={playlist.title}/>
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
                    onScrollEnd={(item) => {
                        let index = item % playlist.stories.length;
                        setStory(playlist.stories[index])
                    }}
                    />
            </View>

            <StoryClip title={currStory.title} 
                author={currStory.author} 
                date={currStory.date} 
                length={currStory.length}
                tags={currStory.tags}
                author="Jessika Alba"
                setModalVisibility={setModalVisibility}
            />

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
    },
    

  });
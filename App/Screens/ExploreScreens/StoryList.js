import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import StoryLocationComponent from '../../Components/StoryLocationComponent.js'
import storyLocations from '../../Components/StoryLocations';  
import { Ionicons } from '@expo/vector-icons'
import CustomText from '../../Components/CustomText';  
import CircleList from 'react-native-circle-list';
import StoryClip from '../../Components/StoryClip'
import Header from '../../Components/Header'
import { createIconSetFromFontello } from 'react-native-vector-icons';


const {width} = Dimensions.get('screen');
const RADIUS = (1.5 * width) / 2;   
export default function StoryList ({route, navigation}) {

    const {locationIndex} = route.params;

    const[currStory, setStory] = useState(0);

    useEffect(() => {
        console.log(currStory)
    }, [currStory])

    useEffect(() => {
        const story = storyLocations[locationIndex].stories[0]
        setStory({
            title: story.title,
            length: story.length,
            date: story.date,
            tags: story.tags,
            author: "Jennifer Lopez"
        })
    }, []);
    
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
                <Image source={Images.parliament} resizeMode='center' style={{height: 60, width: 60}}/>
            </ImageBackground>
            
        )
    }

    


    
    
    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            
            <Header title={storyLocations[locationIndex].title} page={'Story List'} playlist={null}/>
            <Text style={{fontFamily: 'Montserrat-Light', fontSize: 18}}>{storyLocations[locationIndex].stories.length} Stories Available</Text>
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
                        let index = item % storyLocations[locationIndex].stories.length;
                        setStory(storyLocations[locationIndex].stories[index])
                    }}
                    />
            </View>



            <StoryClip title={currStory.title} 
                author={currStory.author} 
                date={currStory.date} 
                length={currStory.length}
                tags={currStory.tags}
                author="Jessika Alba"
            />
            
            
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
  
    },
    header: {
        width: '100%',
        height: 75,
        // backgroundColor: 'grey',
        left: 0,
        top: 0,
        flexDirection: 'row',
        paddingLeft: 10, 
        justifyContent: 'center'
        

    },
    test: {
        flex: 1,
        width: '100%',
        backgroundColor: 'lightblue'
    },
    titleView: {
        width:'75%',
        alignItems:'center',
       
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
        // backgroundColor: 'grey',
        width: '12.5%',


    },
    title: {
        marginTop: '5%',
        fontSize: 26, 
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '3%', 
   
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

    

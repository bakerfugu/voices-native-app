import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Dimensions, ImageBackground, Image} from 'react-native';
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


const {width} = Dimensions.get('screen');
const RADIUS = (1.5 * width) / 2;   
export default function StoryList ({route, navigation}) {

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

    ]

    const renderItem = () => {
        return (
            <ImageBackground source={Images.yellowOrb} style={{height: 80, width: 80, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={Images.parliament} resizeMode='center' style={{height: 60, width: 60}}/>
            </ImageBackground>
            
        )
    }

    const {locationIndex} = route.params;

    useEffect(() => {
        console.log("this is storyLocations[locationIndex] ", storyLocations[locationIndex]);
        navigation.setOptions({
            title: storyLocations[locationIndex].title,
            numStories: storyLocations[locationIndex].stories.length
        });
    }, []);

    
    
    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            <View style={styles.header}>
                <View style={styles.backButton}>
                    <Ionicons name="chevron-back-outline" size={34} color="black" onPress={() => navigation.navigate('MainMap')} />
                </View>

                <View style={styles.titleView}> 
                    <Text style={styles.title}>
                        {storyLocations[locationIndex].title}
                        </Text>
                        <Text style={styles.numStories}>
                        {storyLocations[locationIndex].stories.length + " Stories Available"}
                        </Text>
                </View>

                <View style={styles.backButton}>

                </View>
                

            </View>

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
            

            {/* <StoryLocationComponent locationIndex={locationIndex}/> */}
            
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

    

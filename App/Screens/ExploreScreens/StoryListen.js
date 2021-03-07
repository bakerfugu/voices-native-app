import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ScrollView, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import Slider from 'react-native-reanimated-slider';
import {Ionicons, Entypo} from '@expo/vector-icons'
    
export default function StoryListen () {
    const [isPlaying, setPlayStatus] = useState(false);
    const navigation = useNavigation();
    return (
       
        
        
      
        <ScrollView contentContainerStyle ={styles.container}>
        <BackgroundGradient/>


            <View style={styles.header}/>
            <View style={styles.firstView}> 
                <View style={styles.content}>

                    <Image source={Images.silverMan} resizeMode='contain' style={styles.image}/>
                    <Text style={styles.title}> Title of Story </Text>
                    <Text style={styles.author} onPress={() => navigation.navigate('Profile')}> @author</Text>

                    <View style={styles.progressBar}/>

                    <View style={styles.playButtons}>
                        <Ionicons name={'play-back-sharp'} size={28}/>
                        <TouchableOpacity onPress={() => setPlayStatus(!isPlaying)}>
                        <Ionicons name={isPlaying ? 'pause-circle' : 'play-circle'} size={64} color={"#1ddbb5"}/>
                        </TouchableOpacity>
                        
                        <Ionicons name={'play-forward-sharp'} size={28}/>
                    </View> 

                    </View>

                    <View style={styles.transcriptAndOptions}>
                    <View style={styles.transcriptButton}>
                        <Text style={{fontSize: 20}}>Transcript</Text>
                    </View>
                    <Entypo name={'dots-three-horizontal'} size={36} color="black" />
                </View>


            </View>

            <View style={styles.transcript}>
                <Text style={{fontSize: 20}}>
                My grandparents were only 16 when they arrived in Barcelona. 
                They were commissioned to design a building to commemorate the integrity and strength of the city in war times. 
                How can you design a building to represent an entire city?
                 Although I can hardly understand the pressure, my grandpa describes how he just knew. For him it was a gut feeling. 
                 His culture was inside of him. It was something that he expressed everyday. He carried it with him where ever he went. 
                 For him, making this building about his city was about telling the narratives of his friends and family. He had to design with them in mind. 
                 There is no greater inspiration than these people.

                </Text>
            </View>
            
   

        
       
        
    </ScrollView>

      
        
  

    );

}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',

    },
    header: {
        width: '100%',
        height: 100,
        // backgroundColor: 'grey',
        left: 0,
        top: 0
    },
    content: { 
       height: '90%',
        // flex: 1,
        // height: '100%',
        width: '100%',
        flexDirection: 'column',
        // backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',

        

    },
    image: {
        width: '50%',
        aspectRatio: 1,
        borderRadius: 25,
        marginBottom: 10

    },
    title: {
        fontSize: 22,
        marginBottom: 10,
    },
    author: {
        fontSize: 18,
        color: 'grey',

    },
    progressBar: {
        marginTop: 15,
        height: 10,
        width: '80%',
        backgroundColor: 'lightgrey'
    },
    playButtons: {
        width: '50%',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    transcriptAndOptions: {
        alignSelf: 'center',
        height: '10%',
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 15,
 

    },
    transcriptButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#F1B600',
        alignItems: 'center',
        borderRadius: 15,
        

    },

    
    firstView: {
        height: windowHeight - 190,
        width: '100%',
        marginBottom: 20
        
        
    },
    transcript: {
        flex:1,
        marginHorizontal: 30
    },




    
});

    

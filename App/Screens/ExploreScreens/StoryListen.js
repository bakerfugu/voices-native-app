import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ScrollView, Dimensions, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import Header from '../../Components/Header.js';
import { Images } from '../../Themes'
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'
import LongButton from '../../Components/LongButton'
    
export default function StoryListen ({route, navigation}) {
    const {title, author, length, location} = route.params
    const [isPlaying, setPlayStatus] = useState(false);

    return (

        <View style={styles.container}>
            <BackgroundGradient/>
            <Header title={location} page='Story List' playlist={null}/>
            <View style={styles.content}>
                <ImageBackground style={{width: 400, aspectRatio: 1, alignItems: 'center', justifyContent: 'center'}} source={Images.yellowOrb} resizeMode='center'>
                    <Image source={Images.silverMan} style={{width: 200, aspectRatio: 1, borderRadius: 200}}/>
                </ImageBackground>

                <Text style={{fontSize: 24, fontFamily: "Montserrat", textAlign: 'center', marginBottom: 10}}>{title}</Text>
                <Text style={{fontSize: 18, fontFamily: "Montserrat-Light", textAlign: 'center', marginBottom: 10}}>{author}</Text>
                <Text style={{fontSize: 24, fontFamily: 'Montserrat', textAlign: 'center'}}>00:00 / 25:46</Text>
                <View style={styles.progressBar}/>

                <View style={styles.playButtons}>
                    <Ionicons name={'play-back-sharp'} size={28}/>
                    <TouchableOpacity onPress={() => setPlayStatus(!isPlaying)}>
                    <Ionicons name={isPlaying ? 'pause-circle' : 'play-circle'} size={80} color={"#1ddbb5"}/>
                    </TouchableOpacity>
                    
                    <Ionicons name={'play-forward-sharp'} size={28}/>
                </View> 

                <View style={styles.transcriptAndOptions}>
                <View style={{width: '30%'}}>
                    <LongButton label='Transcript' onPress={() => console.log('button pressed')} disabled={false}/>
                </View>

                <View style={{width:'30%', flexDirection: 'row', justifyContent: 'space-around'}}>
                <Ionicons name={"md-share-outline"} size={34} color={'black'} style={styles.icon}/>
                 <MaterialIcons name={"playlist-add"} size={38} color={'black'} style={styles.icon} onPress={() => setModalVisibility(true)}/>
                </View>

            </View>


            </View>

            
        </View>
            


      
        
  

    );

}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'grey'

    },
    header: {
        width: '100%',
        height: 100,
        // backgroundColor: 'grey',
        left: 0,
        top: 0
    },
    content: { 
       height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '-5%',
        // backgroundColor: 'grey'
      
        

    },
    image: {
        width: '50%',
        //width: 200, 
        //height: 200, 
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
        alignItems: 'center',
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

    

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';
import LongButton from './LongButton'
import { LinearGradient } from 'expo-linear-gradient';
import Playlist from './Playlist.js';
import storyPlaylists from './StoryPlaylists';
import { MaterialIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';

export default function TranscriptModal ({visible, openTranscript, transcript}) {

   

    return (
        <Modal
            visible={visible}
            transparent={true}
        >
  
            <View style={styles.centeredView}>

            
                <View style={styles.modalView}>

                    <View style={styles.mainInfo}>
                         <View style={styles.outer}>
                            <MaterialIcons name='cancel' size={28} color='black' onPress={() => openTranscript(false)}/>
                        </View>
                        
                        <View style={styles.titleView}>
                            <Text style={{fontFamily: 'Montserrat', fontSize: 24, textAlign: 'center'}}>This is the title of the story</Text>
                            <Text style={{fontFamily: 'Montserrat-Light', fontSize: 18, textAlign: 'center'}}>Author</Text>
                        </View>
                        
                        <View style={styles.outer}>

                        </View>
                    </View>

                    <ScrollView style={styles.transcript}>
                        <Text style={{fontFamily: 'Montserrat', fontSize: 24}}>
                            {transcript}
                        </Text>

                        <View style={{height: 105}}/>
                    </ScrollView>

                 
               
                </View>

            </View>
        

    </Modal>
     
    )
}

const styles = StyleSheet.create({
    centeredView: {
       
        height: '100%',
        justifyContent: "center",
        alignItems: "stretch",
        marginTop: 150
        
        
      },
      modalView: {
  
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 35,

        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    
      grid: {
        marginBottom: 32, 
        
        alignItems: 'center', 
        
    }, 
    mainInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        width: '90%',
       

    },
    outer: {
        width: '10%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titleView: {
        width: '80%',
        flex: 1,
       
    },
    transcript: {
        flex: 1, 
        height: '100%',
        width: '100%',
        margin: 15,
        paddingHorizontal: 15,
    }
});
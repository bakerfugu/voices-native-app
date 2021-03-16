import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';
import LongButton from './LongButton'
import { LinearGradient } from 'expo-linear-gradient';
import Playlist from './Playlist.js';
import storyPlaylists from './StoryPlaylists';
import { MaterialIcons } from '@expo/vector-icons'

export default function ConfirmationModal ({visible, setConfirmation}) {

    

    return (
        <Modal
        animationType = "slide"
        transparent = {true}
        visible = {visible}
        onRequestClose={() => {
            setModalVisible(!visible);
        }}
        >
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '60%', padding: '10%'}}>
        <View style={styles.modalView}>

            <Text style={styles.posted}>Success!</Text>
            <Text style={styles.thanks}>The story has been added to your playlist</Text>

            <TouchableOpacity style={styles.able}  onPress={() => setConfirmation(false)}> 
                <Text>Ok</Text>
            </TouchableOpacity>
            
            


        </View>

        </View>
        
    </Modal>
     
    )
}

const styles = StyleSheet.create({
    centeredView: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        
        
      },
      modalView: {
        
        // flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "white",
        borderColor: '#F1B600',
        borderWidth: 3,
        borderRadius: 20,
        paddingHorizontal: '10%',
        paddingTop: '5%',
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
        marginTop: '25%', 
        alignItems: 'center', 
        
    }, 
    posted: {
        fontFamily: 'Montserrat',
        fontSize: 32,
        alignSelf: 'center'
    },
    thanks: {
        fontSize: 18,
        fontFamily: 'Montserrat-Light',
        color: 'grey',
        alignSelf: 'center',
        marginBottom: 10
    },
    able: {
        borderRadius: 20,
        //flex: 1,
        height: 40,
        width: '100%',
        backgroundColor: '#FCC201',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#F1B600',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: '2%', 
        paddingHorizontal: '20%'

        // marginBottom: 50, 
    }
});
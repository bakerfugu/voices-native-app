import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';
import LongButton from './LongButton'
import { LinearGradient } from 'expo-linear-gradient';
import Playlist from './Playlist.js';
import storyPlaylists from './StoryPlaylists';
import { MaterialIcons, Feather, Ionicons, FontAwesome } from '@expo/vector-icons'

export default function SharingModal ({visible, setVisibile, title, author}) {

    

    return (
        <Modal
        animationType = "slide"
        transparent = {true}
        visible = {visible}
        onRequestClose={() => {
            setModalVisible(!visible);
        }}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>

                <MaterialIcons name='cancel' size={24} color='black' style={{position: 'absolute', top: 5, left: 5}}/>
                <View style={{ width: '100%', padding: '5%', marginLeft: 50}}>
                        <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 18,}}>{title}</Text>
                        <Text>{author}</Text>
                </View>
                
            </View>

            <View style={styles.sharingIcons}>
                <View style={{width: 300, padding: '5%', flexDirection: 'column', justifyContent: 'center'}}>
                        <View style={styles.iconRow}>
                            <TouchableOpacity style={styles.icon} onPress={() => setVisibile(false)}>
                                <Feather name="message-circle" size={40} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icon} onPress={() => setVisibile(false)}>
                                <Feather name="link" size={40} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icon} onPress={() => setVisibile(false)}>
                                <Ionicons name='logo-twitter' size={40} color="white"/>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.iconRow}>
                            <TouchableOpacity style={styles.icon} onPress={() => setVisibile(false)}>
                                <FontAwesome name='facebook-f' size={40} color="white"/>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icon} onPress={() => setVisibile(false)}>
                                <Ionicons name='logo-instagram' size={40} color="white"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icon} onPress={() => setVisibile(false)}>
                                <Ionicons name='ios-logo-whatsapp' size={40} color="white"/>
                            </TouchableOpacity>

                        </View>
                </View>

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
        marginTop: '70%', 
        
        
      },
      modalView: {
        
        // flex: 1,
        width: '90%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#FCC201",
        borderColor: '#F1B600',
        borderWidth: 3,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // paddingHorizontal: '10%',
        // paddingTop: '5%',
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
    },
    titleBar: {
        
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FCC201'
    },
    sharingIcons: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'grey',
        backgroundColor: "white",
        borderColor: '#F1B600',
        borderWidth: 3,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // paddingHorizontal: '10%',
        // paddingTop: '5%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    iconRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: 5

    },
    icon: {
        height: 70, 
        width: 70,
        borderRadius: 35,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
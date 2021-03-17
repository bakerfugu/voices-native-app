import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import ListOfStories from '../../Components/ListOfStories.js';
import ListNoHeader from '../../Components/ListNoHeader.js';


export default function Profile () {
    let data = {
        handle: '@taylorl',
        location: 'Los Angeles',
        storyCt: 2,
        playlistCt: 4, 
        bioText: "fakebio"
    };
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.scroll}>
            <BackgroundGradient/>
            <Image source={Images.profSettings} style={styles.settings} resizeMode='contain' />
            <View style={styles.photoContainer}>
            <Image source={Images.profPlaceholder} resizeMode='contain' />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.handle}>
                    {data.handle}
                </Text>
                <Text style={styles.location}>
                    {data.location}
                </Text>
                <View style={styles.metaData}>
                    <Text>
                        <Text style={styles.number}>{data.storyCt}</Text> Stories Told
                    </Text>
                    <Image source={Images.dot} style={styles.dot} />
                    <Text>
                    <Text style={styles.number}>{data.playlistCt}</Text> Playlists 
                    </Text>
                </View>
                <View style={styles.bioContainer}>
                    <Text>
                        {data.bioText}
                    </Text>
                </View>
            </View>

            <View>
                <Text id="stories" style={styles.s_header}>Stories</Text>
                <ListNoHeader/>
            </View>
            <Text style={styles.p_header}>Playlists</Text>
            <View style={styles.listContainer}>
                <View style={styles.listRow}>
                <View style={styles.playlistObj}>
                    <Image source={Images.fountainsEu} style={styles.playlistImg}/>
                    <Text style={styles.playlistTitle}>Fountains of Europe</Text>
                </View>
                <View style={styles.playlistObj}>
                    <Image source={Images.fountainsEu} style={styles.playlistImg}/>
                    <Text style={styles.playlistTitle}>Fountains of Europe</Text>
                </View>
                </View>
                <View style={styles.listRow}>
                <View style={styles.playlistObj}>
                    <Image source={Images.fountainsEu} style={styles.playlistImg}/>
                    <Text style={styles.playlistTitle}>Fountains of Europe</Text>
                </View>
                <View style={styles.playlistObj}>
                    <Image source={Images.fountainsEu} style={styles.playlistImg}/>
                    <Text style={styles.playlistTitle}>Fountains of Europe</Text>
                </View>
                </View>
                
            </View>
        </ScrollView>
    );


}

const styles = StyleSheet.create({
    settings: {
        height: 30,
        width: 30,
        alignSelf: 'flex-end',
        marginTop: '2%',
        marginRight: '4%',
        marginBottom: '-3%'
    },
    photoContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }, 
    infoContainer: {
        flex: 1,
        width: '100%',
        marginTop: '1%',
        alignItems: 'center',
        
    },
    scroll: {
        backgroundColor: '#FFF'
     
    },
    handle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    location: {
        fontWeight: '100',
        marginTop: '1%'
    },
    metaData:{
        marginTop: '1%',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: '100'
    },
    dot: {
        height: 15,
        width: 15,
        marginLeft: '3%',
        marginRight: '3%'
    },
    number: {
        fontWeight: 'bold'
    },
    bioContainer: {
        marginTop: '3%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#F1B600',
        alignItems: 'center',
        width: '90%',
        height: 'auto',
        padding: '3%'
    },
    s_header: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: '5%',
        marginTop: '10%',
        marginBottom: '-3%'
    },
    p_header: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: '5%',
        marginTop: '10%',
        marginBottom: '4%'
    },
    playlistImg: {
        height: 150,
        width: 150,
        marginLeft: '5%'
    },
    playlistTitle: {
        marginLeft: '5%',
        fontSize: 16
    },
    playlistObj: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '2%'
    },
    listRow: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '6%'

    },
    listContainer: {
        alignItems: 'center'
    }
  
});
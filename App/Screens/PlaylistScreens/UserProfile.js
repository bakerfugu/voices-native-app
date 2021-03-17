import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import ListOfStories from '../../Components/ListOfStories.js';
import ListNoHeader from '../../Components/ListNoHeader.js';
import {Ionicons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function userProfile () {
    // let data = {
    //     handle: '@taylorl',
    //     location: 'Los Angeles',
    //     storyCt: 2,
    //     playlistCt: 4, 
    //     bioText: "fakebio"
    // };

const [profile, setProfile] = useState("");
  const getProfile = async () => {
    try {
        const value = await AsyncStorage.getItem('profile');
        const parsed = JSON.parse(value)
        console.log("Parsed", parsed);
        setProfile(parsed)
       
    }
    catch (e) {
        console.log(e)
    }
    

  }
  useEffect(() => {
    getProfile();
  }, [])
    const navigation = useNavigation();

    return (
        <View style={{flex:1}}>
            <BackgroundGradient/>
        
            <ScrollView style={styles.scroll}>
            
            <Image source={Images.profSettings} style={styles.settings} resizeMode='contain' />
            <View style={styles.photoContainer}>
                {profile.image ? 
                <TouchableOpacity style={styles.profImageView} onPress={() => navigation.navigate("User Profile")}>
                <Image 
                    source={profile.image} 
                    resizeMode='contain' 
                    style={styles.profImage}
                />
                </TouchableOpacity>
                : 
                <Ionicons name="ios-person-add" size={100} color="black" onPress={console.log('add photo')} />}
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.handle}>
                    {profile.handle}
                </Text>
                <Text style={styles.location}>
                    San Francisco
                </Text>


                <View style={styles.metaData}>
                    <Text>
                        <Text style={styles.number}>{profile.stories ? profile.stories.length : 0}</Text> Stories Told
                    </Text>
                    <Image source={Images.dot} style={styles.dot} />
                    <Text>
                    <Text style={styles.number}>{profile.playlists ? profile.playlists.length : 0}</Text> Playlists 
                    </Text>
                </View>
                <View style={styles.bioContainer}>
                    <Text>
                        This is your bio
                    </Text>
                </View>
            </View>

            <View>
                <Text id="stories" style={styles.s_header}>Stories</Text>
                <View style={{justifyContent:'center', alignItems: 'center'}}>
                    
                </View>
            </View>
            {/* <Image source={Images.profSettings} style={styles.settings} resizeMode='contain' />

            <View style={styles.photoContainer}>
                {profile.image ? 
                <TouchableOpacity style={styles.profImageView} onPress={() => navigation.navigate("User Profile")}>
                <Image 
                    source={profile.image} 
                    resizeMode='contain' 
                    style={styles.profImage}
                />
                </TouchableOpacity>
                : 
                <Ionicons name="ios-person-add" size={100} color="black" onPress={console.log('add photo')} />}
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.handle}>
                    {profile.handle}
                </Text>
                <Text style={styles.location}>
                    San Francisco
                </Text>


                <View style={styles.metaData}>
                    <Text>
                        <Text style={styles.number}>{profile.stories.length}</Text> Stories Told
                    </Text>
                    <Image source={Images.dot} style={styles.dot} />
                    <Text>
                    <Text style={styles.number}>{profile.playlists.length}</Text> Playlists 
                    </Text>
                </View>
                <View style={styles.bioContainer}>
                    <Text>
                        This is your bio
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
                
            </View> */}
        </ScrollView>
        </View>
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
        // flex: 1,
        // width: '100%',
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        backgroundColor: 'white',
        marginBottom: 30, 
        alignSelf: 'center'
    }, 
    infoContainer: {
        flex: 1,
        width: '100%',
        marginTop: '1%',
        alignItems: 'center',
        
    },
    scroll: {
        flex: 1,
        height:'100%',
        width: '100%',
     
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
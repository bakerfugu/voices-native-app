import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
export default function Header ({playlist, title, page}) {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            
            <View style={styles.backButton}>
                <Ionicons name="chevron-back-outline" size={34} color="black" onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.titleView}> 
                <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.backButton}>
                {page==='Story List' && <MaterialIcons name='assistant-navigation' size={34} color='black'/>}
                {page==='Playlist-ListView' && <Ionicons name='map-outline' size={34} color='black' onPress={() => navigation.navigate('PlaylistMapView', {playlist: playlist})}/>}
                {page==='Playlist-MapView' && <MaterialIcons name='playlist-play' size={40} color='black' onPress={() => navigation.navigate('PlaylistListView', {playlist: playlist})}/>}
                
            </View>


          
            

        </View>

    );
    
}

const styles = StyleSheet.create({
    
    header: {
        width: '100%',
        // height: 75,
        // flex: 1,
        // backgroundColor: 'grey',
        // left: 0,
        // top: 0,
        flexDirection: 'row',
        paddingLeft: 10, 
        justifyContent: 'flex-start',
        alignItems: 'center',
        

    },
    titleView: {
        width:'75%',
        alignItems:'center',
       
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        // height: '100%',
        // backgroundColor: 'grey',
        width: '12.5%',
        height: 75,


    },
    title: {
        fontSize: 26, 
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '3%', 
   
    },
  
});
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StoryClipPlaylist from '../../Components/StoryClipPlaylist';

export default function PlaylistListView () {

    const DATA = [
        {
          id: "1",
          title: "First Item",
        },
        {
          id: "2",
          title: "Second Item",
        },
        {
          id: "3",
          title: "Third Item",
        },
        {
        id: "4",
        title: "First Item",
        },
        {
        id: "5",
        title: "Second Item",
        },
        {
        id: "6",
        title: "Third Item",
        }
    ];

    const renderItem = () => {
        return (
            <StoryClipPlaylist/>
        );

    }
    const navigation = useNavigation();
    return (
        <View style ={styles.container}>
            <View style={styles.header}/>
            <View style={styles.flatlist}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
        height: 100,
        width: '100%'
    },
    flatlist: {
        marginTop: 20,
        flex: 1,
        width:'100%'
    }

  });
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ImageBackground, ScrollView} from 'react-native';
import { Images } from '../Themes';
import StoryClip from './StoryClip.js';

export default function LocationInfo () {

    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
        },
        {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
        },
        {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
        },
        {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
        }
    ];

    const renderItem = () => {
        return (
            <StoryClip/>
        );

    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>99 Stories Available</Text>
                <View style={styles.background}>
                    <ImageBackground source={Images.yellowOrb} resizeMode={'contain'} style={styles.orb}>
                        <Image source={Images.parliament} resizeMode='contain' style={styles.locationImage}/>
                    </ImageBackground>             
                </View>
                
                <View style={styles.flatlist}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />

                </View>
                

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'grey'
    },
    background: {
        width: '70%',
        aspectRatio: 1,
        // backgroundColor: 'pink'
        
    },
    orb: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    locationImage: {
        height: '80%',
        aspectRatio: 1,
    
    },
    flatlist: {
        marginTop: 20,
        flex: 1,
        width:'100%'
    }
  

});
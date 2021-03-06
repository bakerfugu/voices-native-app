import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
    
    
export default function StoryListen () {
    const navigation = useNavigation();
    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            <View style={styles.header}/>
            {/* <ScrollView> */}
                <View style={styles.pictureView}>
                   <Image source={Images.silverMan} resizeMode='contain' style={styles.image}/>
                   <Text style={styles.title}> Title of Story </Text>
                   <Text style={styles.author} onPress={() => navigation.navigate('Profile')}> @author</Text>
                </View>

                <View style={styles.playBarAndButtons}>

                </View>
                
            {/* </ScrollView */}
            
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    pictureView: {
        flex: 1,
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

    
});

    

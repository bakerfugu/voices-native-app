import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
    
    
export default function Confirmation () {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            
            <ImageBackground source={Images.santaMonica} style={styles.image}>
            <View style ={styles.container}>
                <TouchableOpacity style={styles.recordNew}  onPress={() => {navigation.navigate('RecordHome')}}>
                    <Text style={styles.recordButtonText}>Record New Story</Text>
                </TouchableOpacity>


                <Image source={Images.storyBubble} style={styles.storyBubble}>

                </Image>
            </View>
            </ImageBackground>

        

        </SafeAreaView>
        
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
    },
    image: {
        height: '100%',
        width: '100%'
      },
    recordNew: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: "3%",
        borderColor: "#F1B600",
        borderWidth: 3,
        marginTop: '80%'
    },
    storyBubble: {
        marginTop: '35%',
        marginRight: '40%'
    },
    recordButtonText: {
        fontSize: 20
    }
});


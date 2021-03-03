import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import DeleteOrEdit from '../../Components/DeleteOrEdit.js';
    
    
export default function Confirmation () {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ImageBackground source={Images.santaMonica} style={styles.image}>
            <View style ={styles.container}>
                <TouchableOpacity style={styles.recordNew}  onPress={() => {navigation.navigate('RecordHome')}}>
                    <Text style={styles.recordButtonText}>Record New Story</Text>
                </TouchableOpacity>
                <View style={styles.subcontainer}>
                <Image source={Images.storyBubble} style={styles.storyBubble}>

            </Image>
            <DeleteOrEdit style={styles.test}/>
                </View>

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
        marginTop: '0%',
    },
    recordButtonText: {
        fontSize: 20
    },
    subcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '35%',
        marginRight: '18%'
    }
});


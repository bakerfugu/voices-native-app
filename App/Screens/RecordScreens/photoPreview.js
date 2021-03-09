import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, ImageBackground, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';
import { Camera } from 'expo-camera';
import SvgCapturePhotoIcon from '../../../icons/CapturePhotoIcon'
import SvgSwitchCameraDirectionIcon from '../../../icons/SwitchCameraDirectionIcon'
import { useNavigation } from '@react-navigation/native';
import SvgUsePhotoIcon from '../../../icons/UsePhotoIcon'
import BackgroundGradient from '../../Components/BackgroundGradient.js';
export default function PhotoPreview ({route, navigation}) {
    const {uri, w, h} = route.params;
    console.log(h);
    

    return (
        <View style={styles.container}>
            <BackgroundGradient/>
            <View style={styles.v}>
            <TouchableOpacity>
            <SvgUsePhotoIcon
                width={'60'} style={styles.usePhoto} onPress={() => {navigation.navigate('StoryInfo', {
                    uri: uri,
                    w: w,
                    h: h
                  });
                } }/>
            </TouchableOpacity>  
            </View>
            <View style={styles.imgContainer}>
            <ImageBackground
            source={{uri: uri}} imageStyle={{borderRadius: 350}} style={styles.background}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignContent: 'center',
        
    },
    usePhoto: {
        marginRight: '5%',
        marginTop: '5%'
    },
    v: {
        display: 'flex',
        alignItems: 'flex-end',
        
    },
    background: {
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: '25%',
        flex: 1,
        width: 350,
        height: 350,
        borderRadius: 175
    }
  });

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { YellowBlurOrb } from '../../icons';
import {useNavigation} from '@react-navigation/native'
import {Images} from '../Themes';


export default function FloatingLocMarker ({imageSource, recordStory}) {
    const navigation = useNavigation();

    return (
            <View style={styles.orb}>
                <View style={styles.innerOrb}>
                    <Image source={Images.usersLoc} resizeMode='cover' style={styles.storyImage}/>  
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    orb: {
        width: 60,
        height: 60
    },
    innerOrb: {  
        position: 'absolute',
    },
    storyImage: {
        width: 60,
        height: 60,
        borderRadius: 20,
        left: 5,
        top: 5
    }
});
/* Ellipse 8 */

// position: absolute;
// width: 48px;
// height: 48px;
// left: 128px;
// top: 280px;

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { YellowBlurOrb } from '../../icons';
import {useNavigation} from '@react-navigation/native'

export default function FloatingStoryMapMarker ({imageSource, recordStory}) {
    const navigation = useNavigation();

    return (
        
        
            <View style={styles.orb}>
                <YellowBlurOrb 
                    style={styles.innerOrb}
                    width={50}
                    height={50}
                />
                <View style={styles.innerOrb}>
                    {recordStory ?
                    <Image source={{uri: imageSource}} resizeMode='cover' style={styles.storyImage}/> :
                    <Image source={imageSource} resizeMode='cover' style={styles.storyImage}/>
                    }
                    
                </View>
            </View>
        
    )
}

const styles = StyleSheet.create({
    orb: {
        width: 50,
        height: 50
    },
    innerOrb: {  
        position: 'absolute',
    },
    storyImage: {
        width: 40,
        height: 40,
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

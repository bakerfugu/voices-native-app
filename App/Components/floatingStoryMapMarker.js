import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { YellowBlurOrb } from '../../icons'

export default function FloatingStoryMapMarker ({imageSource}) {
    return (
        <View style={styles.orb}>
            <YellowBlurOrb 
                style={styles.innerOrb}
                width={50}
                height={50}
            />
            <View style={styles.innerOrb}>
                <Image source={imageSource} resizeMode='contain' style={styles.storyImage}/>
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

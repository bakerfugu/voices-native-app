import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import {Images} from '../Themes'

export default function StoryClipPlaylist () {
    return (
        <View style={styles.container}>
            <View style={styles.storyPic}>
                <Image source={Images.mexicoCity} resizeMode='contain' style={styles.pic}/>
            </View>

            <View style={styles.storyInfo}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}> Story Title</Text>
                <Text> xx min | mon year</Text>

        
                <View style={styles.tagRow}>
                    <View style={styles.tag}>
                        <Text style={{fontSize: 12}}>Tag 1</Text>
                    </View>
                    <View style={styles.tag}>
                        <Text style={{fontSize: 12}}>Tag 2</Text>
                    </View>

                    <View style={{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', flex: 1,}}>
                        <Ionicons name={"md-share-outline"} size={24} color={'black'} />
                        <MaterialIcons name={"playlist-add"} size={28} color={'black'} style={{marginLeft: 5}} />    
                    </View>
                    
                </View>

                
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

      height: 100,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20
      
    },
    storyPic: {
        flex: 1,
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    
 

    },
    storyInfo: {
        flex: 4,

        height: "80%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        
        marginLeft: 20

    },
    pic: {
        borderRadius: 8,
    },
    tagRow: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    
      },
      tag: {
        
        borderRadius: 15,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3,
        paddingHorizontal: 15,
        marginRight: 5,

      },
});
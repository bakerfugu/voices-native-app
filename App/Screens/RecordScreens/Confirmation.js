import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Modal, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import DeleteOrEdit from '../../Components/DeleteOrEdit.js';
    
    
export default function Confirmation () {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}> 
            <ImageBackground source={Images.santaMonica} style={styles.image}>
            <View style={styles.header}/>

            <View style={styles.confirmationMessage}>
                <Text style={styles.recordButtonText}>Your story has been uploaded!</Text>
            </View>
            
        
            <View style={styles.subcontainer}>
    

                <Image source={Images.storyBubble} style={styles.storyBubble}/>
                <DeleteOrEdit style={styles.test}/>
            </View>

        
        </ImageBackground>

        </View>
            

        
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    header: {
        height: 100,
        width: '100%'
    },
    image: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      },
    confirmationMessage: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: "3%",
        borderColor: "#F1B600",
        borderWidth: 3,
      
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


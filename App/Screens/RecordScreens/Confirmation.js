import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, Text, SafeAreaView, View, Modal, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import DeleteOrEdit from '../../Components/DeleteOrEdit.js';
import FloatingStoryMapMarker from '../../Components/floatingStoryMapMarker.js'
    
    
export default function Confirmation ({route, navigation}) {
    const {uri} = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [deleted, setDeleted] = useState(false);

    

    return (
        <View style={styles.container} > 
            <ImageBackground source={Images.santaMonica} style={styles.image}>
            <View style={styles.header}/>

            <View style={styles.confirmationMessage}>
                <Text style={styles.recordButtonText}>
                    {deleted ? "Story deleted!" : "Your story has been uploaded!"}
                </Text>
            </View>
            <View style={styles.subcontainer}>
                
                <Modal
                animationType = "slide"
                transparent = {true}
                visible = {modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                >
                <View style={styles.modalView}>
                    <Pressable style={styles.DeleteOrEdit} >
                        <Text onPress={() => {
                            navigation.navigate('EditStory');
                            setModalVisible(false);
                            }}>
                            Edit
                        </Text>
                    </Pressable>
                    <Pressable style={styles.DeleteOrEdit} 
                    onPress={() => {
                        setDeleted(true);
                        setModalVisible(false);
                    }}
                    >
                        <Text>
                            Delete
                        </Text>
                    </Pressable>
                
                </View>
                </Modal>
                <Pressable onPress={() => setModalVisible(true)}>
                    {
                        deleted ? 
                        <View></View> 
                        :
                        // <Image source={Images.storyBubble} style={styles.storyBubble} /> 
                        <FloatingStoryMapMarker imageSource={uri} recordStory={true}/>
                    }
              
                </Pressable>
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
    },
    modalView: {
        margin: 20,
        backgroundColor: '#F1B600',
        borderRadius: 20,
        marginTop: '125%',
        marginLeft: '30%',
        width: '22%',
        padding: '1%',
        alignItems: "center",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    DeleteOrEdit: {
        borderRadius: 10,
        height: 'auto',
        width: '80%',
        backgroundColor: 'white',
        marginTop: '2%',
        padding: '5%',
        borderWidth: 3,
        borderColor: '#F1B600',
    },
});


import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Pressable, Text, SafeAreaView, View, Modal, Image, TouchableOpacity, Dimensions } from 'react-native';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { ImageBackground } from 'react-native';
import DeleteOrEdit from '../../Components/DeleteOrEdit.js';
import FloatingStoryMapMarker from '../../Components/floatingStoryMapMarker.js'
import MapView, { Marker } from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import { Root, Popup } from 'popup-ui'
    
    
export default function Confirmation ({route, navigation}) {
    const { image } = route.params
    console.log(image)
    const [location, setLocation] = useState(null);
    const [modalVisible, setModalVisibility] = useState(false);
    const mapRef = useRef(null);

    const stanfordCoordinates = {
        latitude: 37.4275,
        longitude: -122.1697,
        latitudeDelta: 0.035922,
        longitudeDelta: 0.035421,
    }
    useEffect(() => {
        if (location==='Stanford University') {
            mapRef.current.animateToRegion(stanfordCoordinates,300)
        }
    }, [location])



    return (
        <View style={styles.container}>

            <View style={{position: 'absolute', top: 0, height: 50, width: '100%', backgroundColor: '#FDF0AF', padding: 5}}>
                <DropDownPicker
                    items={[
                        {label: 'Stanford University', value: 'Stanford University'},
                    ]}
                    defaultValue={location}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa', borderRadius: 20}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    style={{
                        borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                        borderColor: 'lightgrey', borderWidth: 2
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => {
                        
                        setLocation(item.value)
                    }}
                    placeholder='Location'
                        
                />
            </View>


            <MapView 
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: 37.783363,
                    longitude: -122.403908,
                    latitudeDelta: 0.015922,
                    longitudeDelta: 0.015421,
                  }}        
            >  

                <Marker coordinate={stanfordCoordinates}>
                    <FloatingStoryMapMarker imageSource={{uri: image}}/>
                </Marker>

            </MapView>

            <View style={{position: 'absolute', bottom: 0, width: '60%', height: 100}}>
                <LongButton disabled={!location} onPress={() => setModalVisibility(true)} label="Post Story"/>
            </View>
            

            <View style={{position: 'absolute'}}>
                <Modal
                    animationType = "slide"
                    transparent = {true}
                    visible = {modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                    >
                    <View style={styles.modalView}>

                        <Text style={styles.posted}>Your story has been posted!</Text>
                        <Text style={styles.thanks}>Thanks for sharing your perspective</Text>

                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1, height: 50}}>
                                <LongButton label='Delete' disabled={false} onPress={() => {
                                    setLocation(null);
                                    setModalVisibility(false);
                                    }}/>
                            </View>
                            <View style={{flex: 1, height: 50}}>
                                <LongButton label='Edit' disabled={false} onPress={() => {
                                    setLocation(null);
                                    setModalVisibility(false);
                                }}/>
                            </View>
                            <View style={{flex: 1, height: 50}}>
                                <LongButton label='Ok' disabled={false} onPress={() => setModalVisibility(false)}/>
                            </View>
                            {/* <View style={{flex:1}}> 
                                <LongButton label={'Delete'} disabled={false} onPress={() => setLocation(null)}/>
                            </View>
                            <View style={{flex:1}}> 

                            </View>
                            <View style={{flex:1}}>  */}

                            {/* </View> */}
                        </View>

                        {/* <Pressable style={styles.DeleteOrEdit} >
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
                        </Pressable> */}
                    
                    </View>
                </Modal>

            </View>
            
            
                    

           

            
            


        </View>
    )
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
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: -1

    },
    modalView: {
        marginTop: '80%',
        marginHorizontal: '10%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: '5%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    posted: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        alignSelf: 'flex-start'
    },
    thanks: {
        fontSize: 16,
        fontFamily: 'Montserrat-Light',
        color: 'grey',
        alignSelf: 'flex-start'
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});


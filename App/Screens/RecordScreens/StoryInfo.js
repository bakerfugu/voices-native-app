import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, AsyncStorage, View, StatusBar, Image, TouchableOpacity, FlatList, Button, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
    Dropdown,
    GroupDropdown,
    MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';
import StoryInfoForm from '../../Components/StoryInfoForm.js';
import Confirmation from './Confirmation.js';
import SvgTakePhotoIcon from '../../../icons/TakePhotoIcon';
import SvgUploadImageIcon from '../../../icons/UploadImageIcon';
import metrics from '../../Themes/Metrics.js';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { useHeaderHeight } from '@react-navigation/stack'


// export default function StoryInfo ({route}) {
export default function StoryInfo() {
    const KEYBOARD_VERTICAL_OFFSET = 75 + StatusBar.currentHeight;

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState();

    const [valueMS, setValueMS] = useState([]);
    const onChangeMS = (value) => {
        setValueMS(value);
    };

    


    const [image, setImage] = useState(null);

    const getPermissionAsync = async (permission) => {
        const { status } = await Permissions.askAsync(permission);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll or camera permissions to make this work!');
        }
      }
      const pickImage = async () => {
        await getPermissionAsync(Permissions.CAMERA_ROLL);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
        });
        if (!result.cancelled) {
          setImage(result.uri)
        }
      }

      const uploadFromCamera = async () => {
        await getPermissionAsync(Permissions.CAMERA);
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri)
        }
      }

      
        
        
        



    const data = [
        {
            value: '1',
            label: 'COVID-19',
        },
        {
            value: '2',
            label: 'Music',
        },
        {
            value: '3',
            label: 'Dance',
        },
        {
            value: '4',
            label: 'Food',

        },
        {
            value: '5',
            label: 'History',
        },
        {
            value: '6',
            label: 'Folklore',

        }
    ];


    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <BackgroundGradient />
            <View style={styles.header} />

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

                <View style={styles.form}>
                    <TextInput 
                    style={styles.textInput} 
                    placeholder="Title" 
                    onChangeText={setTitle}
                    />
                    <View style={styles.tagDropDrown}>
                        <MultiselectDropdown
                            label='Tags'
                            data={data}
                            chipType="flat"
                            enableSearch
                            value={valueMS}                           
                            onChange={onChangeMS}
                            chipStyle={{ backgroundColor: '#5dd7bf', borderColor: 'black' }}
                            mainContainerStyle={styles.tagsContainer}
                        />
                    </View>


                    {
                        !image ?
                            <View style={styles.photoBubble}>

                                <TouchableOpacity onPress={pickImage}>
                                    <SvgUploadImageIcon
                                        width={"70"}
                                        height={"55"} />
                                    <Text style={{ marginTop: "5%", marginLeft: "13%" }}>
                                        Upload
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={uploadFromCamera}>
                                    <SvgTakePhotoIcon
                                        width={"70"} style={{ marginTop: "-35%" }}
                                    />
                                    <Text style={{ marginTop: "-20%" }}>
                                        Take Photo
                            </Text>
                                </TouchableOpacity>

                            </View>
                            :
                            <TouchableOpacity onPress={() => setImage(null)}>
                                <Image source={{ uri: image }} style={styles.photoBubble}/>             
                            </TouchableOpacity>
                            
                            //style={{ width: w, height: h, borderRadius: w, marginBottom: '5%' }} />
                    }

                    
                            {/* <TextInput 
                                style={styles.textInput} 
                                placeholder="Location" 
                                onChangeText={setLocation}
                           /> */}

                    
                    
                    
                </View>

            </TouchableWithoutFeedback>
{/* 
            <LongButton style={styles.postbutton} onPress={() => { navigation.navigate('Confirmation', {uri: uri}) }} disabled={!title || !uri || !location || !valueMS} label={'Post'}/> */}
            <View style={{ flex: 1,flexDirection: 'column', width: '100%', alignItems: 'center', }}>
                <View style={styles.postButton}>              
                    <LongButton onPress={() => { navigation.navigate('Confirmation', {image: image}) }} disabled={!title || !image || !valueMS} label={'Choose Location'}/>
                </View>
                
            </View>
        </View>


    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    form: {
        // alignSelf: 'stretch',
        // alignItems: 'center'
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'grey',
        width: '100%',
        paddingHorizontal: 10,
        // backgroundColor: 'pink'
    },

    textInput: {
        padding: 10,
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#F1B600',
        borderRadius: 10,
        margin: '10%',
    },

    photoBubble: {
        width: 250,
        height: 250,
        borderRadius: 250,
        // width: '50%',
        // paddingBottom: '50%',
        // borderRadius: 100,
        borderWidth: 3,
        borderColor: '#F1B600',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: 'white',
        margin: '10%',
        //marginBottom: "20%"

    },
    tagDropDrown: {
        height: 100,
        width: '80%',
        //marginBottom: 20,
        margin: '10%'
    },
    tagsContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#F1B600',
        borderRadius: 10,
        //marginTop: '10%' 

    },
    header: {
        width: '100%',
        height: metrics.headerHeight,

    },
    postButton: {
        flex: 1,
        width: '40%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'flex-end',
        marginBottom: 15,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'flex-end',
        //paddingBottom: metrics.paddingBottom,
        //paddingHorizontal: 5, 
        //margin: '10%', 
    }, 

});



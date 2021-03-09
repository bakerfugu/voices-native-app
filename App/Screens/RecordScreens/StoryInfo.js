import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
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




// export default function StoryInfo ({route}) {
export default function StoryInfo({ route }) {

    let uri, w, h;
    if (route.params) {
        uri = route.params.uri;
        w = route.params.w;
        h = route.params.h;
        //const {uri, w, h} = route.params;
        console.log(uri);
    }

    // const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState();

    const [valueMS, setValueMS] = useState([]);
    const onChangeMS = (value) => {
        setValueMS(value);
    };



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
                        !uri ?
                            <View style={styles.photoBubble}>

                                <TouchableOpacity onPress={() => { navigation.navigate('UploadPhoto') }}>
                                    <SvgUploadImageIcon
                                        width={"70"}
                                        height={"55"} />
                                    <Text style={{ marginTop: "5%", marginLeft: "13%" }}>
                                        Upload
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate('TakePhoto')}>
                                    <SvgTakePhotoIcon
                                        width={"70"} style={{ marginTop: "-35%" }}
                                    />
                                    <Text style={{ marginTop: "-20%" }}>
                                        Take Photo
                            </Text>
                                </TouchableOpacity>

                            </View>
                            :
                            <Image source={{ uri: uri }} style={styles.photoBubble}/>
                            //style={{ width: w, height: h, borderRadius: w, marginBottom: '5%' }} />
                    }
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Location" 
                        onChangeText={setLocation}
                    />
                </View>

            </TouchableWithoutFeedback>
{/* 
            <LongButton style={styles.postbutton} onPress={() => { navigation.navigate('Confirmation', {uri: uri}) }} disabled={!title || !uri || !location || !valueMS} label={'Post'}/> */}
            <View style={{ flex: 1,justifyContent: 'flex-end', width: '100%', alignItems: 'center', paddingBottom: metrics.paddingBottom }}>
                <View style={styles.postButton}>              
                    <LongButton onPress={() => { navigation.navigate('Confirmation', {uri: uri}) }} disabled={!title || !uri || !location || !valueMS} label={'Post'}/>
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
        flex: 5,
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
        height: 40,
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
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'flex-end',
        //paddingBottom: metrics.paddingBottom,
        //paddingHorizontal: 5, 
        //margin: '10%', 
    }, 

});



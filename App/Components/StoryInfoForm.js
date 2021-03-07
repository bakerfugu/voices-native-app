import React, { useState, useEffect } from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import ImageButton from '../Components/ImageButton.js';
import {
    Dropdown,
    GroupDropdown,
    MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';
import { useNavigation } from '@react-navigation/native';
import SvgTakePhotoIcon from '../../icons/TakePhotoIcon';
import SvgUploadImageIcon from '../../icons/UploadImageIcon';
    

export default function StoryInfoForm () {
    const navigation = useNavigation();
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

    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.form}>
            <TextInput style={styles.textInput} placeholder="Title"/>
            <View style={styles.tagDropDrown}>
                <MultiselectDropdown
                    label='Tags'
                    data={data}
                    chipType="flat"
                    enableSearch
                    value={valueMS}
                    onChange={onChangeMS}
                    chipStyle={{backgroundColor: '#5dd7bf', borderColor: 'black'}}
                    mainContainerStyle={styles.tagsContainer}
                    
                />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => {navigation.navigate('UploadPhoto')}}>
                    <SvgUploadImageIcon
                    width={"70"}
                    height={"55"}/>
                    <Text style={{marginTop: "5%", marginLeft: "13%"}}>
                        Upload 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TakePhoto')}>
                    <SvgTakePhotoIcon
                    width={"70"} style={{marginTop: "-35%"}}
                    />
                    <Text style={{marginTop: "-20%"}}>
                        Take Photo
                    </Text>
                </TouchableOpacity>       
            </View>
            <TextInput style={styles.textInput} placeholder="Location"/>  
        </View>
        </TouchableWithoutFeedback>
        
    );

}

const styles = StyleSheet.create({
    form: {
        // alignSelf: 'stretch',
        // alignItems: 'center'
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'grey',
        width: '100%',
        paddingHorizontal: 10,
        // backgroundColor: 'pink'
    },

    textInput: {

        // alignSelf: 'center',
        padding: 10,
        width: '80%',
        height: 40, 
        marginBottom: 30, 
        // color: 'black',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#F1B600',
        borderRadius: 10
    },
    buttonView: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 20,
        paddingHorizontal: 5,
        marginTop: "10%",
        marginBottom:"15%"
    },
    tagDropDrown: {
        height: 100,
        width: '80%',
        marginBottom: 20,
        marginTop: "10%"
    },
    tagsContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#F1B600',
        borderRadius: 10
        
    }

    
});
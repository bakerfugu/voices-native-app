import React, { useState, useEffect } from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TextInput 
} from 'react-native';
import ImageButton from '../Components/ImageButton.js';
import {
    Dropdown,
    GroupDropdown,
    MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';
    

export default function StoryInfoForm () {
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

            <View placeholder="Upload Image"></View>
            <View style={styles.buttonView}>
                <ImageButton label='Upload Image'/>
                <ImageButton label='Take Image'/>
            </View>
            <TextInput style={styles.textInput} placeholder="Location"/>
            
        </View>

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
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        paddingHorizontal: 5
    },
    tagDropDrown: {
        height: 100,
        width: '80%',
        marginBottom: 20
    },
    tagsContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#F1B600',
        borderRadius: 10
        
    }

    
});
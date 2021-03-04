import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import LongButton from '../../Components/LongButton.js';
import { Images } from '../../Themes/index.js';
import { useNavigation } from '@react-navigation/native';
import {
    Dropdown,
    GroupDropdown,
    MultiselectDropdown,
  } from 'sharingan-rn-modal-dropdown';
    
    
export default function StoryInfo () {
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
          
        }
    ];

    const navigation = useNavigation();
    return (

        <View style={styles.container}>
            <BackgroundGradient/>
            <View style={styles.header}/>
            <View style={styles.tagDropDrown}>
            <MultiselectDropdown
                label='Tags'
                data={data}
                chipType="flat"
                enableSearch
                value={valueMS}
                onChange={onChangeMS}
                chipStyle={{backgroundColor: '#5dd7bf', borderColor: 'black'}}
          
                mainContainerStyle={{backgroundColor: 'white', borderColor: 'yellow', borderWidth: 2}}
                
            />

            </View>
            
        </View>
       
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
        position: 'absolute',
        width: '100%',
        height: 100,
        // backgroundColor: 'grey',
        left: 0,
        top: 0,
        // backgroundColor: 'pink'
    },
    tagDropDrown: {
        height: 100,
        width: '90%',
        // backgroundColor: 'grey'
    }

});

    

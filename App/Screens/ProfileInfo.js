import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import firestore from '../../firebase';
import firebase from 'firebase';
import BackgroundGradient from '../Components/BackgroundGradient';
import {Images} from '../Themes';
import {Ionicons} from '@expo/vector-icons';
import {
  Dropdown,
  GroupDropdown,
  MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';

export default function ProfileInfo(props) {

  const [valueSS, setValueSS] = useState('');
  const onChangeSS = (value) => {
    setValueSS(value);
  };

  const languages = [
    {
      value: 1,
      label: 'English',
    },

    {
      value: 2,
      label: 'Spanish',
    }

  ];
  return (
    <SafeAreaView style={styles.container}>

      <BackgroundGradient/>
      <TouchableOpacity style={styles.profilePic}>
        <Ionicons name='person-add' size={124}/>
      </TouchableOpacity>

      <View style={styles.dropdown}>
        <Dropdown
              label="Language"
              data={languages}
              value={valueSS}
              onChange={onChangeSS}
          />

      </View>
      





      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: 'white',
    marginBottom: 30, 
  },
  dropdown: {
    width: '80%'
  }
  
  
});
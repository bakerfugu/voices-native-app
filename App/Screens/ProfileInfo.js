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
import { useEffect } from 'react';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

export default function ProfileInfo(props) {

  //language
  const [language, setLanguage] = useState('');

  const [pictureChosen, setPictureChosen] = useState(false);
  const [bio, setBio] = useState('');
  const [canContinue, setCanContinue] = useState(false);
  const [continueDisabled, setContinueDisabled] = useState(true);
  const [icon, setIcon] = useState('person-add')

  useEffect(() => {
    if (language && pictureChosen && bio) {
      setContinueDisabled(false);
    }
  }, [language, pictureChosen, bio]);



  const onChangeLanguage = (label) => {
    setLanguage(label);
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

  const submitInfo = () => {
    console.log('submitting info')
    const user = firebase.auth().currentUser;
    var userDocRef = firestore.doc('users/' + user.uid);

    // Since my document doesn't exist, userDocRef.set will
    // create the document for me
    userDocRef.set({
      bio: bio,
      language: language,
    }, {merge: true});
    props.updateState(true);
  }

  const addPhoto = () => {
    setIcon('person');
    setPictureChosen(true);
  }
  return (
  
    <SafeAreaView style={styles.container}>

      <BackgroundGradient/>
      <TouchableOpacity style={styles.profilePic} onPress={addPhoto}>
        <Ionicons name={icon} size={124}/>
      </TouchableOpacity>

      <View style={styles.dropdown}>
        <Dropdown
              label="Language"
              data={languages}
              value={language}
              onChange={onChangeLanguage}
              mainContainerStyle={styles.languageContainer}
          />

      </View>
      
      <View style={{flexDirection:'row',  justifyContent: 'flex-start', width: "80%"}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', paddingLeft: 5}}>Bio:</Text>
      </View>
      
      <TextInput 
        style={styles.bioView}
        multiline={true}
        value={bio}
        onChangeText={(bio) => setBio(bio)}
      
      />

      <TouchableOpacity style={continueDisabled ? styles.greyButton : styles.orangeButton} disabled={continueDisabled} onPress={submitInfo}>
        <Text style={{fontSize:20, fontWeight: 'bold', color: continueDisabled ? '#bdbdbd' : 'black'}}>Continue</Text>
      </TouchableOpacity>


      





      

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

    width: '80%',
    height: 100,
  },
  languageContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#F1B600',
        borderRadius: 20,
  },
  bioView: {
    marginTop: 5,
    width: '80%',
    height: '25%',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#F1B600',
    borderRadius: 20,
    fontSize: 18,
    padding: 10,
  },
  greyButton: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '80%',
    borderWidth: 3,
    borderColor: '#F1B600',
    borderRadius: 20,
    backgroundColor: '#e5e4e4',

  },
  orangeButton: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '80%',
    borderWidth: 3,
    borderColor: '#F1B600',
    borderRadius: 20,
    backgroundColor: '#f1c232',
  }
  
});
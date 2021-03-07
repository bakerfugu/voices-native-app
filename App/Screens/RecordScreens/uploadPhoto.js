import React, { useState, useEffect } from 'react';
import { Button, Image, Text, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import SvgUsePhotoIcon from '../../../icons/UsePhotoIcon'

export default function UploadPhoto() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1}}>
      <BackgroundGradient/>
      {image && <SvgUsePhotoIcon 
      width={'60'} style={{alignSelf: 'flex-end', marginRight: '5%', marginTop: '5%'}}/> }
      
      <View style={{marginTop: '20%'}}>
      <TouchableOpacity onPress={pickImage} style={{backgroundColor: "#F1B600", borderRadius: '15', padding: '2%', width: '80%', marginTop: '10%', alignSelf: 'center'}}>
          <Text style={{fontSize: 20, textAlign:'center'}}>
          Choose from Camera Roll
          </Text>
         </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={{ width: 350, height: 350, borderRadius: 350, marginTop: '10%', alignSelf: 'center' }} />}
    </View>
    </View>
  );
}
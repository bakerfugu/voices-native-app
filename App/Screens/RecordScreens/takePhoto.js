import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';
import { Camera } from 'expo-camera';
import SvgCapturePhotoIcon from '../../../icons/CapturePhotoIcon'
import SvgSwitchCameraDirectionIcon from '../../../icons/SwitchCameraDirectionIcon'
import { useNavigation } from '@react-navigation/native';
import * as ImageManipulator from 'expo-image-manipulator';

export default function TakePhoto () {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // takePhoto = async () => {
  //   const photo = await ref.current.takePictureAsync();
  // }


  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <SvgSwitchCameraDirectionIcon style={styles.switchDir}
              width={"30"}
              height={"30"}
              />
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity style={styles.capture} onPress={async () => 
          {
            const photo = await ref.current.takePictureAsync();
            const resizedPhoto = await ImageManipulator.manipulateAsync(
              photo.uri,
              [{ resize: { width: 250 } }], // resize to width of 300 and preserve aspect ratio 
              { compress: 0.7, format: 'jpeg' },
             );
            navigation.navigate('PhotoPreview', {
              uri: resizedPhoto.uri,
              w: resizedPhoto.width,
              h: resizedPhoto.height
            });
          }}>
            <SvgCapturePhotoIcon
              width={"80"}
              height={"80"}/>
          </TouchableOpacity>
          </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginTop: '15%',
    marginRight: '5%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  switchDir: {
    flex: 0.1,
    marginTop: '15%'
  },
  capture: {
    alignItems: 'center',
    marginBottom: '5%'
  }
});


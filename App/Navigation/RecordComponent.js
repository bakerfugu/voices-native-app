import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RecordHome from '../Screens/RecordScreens/RecordHome.js'
import EditStory from '../Screens/RecordScreens/EditStory.js'
import StoryInfo from '../Screens/RecordScreens/StoryInfo.js'
import Confirmation from '../Screens/RecordScreens/Confirmation.js'
import TakePhoto from '../Screens/RecordScreens/takePhoto.js'
import PhotoPreview from '../Screens/RecordScreens/photoPreview.js'
import UploadPhoto from '../Screens/RecordScreens/uploadPhoto.js'
import {MaterialIcons} from '@expo/vector-icons'

import { StatusBar } from 'expo-status-bar';
const RecordNav = createStackNavigator();
export default function RecordComponent () {
  return (
    <RecordNav.Navigator headerMode='float'>
      <RecordNav.Screen name={'RecordHome'} component={RecordHome} 
        options={{
          headerTransparent:true,
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          title : 'Record Your Story',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',

          },
          
          headerStyle: {
            backgroundColor: 'grey',
            height: 75
          },
          headerLeftContainerStyle: {
            paddingLeft: 10
          },
          headerRight:  () => (
            <MaterialIcons name={'cloud-upload'} size={36} color={'#1ddbb5'}/>
          ),
          headerRightContainerStyle: {
            paddingRight: 15
          }  

      }}/>
      <RecordNav.Screen name={'EditStory'} component={EditStory} 
        options={{
          headerTransparent:true,
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          title : 'Edit Your Story',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',

          },
          
          headerStyle: {
            // backgroundColor: 'grey',
            height: 75
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          gestureEnabled: false,
      }}/>
      <RecordNav.Screen name={'StoryInfo'} component={StoryInfo} 
        options={{
          
          headerTransparent:true,
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          title : 'Story Information',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',

          },
          headerStyle: {
            // backgroundColor: 'grey',
            height: 75
          },

          headerLeftContainerStyle: {
            paddingLeft: 10
          }
      }}/>
      <RecordNav.Screen name={'Confirmation'} component={Confirmation} 
        options={{
          headerTransparent:true,
          headerBackTitleVisible: false,
          title: '',
          headerLeft: null
      }}/>
      <RecordNav.Screen name={'TakePhoto'} component={TakePhoto} 
          options={{
          headerTransparent:true,
          title : ''
      }}/>
      <RecordNav.Screen name={'PhotoPreview'} component={PhotoPreview} 
        options={{
        headerTransparent:true,
        title : ''
      }}/>
      <RecordNav.Screen name={'UploadPhoto'} component={UploadPhoto} 
        options={{
        headerTransparent:true,
        title : ''
      }}/>

    </RecordNav.Navigator>
  );
}
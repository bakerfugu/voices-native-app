import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainMap from '../Screens/ExploreScreens/MainMap.js';
import StoryList from '../Screens/ExploreScreens/StoryList.js';
import StoryListen from '../Screens/ExploreScreens/StoryListen.js';
import Profile from '../Screens/ExploreScreens/Profile.js';
import {
  StyleSheet, 
  Text, 
  View,
  TextInput 
} from 'react-native';

const ExploreNav = createStackNavigator();
export default function ExploreComponent () {
  return (
  <ExploreNav.Navigator headerMode='float'>
    <ExploreNav.Screen name={'MainMap'} component={MainMap}  options={{
      // headerTransparent:true,
      headerShown: false,
      
      title : 'Explore Page',
      headerStyle: {
        height: 75,
        // backgroundColor: 'pink'
      },
      headerTitleStyle: {
        fontSize: 30,
        fontWeight: 'bold'
      },
      headerLeftContainerStyle: {
        paddingLeft: 10
      }
    }}
     />
      

    <ExploreNav.Screen name={'StoryList'} component={StoryList}  options={{
      headerTransparent:true,
      headerShown: false,
      title: '',
      headerTintColor: 'black',
      headerBackTitleVisible: false,
      headerTitleStyle: {
        fontSize: 30,
        fontWeight: 'bold',

      },
      headerLeftContainerStyle: {
        paddingLeft: 10
      }, 
      headerStyle: {
        height: 75,
        // backgroundColor: 'pink'
      },
      headerTitleContainerStyle: {
        flex: 1,
        width:'60%',
        alignItems:'center'
      }
      }} />

      <ExploreNav.Screen name={'StoryListen'} component={StoryListen}  options={{
      headerTransparent:true,
      title: '',
      headerTintColor: 'black',
      headerBackTitleVisible: false,
      headerTitleStyle: {
        fontSize: 30,
        fontWeight: 'bold',

      },
      headerLeftContainerStyle: {
        paddingLeft: 10
      }, 
      headerStyle: {
        height: 75,
        // backgroundColor: 'pink'
      },
      
      
      }} />

      <ExploreNav.Screen name={'Profile'} component={Profile} />
  </ExploreNav.Navigator>
  );
}





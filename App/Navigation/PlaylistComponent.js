import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PlaylistHome from '../Screens/PlaylistScreens/PlaylistHome.js'



const PlaylistNav = createStackNavigator();
export default function PlaylistComponent () {
  return (
    <PlaylistNav.Navigator headerMode='float'>
      <PlaylistNav.Screen name={'PlaylistHome'} component={PlaylistHome}  
        options={{
          headerTransparent:true,
          title : 'Playlist'
          
          }}  />
    </PlaylistNav.Navigator>
  );
}
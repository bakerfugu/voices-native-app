import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainMap from '../Screens/ExploreScreens/MainMap.js'


const ExploreNav = createStackNavigator();
export default function ExploreComponent () {
  return (
  <ExploreNav.Navigator headerMode='float'>
    <ExploreNav.Screen name={'MainMap'} component={MainMap}  options={{
      headerTransparent:true,
      title : 'Explore Page'
      }} />
  </ExploreNav.Navigator>
  );
}


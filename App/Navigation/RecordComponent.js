import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RecordHome from '../Screens/RecordScreens/RecordHome.js'

const RecordNav = createStackNavigator();
export default function RecordComponent () {
  return (
    <RecordNav.Navigator headerMode='float'>
      <RecordNav.Screen name={'RecordHome'} component={RecordHome} 
      options={{
        headerTransparent:true,
        title : 'Record A Story'
        }} />
    </RecordNav.Navigator>
  );
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainMap from '../Screens/ExploreScreens/MainMap.js';
import StoryList from '../Screens/ExploreScreens/StoryList.js';
import StoryListen from '../Screens/ExploreScreens/StoryListen.js';

const ExploreNav = createStackNavigator();
export default function ExploreComponent () {
  return (
  <ExploreNav.Navigator headerMode='float'>
    <ExploreNav.Screen name={'MainMap'} component={MainMap}  options={{
      headerTransparent:true,
      title : 'Explore Page'
      }} />

    <ExploreNav.Screen name={'StoryList'} component={StoryList}  options={{
      headerTransparent:true,
      title : 'Story List'
      }} />

      <ExploreNav.Screen name={'StoryListen'} component={StoryListen}  options={{
      headerTransparent:true,
      title : 'Story Listen'
      }} />
  </ExploreNav.Navigator>
  );
}


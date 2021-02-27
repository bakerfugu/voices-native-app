import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import MainMap from '../Screens/MainMap.js'
import PlaylistHome from '../Screens/PlaylistHome.js'
import RecordHome from '../Screens/RecordHome.js'



/* OPTIONAL: Add icons for both tabs using navigationOptions as shown in lecture

screenOptions={({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'HomeTab') {
      iconName = 'home';
    } else if (route.name === 'BookmarkTab') {
      iconName = 'bookmark';
    }

    // You can return any component that you like here!
    return <Entypo name={iconName} size={Metrics.icons.medium} color={color} />;
  },
})}

tabBarOptions={{
  activeTintColor: Colors.black,
  showLabel: true,
}}

*/

const ExploreNav = createStackNavigator();
function ExploreComponent () {
  return (
  <ExploreNav.Navigator headerMode='float'>
    <ExploreNav.Screen name={'MainMap'} component={MainMap}/>
  </ExploreNav.Navigator>
  );
}

const PlaylistNav = createStackNavigator();
function PlaylistComponent () {
  return (
    <PlaylistNav.Navigator headerMode='float'>
      <PlaylistNav.Screen name={'PlaylistHome'} component={PlaylistHome} />
    </PlaylistNav.Navigator>
  );
}

const RecordNav = createStackNavigator();
function RecordComponent () {
  return (
    <RecordNav.Navigator headerMode='float'>
      <RecordNav.Screen name={'RecordHome'} component={RecordHome} />
    </RecordNav.Navigator>
  );
}





const TabNav = createBottomTabNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <TabNav.Navigator
        initialRouteName='FeedScreen'

        tabBarOptions={{
          activeTintColor: Colors.black,
          showLabel: true,
          
        }}>
        <TabNav.Screen name="Explore" component={ExploreComponent} />
        <TabNav.Screen name="Record" component={RecordComponent} />
        <TabNav.Screen name="Playlist" component={PlaylistComponent} />
        

      </TabNav.Navigator>
    </NavigationContainer>
  );
}
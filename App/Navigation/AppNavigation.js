import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';
import ExploreComponent from './ExploreComponent.js';
import PlaylistComponent from './PlaylistComponent.js';
import RecordComponent from './RecordComponent.js';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import ProfileInfo from '../Screens/ProfileInfo.js';
import { useHeaderHeight } from '@react-navigation/stack';
import { useEffect } from 'react';

import firebase from 'firebase';
import "firebase/auth";
import firestore from '../../firebase';


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



const TabNav = createBottomTabNavigator();
export default function AppNavigation() {

  const [bioFilledOut, setBioFilledOut] = useState(false);
  useEffect(() => {
    
    async function bio() {
      try {
        
        const user = firebase.auth().currentUser;
        var userDocRef = firestore.doc('users/' + user.uid);
        
        let doc = await userDocRef.get();
        if(doc.exists) {
          if (doc.bio) {
            setBioFilledOut(true);          
          }
        }
  
      } catch (err) {
        console.log(err);
      }
    }
    bio();
    
  }, []);

  if (!bioFilledOut) {
    return (
      <ProfileInfo updateState={setBioFilledOut}/>
    )
  }
  return (
      <NavigationContainer>
      <TabNav.Navigator
        initialRouteName='Explore'

        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name == "Explore") {
              return (
                <Ionicons name={'ios-globe'} color={color} size={36}/>
              );
            }
            if (route.name == "Record") {
              return (
                <FontAwesome name={'microphone'} color={color} size={36}/>
              );
            }if (route.name == "Playlist") {
              let color = focused ? 'black' : 'grey';
              return (
                <MaterialIcons name={'playlist-play'} color={color} size={48}/>
              );
            }
            
          },
        })}

        tabBarOptions={{
          showLabel: false,
          activeTintColor: 'black',

        }}

      >
        <TabNav.Screen name="Explore" component={ExploreComponent} />
        <TabNav.Screen name="Record" component={RecordComponent} />
        <TabNav.Screen name="Playlist" component={PlaylistComponent} />
        

      </TabNav.Navigator>
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  } 
});
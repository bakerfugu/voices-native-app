import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PlaylistHome from '../Screens/PlaylistScreens/PlaylistHome.js'
import PlaylistListView from '../Screens/PlaylistScreens/PlaylistListView.js'
import PlaylistMapView from '../Screens/PlaylistScreens/Playlist-MapView'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Images } from '../Themes'
import { useNavigation } from '@react-navigation/native'
import Profile from '../Screens/ExploreScreens/Profile.js'


const PlaylistNav = createStackNavigator();
export default function PlaylistComponent () {
  const navigation = useNavigation();
  return (
    <PlaylistNav.Navigator headerMode='float'>
      <PlaylistNav.Screen name={'PlaylistHome'} component={PlaylistHome}  
        options={{
          headerTransparent:true,
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          title : 'My Playlists',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'Montserrat-Bold'

          },
          
          headerStyle: {
            backgroundColor: 'grey',
            height: 75
          },
          headerLeftContainerStyle: {
            paddingLeft: 10
          },
          headerRight:  () => (
              <TouchableOpacity style={styles.profImageView} onPress={() => navigation.navigate('Profile')}>
                <Image source={Images.profPlaceholder} resizeMode='contain' style={styles.profImage}/>
              </TouchableOpacity>
                  
          ),
          headerRightContainerStyle: {
            paddingRight: 20
          }  
          
          }}
      />
      <PlaylistNav.Screen name={'PlaylistListView'} component={PlaylistListView}  
        options={{
          headerTransparent:true,
          headerBackTitleVisible: false,
          headerShown: false,
         
          }}  
      />
      <PlaylistNav.Screen name={'PlaylistMapView'} component={PlaylistMapView}  
        options={{
          headerTransparent:true,
          headerBackTitleVisible: false,
          headerShown: false,
         
          }}  
      />
      
      
    </PlaylistNav.Navigator>
  );
}

const styles = StyleSheet.create({
    
  profImageView: {
      height: 50,
      width: 50,
      borderRadius: 25,
  },
  profImage: {
    height: '100%',
    width: '100%'
  }
});
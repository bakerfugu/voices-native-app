import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PlaylistHome from '../Screens/PlaylistScreens/PlaylistHome.js'
import PlaylistListView from '../Screens/PlaylistScreens/PlaylistListView.js'
import PlaylistMapView from '../Screens/PlaylistScreens/Playlist-MapView'
import { View, TouchableOpacity, Image, StyleSheet,  } from 'react-native'
import { Images } from '../Themes'
import { useNavigation } from '@react-navigation/native'
import UserProfile from '../Screens/PlaylistScreens/UserProfile.js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Ionicons } from '@expo/vector-icons';


const PlaylistNav = createStackNavigator();
export default function PlaylistComponent () {

  const [image, setImage] = useState("");
  const getProfile = async () => {
    const value = await AsyncStorage.getItem('profile');
    const profile = JSON.parse(value)
    setImage(profile.image)

  }
  
  useEffect(() => {
    getProfile();
  }, [])

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
            fontSize: 26,
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
            image ? 
            <TouchableOpacity style={styles.profImageView} onPress={() => navigation.navigate("User Profile")}>
              <Image 
                source={{uri: image}} 
                resizeMode='contain' 
                style={styles.profImage}
              />
          </TouchableOpacity>
          : 
          <Ionicons name="person-circle" size={48} color="black" onPress={() => navigation.navigate('User Profile')} />
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
      <PlaylistNav.Screen name={'User Profile'} component={UserProfile}  
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
    height: 50,
    width: 50,
    borderRadius: 25,
  }
});
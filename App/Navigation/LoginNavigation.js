import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../Screens/LoginScreen';
import ProfileInfo from '../Screens/ProfileInfo';
import {
  StyleSheet, 
  Text, 
  View,
  TextInput 
} from 'react-native';

const LoginNav = createStackNavigator();
export default function LoginNavigation (props) {

  
  return (
  <NavigationContainer>
    <LoginNav.Navigator headerMode='float' initialRouteName={props.start}>
      <LoginNav.Screen name={'LoginScreen'} component={LoginScreen}  options={{
        headerTransparent:true,
      }}
      />
    </LoginNav.Navigator>
  </NavigationContainer>
  
  );
}





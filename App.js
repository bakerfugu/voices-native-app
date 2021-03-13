import React, {useState, useEffect, Fragment} from 'react';
import {SafeAreaView} from 'react-native'
import AppNavigation from './App/Navigation/AppNavigation';
import LoginScreen from './App/Screens/LoginScreen';
import firebase from 'firebase';
import "firebase/auth";
import BackgroundGradient from './App/Components/BackgroundGradient';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';



export default function App() {

  let [fontsLoaded] = useFonts({
    'Montserrat': require('./App/Fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./App/Fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./App/Fonts/Montserrat-Light.ttf'),
    'Montserrat-Italic': require('./App/Fonts/Montserrat-Italic.ttf'),
  });

    const [loggedIn, setLoggedIn] = useState(false);
    const [bioFilledIn, setBioFilledIn] = useState(false);
  
    // Check out this link to learn more about firebase.auth()
    // https://firebase.google.com/docs/reference/node/firebase.auth.Auth
    useEffect(() => {
      let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      });
      return () => {
        unsubscribe()
      }
    }, []);


  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
    if (loggedIn) {
      return (
        <Fragment>
          <SafeAreaView style={{flex:0, backgroundColor: '#FDF0AF'}}/>

          <SafeAreaView style={{flex:1}}>
            <AppNavigation />
          </SafeAreaView>
        </Fragment>
        
        
      );
      
    } 
    
    else {
        return (
        <SafeAreaView style={{flex:0, backgroundColor: '#FDF0AF'}}>
          <LoginScreen updateStatus={(val) => setLoggedIn(val)} setBioInfo={(val) => setBioInfoFilled(val)}/>
        
        </SafeAreaView>
       );
    }

      

  }
  

import React, {useState, useEffect} from 'react';
import AppNavigation from './App/Navigation/AppNavigation';
import LoginScreen from './App/Screens/LoginScreen';
import firebase from 'firebase';
import "firebase/auth";



export default function App() {
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



  
    if (loggedIn) {
      return <AppNavigation />;
    } 
    
    else {
        return <LoginScreen updateStatus={(val) => setLoggedIn(val)} setBioInfo={(val) => setBioInfoFilled(val)}/>;
    }

      

  }
  

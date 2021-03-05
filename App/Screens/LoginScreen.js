import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import firestore from '../../firebase';
import firebase from 'firebase';
import BackgroundGradient from '../Components/BackgroundGradient';
import {Images} from '../Themes';

export default function LoginScreen(props) {


  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessageLogin, setErrorMessageLogin] = useState('');

  // Check out this link to learn more about firebase.auth()
  // https://firebase.google.com/docs/reference/node/firebase.auth.Auth
  let signUp = async () => {
    
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword);
      if(response.user) {
       
        const user = firebase.auth().currentUser;
        var userDocRef = firestore.doc('users/' + user.uid);

        // Since my document doesn't exist, userDocRef.set will
        // create the document for me
        userDocRef.set({
          name: signUpName
        });

        props.updateStatus(true);
      }
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (err.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.log(err);
    }
  }

    
    
  // Check out this link to learn more about firebase.auth()
  // https://firebase.google.com/docs/reference/node/firebase.auth.Auth
  let login = async () => {
    try {
      // Note that we don't have to tell the app that the user has logged in.
      // firebase.auth().onAuthStateChanged() in App.js communicates this for us!
      await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword);
      console.log('reached');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <BackgroundGradient/>
      <Image source={Images.logo} resizeMode='stretch'/>

      <Text style={styles.caption}> Illuminate your world with local narratives</Text>
      <TextInput
        style={styles.input}
        value={signUpName}
        onChangeText={(signUpName) => setSignUpName(signUpName)}
        placeholder="Name" 
      />
      <TextInput
        style={styles.input}
        value={signUpEmail}
        onChangeText={(signUpEmail) => setSignUpEmail(signUpEmail)}
        placeholder="Email" 
      />
      <TextInput
        style={styles.input}
        value={signUpPassword}
        secureTextEntry={true}
        onChangeText={(signUpPassword) => setSignUpPassword(signUpPassword)}
        placeholder="Password" 
      />
      <TouchableOpacity style={styles.button} onPress={() => signUp()}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>SIGN UP</Text>
      </TouchableOpacity>


      <TextInput
        style={[styles.input, {marginTop: 50}]}
        value={loginEmail}
        onChangeText={(loginEmail) => setLoginEmail(loginEmail)}
        placeholder="Email" 
      />
      <TextInput
        style={styles.input}
        value={loginPassword}
        secureTextEntry={true}
        onChangeText={(loginPassword) => setLoginPassword(loginPassword)}
        placeholder="Password" 
      />
      {/* <Button
        title='Login'
        onPress={()=> login()}
        color='black'
        style={styles.button}

      /> */}
      <TouchableOpacity style={styles.button} onPress={() => login()}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>LOG IN</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: 'whitesmoke',
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#F1c232',
    borderRadius: 15,
    borderWidth: 3

  },
  button: {
    marginBottom: 50
  },
  caption: {
    marginBottom: 20,
    color: 'black',
    fontSize: 18,

  },
  button: {
    backgroundColor: '#1ddbb5',
    padding: 10,
    width: '50%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
    
  }
  
});
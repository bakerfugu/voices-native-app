import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity,Keyboard } from 'react-native';
import firestore from '../../firebase';
import firebase from 'firebase';
import BackgroundGradient from '../Components/BackgroundGradient';
import {Images} from '../Themes';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LoginScreen(props) {


  const [username, setUsername] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessageLogin, setErrorMessageLogin] = useState('');
  const [existingUser, setExisting] = useState(false);
  const [tooShort, setTooShort] = useState(false);

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
        await userDocRef.set({
          username: username,
          bio: "",
          image: "",
          stories: "",
        });
        
        profile = {
          handle: username, 
          bio: "", 
          image: "",
          stories: [],
          playlists: []
        }
        
        var stringProfile = JSON.stringify(profile)
        try {
          await AsyncStorage.setItem('profile', stringProfile)
        }
        catch (e){
          console.log(e)
        }
        


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
    <View style={styles.container}>
      <BackgroundGradient/>
      <Image source={Images.logo} style={{marginTop: '-30%'}} resizeMode='stretch'/>

      <Text style={styles.caption}> Illuminate your world with local narratives</Text>
      {
        !existingUser ? 
          <View style={styles.subContainer}>
              <Text style={{fontSize: 25, fontFamily: "Montserrat", paddingBottom: '3%'}}>Create an Account</Text>
            
            <TextInput
              style={styles.input}
              value={username}
              secureTextEntry={false}
              autoCapitalize={"none"}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username" 
            />

            <TextInput
              style={styles.input}
              value={signUpEmail}
              autoCapitalize={"none"}
              textContentType="emailAddress"
              secureTextEntry={false}
              onChangeText={(signUpEmail) => setSignUpEmail(signUpEmail)}
              placeholder="Email" 
            />
            <TextInput
              style={styles.input}
              value={signUpPassword}
              secureTextEntry={true}
              autoCapitalize={"none"}
              onChangeText={(signUpPassword) => {setSignUpPassword(signUpPassword)
                if (signUpPassword.length < 6) {
                  setTooShort(true);
                } else {
                  setTooShort(false);
                }
              }}
              placeholder="Password"
            />
            {
              tooShort ? 
              <Text style={{color: 'red', marginTop: '-2%', marginRight: '7%'}}>
                Password must be at least 6 characters.
              </Text>
              :
              <View>
                
              </View>
            }
            <TouchableOpacity disabled={signUpPassword.length < 6 || !signUpEmail.includes("@") || username===""}  style={(signUpPassword.length >= 6 && signUpEmail.includes("@") && username !== "") ? styles.button : styles.disabledButton} onPress={() => signUp()}>
              <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setExisting(true)}>
              <Text style={{fontSize:17, fontFamily: "Montserrat-Light",  color:'black'}}>Already have an account? Log in.</Text>
            </TouchableOpacity>
        </View>


      :
      <View>
      <Text style={{fontSize: 25, fontFamily: "Montserrat", paddingBottom: '3%', alignSelf: 'center'}}>Sign In</Text>       
      <TextInput
        style={[styles.input, ]}
        value={loginEmail}
        autoCapitalize={"none"}
        secureTextEntry={false}
        onChangeText={(loginEmail) => setLoginEmail(loginEmail)}
        placeholder="Email" 
      />
      <TextInput
        style={styles.input}
        value={loginPassword}
        autoCapitalize={"none"}
        secureTextEntry={true}
        onChangeText={(loginPassword) => {
          setLoginPassword(loginPassword);
          if (loginPassword.length < 6) {
            setTooShort(true);
          } else {
            setTooShort(false);
          }
        }}
        placeholder="Password" 
      /> 
      {/* <Button
        title='Login'
        onPress={()=> login()}
        color='black'
        style={styles.button}

      />  */}
      <TouchableOpacity style={styles.button} onPress={() => login()}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setExisting(false)}>
              <Text style={{fontSize:17, fontFamily: "Montserrat-Light",  color:'black', alignSelf: 'center'}}>New user? Sign up.</Text>
            </TouchableOpacity>

      </View>
    }
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',

  },
  input: {
    fontSize: 20,
    minWidth: '80%',
    marginBottom: 10,
    backgroundColor: 'whitesmoke',
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#F1c232',
    borderRadius: 15,
    borderWidth: 3,
    minHeight: 35,
    alignSelf: 'flex-start'
  },
  caption: {
    marginBottom: '10%',
    color: 'black',
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  button: {
    marginTop: '3%',
    backgroundColor: '#1ddbb5',
    padding: 10,
    minWidth: '80%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    minHeight: 35
  },
  disabledButton: {
    marginTop: '3%',
    backgroundColor: '#1ddbb5',
    padding: 10,
    minWidth: '80%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    minHeight: 35,
    opacity: 0.6,
  }
});
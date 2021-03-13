import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-paper';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

export default function StoryClip(props) {


  //<Photo key={photo._id} value={photo} newComment={this.setNewComment} user={this.state.user} class="standard"/>
  // let all_tags = props.value.tags; 
  
  const makeTags = (allTags) => {
    return allTags.map((tag) => 
      <View style={styles.tag}>
          <Text style={{fontFamily:'Montserrat-Light', fontSize: 14}}>{tag}</Text>
      </View>  
      );
  }
  


  
//color={'#1ddbb5'}
  return (
     

      <View style = {styles.container}>
         
          
            <View style={styles.info}>

              <View style={styles.title}>
                  <Text style={{fontFamily: 'Montserrat', fontSize: 32}}>Title of Story</Text>
              </View>

              <View style={{marginBottom: '10%'}}>
                <Text style={{fontFamily: "Montserrat-Light", fontSize: 22}}>Author</Text>
                <Text style={{fontFamily: 'Montserrat-Light', fontSize: 18}}>June 2022 · 20 min</Text>
              </View>
              
              <View style={styles.tagRow}>
                  {makeTags(['COVID', 'Art', 'Music'])}
              </View> 

            </View>

            <View style={styles.buttons}>
              <Ionicons name={'play-circle'} color={'#1ddbb5'} size={84} style={{alignSelf: 'center'}}/>
              <View style={styles.sharingIconsRow}>
                 <Ionicons name={"md-share-outline"} size={30} color={'black'} style={styles.icon}/>
                 <MaterialIcons name={"playlist-add"} size={32} color={'black'} style={styles.icon}/>
               </View>
            </View>

      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
   
    flexDirection: 'row',
    justifyContent: 'center',
    width: '95%',
    // height: '100%',
    padding: '5%',
    borderColor: '#FCC201',
    borderWidth: 2,
    borderRadius: 15
  },
  title: {
    // marginTop: 15,
    marginBottom: '5%',
    marginRight: 10,
    justifyContent: 'center',
   
  },
 
  tag: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#6a6a6a',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 12,
    marginRight: 5, 
    backgroundColor: "white", 
  },
  tagRow: {
    flexDirection: 'row',
    
  },
  sharingIconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  info: {
    flex:3, 
    flexDirection: 'column', 


  },
  buttons: {
    flex:1, 
    flexDirection: 'column',
    justifyContent: 'space-between',


  },
  
 
  
});

import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
// import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-paper';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native' ;

export default function StoryClip({title, author, date, length, tags, setModalVisibility, location}) {

  const navigation = useNavigation();
  //<Photo key={photo._id} value={photo} newComment={this.setNewComment} user={this.state.user} class="standard"/>
  // let all_tags = props.value.tags; 
  
  let tagList;
  if (tags) {
    tagList = tags.map((tag) => <View style={styles.tag}>
      <Text style={styles.tagText}>
        {tag}
      </Text>
    </View>);
  }


  
  
//color={'#1ddbb5'}
  return (
     
      <View style={styles.card}>

     
        <View style = {styles.container}>
         
          
            <View style={styles.info}>

              <View style={styles.title}>
                  <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 20}}>{title}</Text>
              </View>

              <View style={{marginBottom: '10%'}}>
                <Text style={{fontFamily: "Montserrat-Light", fontSize: 16}}>{author}</Text>
                <Text style={{fontFamily: 'Montserrat-Light', fontSize: 16}}>{date} · {length} min</Text>
              </View>
              
              <ScrollView horizontal={true} style={styles.tagRow}>
                  {tagList}
              </ScrollView> 

            </View>

            <View style={styles.buttons}>
              <Ionicons name={'play-circle'} color={'#1ddbb5'} size={64} style={{alignSelf: 'center'}} onPress={() => navigation.navigate('StoryListen', {title: title, author: author, length: length, location: location})}/>
              <View style={styles.sharingIconsRow}>
                 <Ionicons name={"md-share-outline"} size={30} color={'black'} style={styles.icon}/>
                 <MaterialIcons name={"playlist-add"} size={32} color={'black'} style={styles.icon} onPress={() => setModalVisibility(true)}/>
               </View>
            </View>

        </View>

        <LinearGradient colors={['grey', '#1ddbb5']} style={styles.progressBar} start={[0.9, 0.9]} end={[0.0, 0.3]}>

        </LinearGradient>
      </View>

  );
 
}




const styles = StyleSheet.create({
  card: {
    padding: '5%',
    borderColor: '#FCC201',
    borderWidth: 2,
    borderRadius: 15,
    width: '90%'
  },
  container: {
    // flex: 1,
   
    flexDirection: 'row',
    justifyContent: 'center',

    // height: '100%',
    
  },
  title: {
    // marginTop: 15,
    marginBottom: '5%',
    marginRight: 10,
    justifyContent: 'flex-start',
   
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
    marginRight: '5%'
    
  },
  sharingIconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  info: {
    flex:3, 
    flexDirection: 'column', 
    justifyContent: 'flex-start'

  },
  buttons: {
    marginTop: '-3%',
    flex:1, 
    flexDirection: 'column',
    justifyContent: 'space-between',


  },
  progressBar: {
    marginTop: '10%',
    width: '100%',
    height: '2%',
    borderRadius: 15, 

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
  tagText: {
    fontSize: 13,
  },
  
 
  
});

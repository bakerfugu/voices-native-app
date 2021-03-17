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

export default function StoryClip({title, author, date, length, tags, setModalVisibility, location, image}) {

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
  let titleLength, titleAdjust;
  let long;
  if (title) {
    titleLength = title.length;
    if (titleLength >=28) {
      titleAdjust = title.substring(0,25) + '...';
      long = true;
    } else {
      titleAdjust = "";
      long = false;
    }
    
  }



  
  
//color={'#1ddbb5'}
  return (
     
      <View style={styles.card}>

     
        <View style = {styles.container}>

            <View style={long ? styles.longTitle : styles.title}>
                <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 19, overflow: 'ellipsis'}}>
                  {/* {long ? titleAdjust : title} */}
                  {title}
                  </Text>
            </View>


            <View style={{marginBottom: '3%'}}>
                <Text style={{fontFamily: "Montserrat", fontSize: 16}}>@{author}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3%'}}>
            <ScrollView horizontal={true} style={styles.tagRow}>
                {tagList}
            </ScrollView> 
            </View>

            {/* <LinearGradient colors={['grey', '#1ddbb5']} style={styles.progressBar} start={[0.9, 0.9]} end={[0.0, 0.3]}/> */}

            
            



            <View style={styles.buttons}>
            
              <Ionicons name={'play-circle'} color={'#1ddbb5'} size={48} style={{alignSelf: 'center'}} onPress={() => navigation.navigate('StoryListen', {title: title, author: author, length: length, location: location, image: image})}/>
              <Text style={{fontFamily: "Montserrat", fontSize: 14, marginLeft: '-10%'}}> {length} min · {date}</Text>
        
              <View style={styles.sharingIconsRow}>
                 <Ionicons name={"md-share-outline"} size={30} color={'black'} style={styles.icon}/>
                 <MaterialIcons name={"playlist-add"} size={32} color={'black'} style={styles.icon} onPress={() => setModalVisibility(true)}/>
               </View>
            </View>
            
          
            {/* <View style={styles.info}>

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
            </View> */}

        </View>

        
      </View>

  );
 
}




const styles = StyleSheet.create({
  card: {
    padding: '5%',
    paddingBottom: "2%",
    borderColor: '#FCC201',
    borderWidth: 2,
    borderRadius: 15,
    width: '90%',
    marginBottom: '2%'
  },
  container: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    // height: '100%',
    
  },
  title: {
    // marginTop: 15,
    //marginBottom: '8.7%', 
    marginBottom: 26,
    justifyContent: 'flex-start', 
  },

  longTitle: {
    // marginTop: 15,
    marginBottom: '1%', 
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
    marginRight: '5%',
    // marginBottom: '5%',
    flex: 2,
   
    
    
  },
  sharingIconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100

  },
  info: {
    flex:3, 
    flexDirection: 'column', 
    justifyContent: 'flex-start'

  },
  buttons: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
   


  },
  progressBar: {
    alignSelf: 'center',
    borderRadius: 10, 
    height: 15,
    flex: 1,
   
    

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
    fontFamily: "Montserrat"
  },
  
 
  
});

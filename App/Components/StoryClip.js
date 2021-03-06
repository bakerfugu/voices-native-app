import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function StoryClip() {
  // let [fontsLoaded] = useFonts({
  //   'NotoSansRegular': require('../Fonts/NotoSansMalayalam-Regular.ttf'),
  //   'NotoSansBold': require('../Fonts/NotoSansMalayalam-Bold.ttf'),
  // }, []);

  return (
      <View style={styles.storyInList}>

        <View style={styles.topRow}>
          <View style={styles.playColumn}>
            <Ionicons name={'play-circle'} color={'#1ddbb5'} size={56}/>
          </View>
          <View style={styles.titleColumn}>
            <Text style={styles.title}>Story Title</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>MTH 2099</Text>
          </View>
          
        </View>
          

        <View style={styles.bottomRow}>
          <View style={styles.playColumn}>
            <Text> 99 min </Text>
          </View>
          <View style={styles.titleColumn}>
            <View style={styles.tagRow}>
              <View style={styles.tag}>
                  <Text>Tag 1</Text>
                </View>
                <View style={styles.tag}>
                  <Text>Tag 2</Text>
                </View>
              </View>
            </View>
          <View style={styles.rightColumn}>
              <View style={styles.sharingIconsRow}>
                <Ionicons name={"md-share-outline"} size={24} color={'black'}/>
                <MaterialIcons name={"playlist-add"} size={30} color={'black'}/>
              </View>
          </View>
        
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  storyInList: {
    alignSelf: 'center',
    height: 115,
    width: '100%',
    borderTopWidth: 2,
    borderColor: 'grey',
    // borderWidth: 2,
    
    flexDirection: 'column',
    padding: 10
  }, 
  playColumn: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  titleColumn: {

    flexDirection: 'column',
    flex: 3,
    paddingLeft: 8,
    height: '100%',
   
    justifyContent: 'center',
  },
  rightColumn: {

    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    // backgroundColor: 'yellow'
  },
  title: {
    fontSize: 20,
    fontFamily: 'NotoSansBold',
    fontWeight: 'bold'
  },
  tagRow: {
    flexDirection: 'row', 
    

  },
  tag: {
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 15,
    marginRight: 5
  },
  sharingIconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  topRow: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',

  },
  bottomRow: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',

  }
  
});

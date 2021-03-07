import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';

export default function StoryClip(props) {
  // let [fontsLoaded] = useFonts({
  //   'NotoSansRegular': require('../Fonts/NotoSansMalayalam-Regular.ttf'),
  //   'NotoSansBold': require('../Fonts/NotoSansMalayalam-Bold.ttf'),
  // }, []);

  //<Photo key={photo._id} value={photo} newComment={this.setNewComment} user={this.state.user} class="standard"/>
  let all_tags = props.value.tags; 
  let tagList = all_tags.map((tag) => 
    <View style={styles.tag}>
     <Text>{tag}</Text>
    </View>
    );
  

  return (
      <View style={styles.storyInList}>

        <View style={styles.topRow}>
          <View style={styles.playColumn}>
            <Ionicons name={'play-circle'} color={'#1ddbb5'} size={56}/>
          </View>
          <View style={styles.titleColumn}>
            <Text style={styles.title}>{props.value.title}</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>{props.value.date}</Text>
          </View>
          
        </View>
          

        <View style={styles.bottomRow}>
          <View style={styles.playColumn}>
            <Text>{props.value.length + " min"}</Text>
          </View>
          <View style={styles.titleColumn}>
            <ScrollView horizontal={true}>
            <View style={styles.tagRow}>
              {tagList}
              </View>
            </ScrollView>
            </View>
          <View style={styles.rightColumn}>
              <View style={styles.sharingIconsRow}>
                <Ionicons name={"md-share-outline"} size={24} color={'black'} style={styles.icon}/>
                <MaterialIcons name={"playlist-add"} size={30} color={'black'} style={styles.icon}/>
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
    alignItems: 'flex-end'

    // backgroundColor: 'yellow'
  },
  title: {
    fontSize: 20,
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
    marginRight: 5, 
    backgroundColor: "white"
  },
  sharingIconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    paddingLeft: 5, 
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

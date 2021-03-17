import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image} from 'react-native';
import BackgroundGradient from '../../Components/BackgroundGradient.js';
import { Images } from '../../Themes/index.js';
import storyLocations from '../../Components/StoryLocations';  
import CircleList from 'react-native-circle-list';
import StoryClip from '../../Components/StoryClip'
import Header from '../../Components/Header'
import PlaylistPopUp from '../../Components/PlaylistPopUp';  
import Confirmation from '../../Components/ConfirmationModal';  
import NavigationModal from '../../Components/NavigationModal';
import { Ionicons } from '@expo/vector-icons'
import { setCustomRefreshControl } from 'react-native-global-props';


const {width, height} = Dimensions.get('screen');
const RADIUS = (1.6 * width) / 2;   
export default function StoryList ({route, navigation}) {

    const {locationIndex} = route.params;

    const[currStory, setStory] = useState({
        info: storyLocations[locationIndex].stories[0],
        index: 0

     })
    const[modalVisibile, setModalVisibility] = useState(false);
    const[confirmationModal, setConfirmation] = useState(false);
    const[navigationModal, setNavigation] = useState(false);
    const[listRef, setRef] = useState(null);

    useEffect(() => {
        // console.log(currStory)
    }, [currStory])

    useEffect(() => {
        const {locationIndex} = route.params;
        const story = storyLocations[locationIndex].stories[0]
        setStory({
            info: story,
            index: 0,
        })
    }, []);
    
    const data = [

    {
        key: 1, 
        value: 1,
    },
    {
        key: 2, 
        value: 1,
    } , 
    {
        key: 3, 
        value: 1,
    } ,    
    {
        key: 4, 
        value: 1,
    }  ,
    {
        key: 5, 
        value: 1,
    } , 
    {
        key: 6, 
        value: 1,
    },
    {
        key: 7, 
        value: 1,
    },
    {
        key: 8, 
        value: 1,
    },
    {
        key: 9, 
        value: 1,
    },
    {
        key: 10, 
        value: 1,
    },
    {
        key: 11, 
        value: 1,
    },
    {
        key: 12, 
        value: 1,
    }  

    ]

    const renderItem = ({item, index}) => {
        // console.log(item);
        let storyIndex = index % storyLocations[locationIndex].stories.length;
            return (
                <ImageBackground source={Images.yellowOrb} resizeMode='contain' style={{height: 80, width: 80, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={storyLocations[locationIndex].stories[storyIndex].image ? storyLocations[locationIndex].stories[storyIndex].image : Images.parliament} resizeMode='cover' style={{height: 60, width: 60, borderRadius: '50%'}}/>
                </ImageBackground>    
        );
    }

    
    const nextStory = () => {  
        console.log('next story')
        const index = currStory.index;
        const new_index = (index + 1) % 12
        let storyIndex = new_index % storyLocations[locationIndex].stories.length;
        listRef.scrollToIndex(new_index);
        setStory({
            info: storyLocations[locationIndex].stories[storyIndex],
            index: new_index
        });
    }
    const prevStory = () => {
        
        const index = currStory.index;
        let new_index;
        if (index == 0) {
            new_index = 11
        }
        else {
            new_index = index - 1;
        }
        console.log(new_index)
        let storyIndex = new_index % storyLocations[locationIndex].stories.length;
        listRef.scrollToIndex(new_index);
        setStory({
            info: storyLocations[locationIndex].stories[storyIndex],
            index: new_index
        });
        

        
    }

    
    
    return (
        <View style ={styles.container}>
            <BackgroundGradient/>
            
            <Header title={storyLocations[locationIndex].title} style={{fontFamily: 'Montserrat-Bold'}} page={'Story List'} playlist={null} setNavigation={setNavigation}/>
            <Text style={{fontFamily: 'Montserrat-Light', fontSize: 18, marginTop: -10}}>{storyLocations[locationIndex].stories.length} Stories Available</Text>
            <View style={styles.flatlist}>

                <View style ={styles.backgroundCircle}/>
                <CircleList
                    data={data}
                    innerRef={component => setRef(component)}
                    visibilityPadding={3}
                    renderItem={renderItem}
                    radius={RADIUS}
                    keyExtractor={(item) => item.id}
                    elementCount={12}
                    selectedItemScale={2.7}
                    swipeSpeedMultiplier={40}
                    containerStyle={{paddingTop: 80, marginBottom: '2%'}}
                    onScrollEnd={(item) => {
                        let index = item % storyLocations[locationIndex].stories.length;
                        setStory({
                            info: storyLocations[locationIndex].stories[index],
                            index: item
                        })
                    }}
                    />
            </View>

            <View style={styles.arrows}>
                <Ionicons name='arrow-back-sharp' color='#FCC201' size={48} onPress={prevStory}/>
                <Ionicons name='arrow-forward-sharp' color='#FCC201' size={48} onPress={nextStory}/>

            </View>
            
            <StoryClip 
                location={storyLocations[locationIndex].title}
                title={currStory.info.title} 
                author={currStory.info.author} 
                date={currStory.info.date} 
                length={currStory.info.length}
                tags={currStory.info.tags}
                image={currStory.info.image}
                setModalVisibility={setModalVisibility}
            />

            { modalVisibile && <PlaylistPopUp modalVisible={modalVisibile} setModalVisibility={setModalVisibility} setConfirmation={setConfirmation}/> }
            
            { confirmationModal && <Confirmation visible={confirmationModal} setConfirmation={setConfirmation}/> }

            { navigationModal && <NavigationModal visible={navigationModal} setNavigation={setNavigation}/> }
            
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      fontFamily: "Montserrat"
  
    },
    header: {
        width: '100%',
        height: 75,
        // backgroundColor: 'grey',
        left: 0,
        top: 0,
        flexDirection: 'row',
        paddingLeft: 10, 
        justifyContent: 'center',
        fontFamily: "Montserrat"
        

    },
    test: {
        flex: 1,
        width: '100%',
        backgroundColor: 'lightblue'
    },
    titleView: {
        width:'75%',
        alignItems:'center',
       
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
        // backgroundColor: 'grey',
        width: '12.5%',


    },
    title: {
        marginTop: '5%',
        fontSize: 26, 
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '3%', 
   
    },
    
    flatlist: {
        marginTop: '5%',
        // flex: 1,
        width:'100%',
        // backgroundColor: 'grey',
    },
    backgroundCircle: {
        borderColor: '#FCC201',
        borderWidth: 10,
        width: RADIUS * 2,
        aspectRatio: 1,
        borderRadius: RADIUS,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 120
    },
    arrows: {
        marginTop: '-10%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      
        // backgroundColor: 'grey'
    }
    
});

    

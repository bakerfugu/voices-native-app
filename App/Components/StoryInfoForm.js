import React, { useState, useEffect } from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TextInput } from 'react-native';
import ImageButton from '../Components/ImageButton.js';



export default class StoryInfoForm extends React.Component {
    
    render() {
        return (
            <View style = {styles.form}>
            <TextInput style={styles.textInput} placeholder="Title"/>
            <TextInput style={styles.textInput} placeholder="Tags"/>
            <View style={{ flex: 1 }}>
            </View>
            <View placeholder="Upload Image"></View>
            <View style={styles.buttonView}>
                <ImageButton label='Upload Image'/>
                <ImageButton label='Take Image'/>
            </View>
            <TextInput style={styles.textInput} placeholder="Location"/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    form: {
        alignSelf: 'stretch',
        alignItems: 'center'
    },

    textInput: {
        alignSelf: 'center',
        padding: 10, 
        width: '80%',
        height: 40, 
        marginBottom: 30, 
        color: 'black',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#F1B600',
        borderRadius: 10
    },
    buttonView: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        paddingHorizontal: 5
    }
    
});
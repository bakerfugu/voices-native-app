import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button, Touchable } from 'react-native';


export default function TagsOverlay (props) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.tag} onPress={props.onPress}>
                    <Text style={styles.txt}>Tag1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag} onPress={props.onPress}>
                    <Text style={styles.txt}>Tag2</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.tag} onPress={props.onPress}>
                    <Text style={styles.txt}>Tag1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag} onPress={props.onPress}>
                    <Text style={styles.txt}>Tag2</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.tag} onPress={props.onPress}>
                    <Text style={styles.txt}>Tag1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag} onPress={props.onPress}>
                    <Text style={styles.txt}>Tag2</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.tag} onPress={props.onPress}>
                    <Text style={styles.txt}>Tag1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag} onPress={props.onPress}>
                    <Text style={styles.txt}>Tag2</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'auto',
        width: '50%',
        padding: '1%',
        borderRadius: 15
     
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    tag: {
        borderRadius: 40,
        height: 'auto',
        width: 'auto',
        backgroundColor: '#F0EEEE',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '0.5%',
        paddingBottom: '0.5%',
        margin: '1%',
        paddingRight: '15%',
    },
    txt: {
        alignItems: 'center'
    }
});
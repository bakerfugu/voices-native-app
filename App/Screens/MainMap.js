import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';

export default function MainMap() {
    return (
        <View style={styles.container}>
            <Text>
                This screen will be the main explore screen. The following needs to be implemented. 

                1. Scrollable Map

                2. SearchBar/DropDown list of available locations

                3. Clickable pictures of locations with stories. 

                4. Recenter button

                
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
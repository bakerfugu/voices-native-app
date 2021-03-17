import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export const getTimeStringFromMillis = (millis) => {
    let totalSecs = Math.floor(millis / 1000);
    // console.log(totalSecs)
    // let minutes = Math.floor(time / 60);
    // let sec = time % 60;
    const min = Math.floor(totalSecs / 60);
    const remainingSecs = Math.floor(totalSecs % 60);
    //const decimal = Math.floor((millis % 1000) / 100);
    
    const zeroPaddedMin = `00${min}`.slice(-2)
    const zeroPaddedSec = `00${remainingSecs}`.slice(-2)

    return `${zeroPaddedMin} : ${zeroPaddedSec}` //.${decimal}`
}

export default function AudioPlayer ({audioSourceObject, playing, positionMillis, getStatusInfo}) {
    const [sound, setSound] = useState(null);

    const soundIsLoaded = async () => {
        const status = await sound.getStatusAsync();
        return status.isLoaded;
    }

    useEffect(() => {
        async function createSound() {
            console.log('Creating Sound', audioSourceObject);
            const { sound } = await Audio.Sound.createAsync(
                // { uri: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" }
                audioSourceObject,
                { progressUpdateIntervalMillis: 100 }
            );
            setSound(sound);
            if (getStatusInfo) sound.setOnPlaybackStatusUpdate(getStatusInfo);
        }
        createSound();
    }, [])

    useEffect(() => {
        async function pauseOrPlay() {
            const loaded = await soundIsLoaded();
            if (!loaded) return;

            if (playing) {
                console.log('Playing Sound');
                await sound.playAsync();
            } else {
                console.log('Pausing Sound');
                await sound.pauseAsync();
            }
        }
        if (sound) pauseOrPlay();
    }, [playing]);

    useEffect(() => {
        async function newPosition() {
            const loaded = await soundIsLoaded();
            if (!loaded) return;

            await sound.setStatusAsync({positionMillis})
        }
        if (sound) newPosition();
    }, [positionMillis]);

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync(); 
            }
            : undefined;
    }, [sound]);

    return null;
}
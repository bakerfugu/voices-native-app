import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Audio } from "expo-av";
import BackgroundGradient from "../../Components/BackgroundGradient.js";
import RecordingOrb from "../../Components/RecordingOrb.js";
import LongButton from "../../Components/LongButton.js";
import { Images } from "../../Themes/index.js";
import { useNavigation } from "@react-navigation/native";
import metrics from "../../Themes/Metrics.js";

export default function RecordHome({ route, navigation }) {
  const [time, setTime] = useState(0);
  const [recording, setRecording] = useState(null);
  const [recordingOn, setRecordingOn] = useState(false);
  const [audioUri, setAudioUri] = useState(null);

  const handleRecordingStatusUpdate = ({ durationMillis }) => {
    if (durationMillis) {
      setTime(durationMillis);
    }
  };

  async function startRecording() {
    try {
      if (!recording) {
        console.log("Requesting permissions..");
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        console.log("Starting recording...");
        const newRecording = new Audio.Recording();
        await newRecording.setOnRecordingStatusUpdate(
          handleRecordingStatusUpdate
        );
        await newRecording.prepareToRecordAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        await newRecording.startAsync();
        setRecordingOn(true);
        setRecording(newRecording);
      } else {
        console.log("Unpausing recording...");
        await recording.startAsync();
        setRecordingOn(true);
        setRecording(recording);
      }
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function pauseRecording() {
    try {
      console.log("Pausing recording..");
      setRecordingOn(false);
      await recording.pauseAsync();
      console.log("Recording paused.");
    } catch (e) {
      console.log("pauseRecording failed somewhere", e);
    }
  }

  async function stopRecording(saveRecording) {
    if (!recording) return undefined;
    try {
      console.log("Stopping recording..");
      setRecording(null);
      setRecordingOn(false);
      setTime(0);
      await recording.stopAndUnloadAsync();
      if (saveRecording) {
        const uri = recording.getURI();
        setAudioUri(uri);
        console.log("Recording stopped and stored at", uri);
        return uri;
      } else {
        console.log("Recording stopped discarded");
      }
    } catch (e) {
      console.log("stopRecording failed somewhere", e);
    }
  }

  useEffect(() => {
    return recording
      ? () => {
          setTime(0);
          try {
            console.log("Unloading Recording");
            recording.stopAndUnloadAsync();
          } catch (e) {
            if (recording)
              console.log("something wrong while unloading recording");
          }
        }
      : undefined;
  }, [recording]);

  const restartTimer = () => {
    Alert.alert(
      "Are you sure you would like to restart your recording?",
      "The existing recording will be erased permanently.",
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("does not want to restart");
          },
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => await stopRecording(false),
        },
      ],
      { cancelable: false }
    );
  };

  async function pauseOrContinue() {
    if (recordingOn) {
      await pauseRecording();
    } else {
      await startRecording();
    }
  }

  async function nextPage() {
    console.log("moving around", time, audioUri);
    try {
      const recentAudioUri = await stopRecording(true);
      navigation.navigate("EditStory", {
        audioUri: recentAudioUri || audioUri,
        recordingDuration: time,
      });
    } catch (e) {
      console.log("Failed to get recent recording URI, trying without");
      navigation.navigate("EditStory", { audioUri, recordingDuration: time });
    }
  }

  const recordState = recordingOn
    ? {
        paused: false,
        orb: Images.yellowOrb,
        instructions: "Tap to Pause",
      }
    : {
        paused: true,
        orb: Images.blueOrb,
        instructions: "Tap to Start",
      };
  return (
    <View style={styles.container}>
      <BackgroundGradient />
      <View style={styles.header} />

      <View style={styles.orbView}>
        <RecordingOrb
          onPress={pauseOrContinue}
          recordState={recordState}
          time={time}
        />
      </View>

      <View style={styles.uploadFile}></View>

      <View style={styles.buttonView}>
        <LongButton
          label="Restart"
          onPress={restartTimer}
          disabled={time === 0 || !recordState.paused}
        />
        <LongButton
          label="Next"
          onPress={nextPage}
          disabled={time === 0 || !recordState.paused}
        />
      </View>

      <View style={{ position: "absolute" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    justifyContent: "center",
  },
  orbView: {
    flex: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: metrics.paddingBottom,
    paddingHorizontal: 5,
    marginBottom: "15%",
  },
  header: {
    width: "100%",
    height: metrics.headerHeight,
  },
  modalView: {
    marginTop: "80%",
    marginHorizontal: "10%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "5%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  posted: {
    fontFamily: "Montserrat",
    fontSize: 20,
    alignSelf: "flex-start",
  },
});

//add confirmation to restart button to prevent user from accidentally doing it
//put restart and edit story button next to each other
//potentially record snippets instead of the entire story

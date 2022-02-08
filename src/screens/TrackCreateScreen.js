import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import Map from "./../components/Map";

import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text h3>Create a Track</Text>
      <Map />
      {err ? <Text>{err.message} please enable location service</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    flex: 1,
  },
});

export default TrackCreateScreen;

// update funciton start watching
// also need to import
// import { requestForegroundPermissionsAsync } from 'expo-location';
// const startWatching = async () => {
//   try {
//     const { granted } = await requestPermissionsAsync();
//     if (!granted) {
//       throw new Error('Location permission not granted');
//     }
//   } catch (e) {
//     setErr(e);
//   }
// };

import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import useLocation from "../hooks/useLocation";
import Map from "./../components/Map";

import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);
  console.log(isFocused);
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

export default withNavigationFocus(TrackCreateScreen);

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

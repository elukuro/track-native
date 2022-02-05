import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";

import Map from "./../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text h3>Create a Track</Text>
      <Map />
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

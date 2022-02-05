import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 37.78825 + i * 0.001 + Math.random() * 0.001,
      longitude: -122.4324 + i * 0.001 + Math.random() * 0.005,
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;

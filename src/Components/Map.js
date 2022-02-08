import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  if (!currentLocation) {
    return null;
  }
  console.log(currentLocation);
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={300}
        strokeColor="#000"
        fillColor="#555"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;

import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "./../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(TrackContext);
  const track = state.find((track) => track._id === id);
  return (
    <View>
      <Text>TrackDetailScreen {track}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;

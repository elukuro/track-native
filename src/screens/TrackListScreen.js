import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "./../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text>{JSON.stringify(state)}</Text>
      <Button
        title="go to track detail"
        onPress={() => navigation.navigate("TrackDetail")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;

import react from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackList</Text>
      <Button
        title="go to track detail"
        onPress={() => navigation.navigate("TrackDetail")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;

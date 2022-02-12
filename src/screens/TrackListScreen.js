import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "./../context/TrackContext";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import TrackDetailScreen from "./TrackDetailScreen";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { id: item_id })
              }
            >
              <ListItem chevron={true} title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

TrackDetailScreen.navigationOptions = () => {
  title: "Tracks";
};

const styles = StyleSheet.create({});

export default TrackListScreen;

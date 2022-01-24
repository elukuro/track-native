import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

/**
 * stack navigator : classic back and forth between different nested screens  ex : moving from one screen to other
 * bottom tab navigator : show a tab bar at the bottom with buttons to navigate between screen  ex: menu tab at bottom nav
 * switch navigator : abrupt 100% cut between different screen  ex : login to homepage
 * drawer navigator : shows fly-out menu from one side of the device ex : open menu
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

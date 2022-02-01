import Rect from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ text, navigation, routeName }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routeName);
        }}
      >
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);

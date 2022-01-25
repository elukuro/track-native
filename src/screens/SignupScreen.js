import react from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        title="go to signin"
        onPress={() => navigation.navigate("Signin")}
      ></Button>
      <Button
        title="go to mainFlow"
        onPress={() => navigation.navigate("mainFlow")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;

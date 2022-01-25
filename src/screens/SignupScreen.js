import react, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../Components/Spacer";
import SigninScreen from "./SigninScreen";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <View style={styles.container}>
        <Spacer>
          <Text h3>Sign up for Tracker</Text>
        </Spacer>
        <Input
          autoCompleteType={false}
          autoCapitalize="none"
          label="Email"
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
        />
        <Spacer />
        <Input
          autoCompleteType={false}
          autoCapitalize="none"
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(newPassword) => setPassword(newPassword)}
        />
        <Spacer>
          <Button title="Sign Up" />
        </Spacer>
      </View>
    </>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    marginBottom: 160,
  },
});

export default SignupScreen;

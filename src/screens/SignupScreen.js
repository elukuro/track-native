import react, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../Components/Spacer";
import SigninScreen from "./SigninScreen";

import { Context as AuthContext } from "../Context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <View style={styles.container}>
        <Spacer>
          <Text h3>Sign up for Tracker</Text>
        </Spacer>
        <Input
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
          label="Email"
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
        />
        <Spacer />
        <Input
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(newPassword) => setPassword(newPassword)}
        />
        <Spacer>
          <Button title="Sign Up" onPress={() => signup({ email, password })} />
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

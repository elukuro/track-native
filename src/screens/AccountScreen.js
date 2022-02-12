import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text>Account screen</Text>
      </Spacer>
      <Spacer>
        <Button title="Sign out" onPress={() => signout()}></Button>
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = () => {
  title: "Account";
};

const styles = StyleSheet.create({});

export default AccountScreen;

import React, { useContext } from "react";
import { View } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);
  return (
    <View>
      <AuthForm
        headerText={"Sign Up for Tracker"}
        errorMessage={state.errorMessage}
        submitButtonText={"Sign Up"}
        onSubmit={({ email, password }) => signup({ email, password })}
      />
      <NavLink
        text="Already have an account? Sign in instead"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: () => false,
  };
};

export default SignupScreen;

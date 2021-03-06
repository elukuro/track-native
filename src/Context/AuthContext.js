import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGNIN":
      return { errorMessage: "", token: action.payload };
    case "SIGNOUT":
      return { token: null, errorMessage: "" };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "CLEAR_ERROR" });
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log("success");
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNIN", payload: response.data.token });
      // navigate to mainflow
      navigate("TrackList");
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "SIGNIN", payload: token });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
    try {
      const response = await trackerApi.post("/signin", { email, password });
      console.log(response.data.token);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNIN", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    // somehow sign out!!!
    await AsyncStorage.removeItem("token");
    dispatch({ type: "SIGNOUT" });
    navigate("loginFlow");
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);

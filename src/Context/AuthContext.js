import CreateDataContext from "./createDataContext";

// change ngrok base URL every 8 Hours  at api tracker.js
import trackerAPI from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = async (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    //try to sign in
    // handle success by update state
    // handle failure by showing message
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow signup
  };
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  {
    signin,
    signout,
    signup,
  },
  { isSignedIn: false }
);

import CreateDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {};
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
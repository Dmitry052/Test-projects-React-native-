import { Actions } from "react-native-router-flux";
import { SET_PARAM } from "./types";

// set login and pass to store
export const setParam = ({ field, val }) => {
  return dispatch => {
    dispatch({ type: SET_PARAM, field, val });
  };
};

export const authUser = ({ email, password }) => {
  return dispatch => {
    console.log("Good auth", email, password);
    Actions.SceneTabs();
  };
};

export const signOutUser = () => {
  return dispatch => {
    Actions.loginForm();
  };
};

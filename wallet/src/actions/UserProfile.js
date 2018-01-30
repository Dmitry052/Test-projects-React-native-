import { SHOW_USER_PROFILE, SET_USER_PARAMS } from "./types";

export const showUserProfile = () => {
  return dispatch => {
    dispatch({ type: SHOW_USER_PROFILE });
  };
};

export const setUserParams = ({ field, text }) => {
  return dispatch => {
    dispatch({ type: SET_USER_PARAMS, field, text });
  };
};

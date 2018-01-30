/* @flow */
import { SHOW_USER_PROFILE, SET_USER_PARAMS } from "./../actions/types";

const INITIAL_STATE = {
  show: false,
  firstName: "",
  lastName: "",
  email: "",
  bankCard: ""
};

export default (
  state: {
    show: boolean,
    firstName: string,
    lastName: string,
    email: string,
    bankCard: string
  } = INITIAL_STATE,
  action: {
    type: string,
    field: string,
    text: string,
    show: boolean
  }
) => {
  switch (action.type) {
    case SHOW_USER_PROFILE:
      return { ...state, show: !state.show };
    case SET_USER_PARAMS:
      return { ...state, [action.field]: action.text };
    default:
      return state;
  }
};

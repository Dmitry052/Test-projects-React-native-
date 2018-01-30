/* @flow */
const INITIAL_STATE = {
  email: "",
  password: ""
}; 

export default (
  state: { 
    email: string,
    password: string
  } = INITIAL_STATE,
  action: {
    type: string,
    field: string,
    val: string
  }
) => {
  switch (action.type) {
    case "SET_PARAM":
      return { ...state, [action.field]: action.val };
    default:
      return state;
  }
};

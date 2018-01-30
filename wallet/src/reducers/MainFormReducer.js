/* @flow */
import DATA from "./inputData";

const INITIAL_STATE = {
  currencies: DATA
};

export default (
  state: { currencies: Array<mixed> } = INITIAL_STATE,
  action: {
    type: string
  }
) => {
  return state;
};

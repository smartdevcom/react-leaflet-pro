import * as ActionTypes from "../actions";

export const initialState = [];

export default (state = initialState, action) => {
  if (action.type === ActionTypes.UPDATE_MY_PROPERTIES) {
    return action.payload;
  }
  return state;
};

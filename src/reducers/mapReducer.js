import * as ActionTypes from "../actions";

const initialState = {};

const map = (state = initialState, action) => {
  const { type } = action;

  if (type === ActionTypes.UPDATE_MAP) {
    return { ...action.payload };
  }

  return state;
};

export default map;

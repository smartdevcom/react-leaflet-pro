import * as ActionTypes from "../actions";

export const initialState = {
  back: null,
  referrer: null,
  asideWidth: 400
};

export default (state = initialState, action) => {
  if (action.type === ActionTypes.UPDATE_APP_STATE) {
    return { ...state, ...action.payload };
  }
  return state;
};

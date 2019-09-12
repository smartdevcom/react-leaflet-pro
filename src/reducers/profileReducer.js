import * as ActionTypes from "../actions";

const initialState = {
  id: null
};

const profile = (state = initialState, action) => {
  if (action.type === ActionTypes.UPDATE_PROFILE_STATE) {
    return { ...state, ...action.payload };
  }
  return state;
};

export default profile;

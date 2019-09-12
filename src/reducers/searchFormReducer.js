import * as ActionTypes from "../actions";

const initialState = {
  type: "suburb",
  suburb: "",
  zones: [],
  properties: [],
  suburbInput: "",
  areaMinInput: "",
  areaMaxInput: "",
  zoneInput: ""
};

const searchFilters = (state = initialState, action) => {
  const { type } = action;

  if (type === ActionTypes.UPDATE_SEARCH_FILTERS) {
    return { ...state, ...action.payload };
  }

  return state;
};

export default searchFilters;

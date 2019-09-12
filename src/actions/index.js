/* App */
export const UPDATE_APP_STATE = "UPDATE_APP_STATE";
export const updateAppAction = payload => ({
  type: UPDATE_APP_STATE,
  payload
});

export const updateAppThunk = payload => dispatch => {
  return Promise.resolve(dispatch(updateAppAction(payload))); // need to return promise to be able to use dispatch(action).then
};

/* Search */
export const UPDATE_SEARCH_FILTERS = "UPDATE_SEARCH_FILTERS";
export const updateSearchFormAction = payload => ({
  type: UPDATE_SEARCH_FILTERS,
  payload
});

export const updateSearchFormState = payload => dispatch => {
  return dispatch(updateSearchFormAction(payload));
};

/* map */
export const UPDATE_MAP = "UPDATE_MAP";
export const updateMapAction = payload => ({
  type: UPDATE_MAP,
  payload
});

export const updateMapState = payload => dispatch => {
  return dispatch(updateMapAction(payload));
};

/* Profile */
export const UPDATE_PROFILE_STATE = "UPDATE_PROFILE_STATE";
export const updateProfileAction = payload => ({
  type: UPDATE_PROFILE_STATE,
  payload
});

export const updateProfileState = payload => dispatch => {
  return dispatch(updateProfileAction(payload));
};

export const UPDATE_MY_PROPERTIES = "UPDATE_MY_PROPERTIES";
export const updateMyPropertiesAction = payload => ({
  type: UPDATE_MY_PROPERTIES,
  payload
});

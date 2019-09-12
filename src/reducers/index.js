import { combineReducers } from "redux";

import app from "./appReducer";
import profile from "./profileReducer";
import searchForm from "./searchFormReducer";
import map from "./mapReducer";
import myProperties from "./myPropertiesReducer";

const rootReducer = combineReducers({
  app,
  profile,
  searchForm,
  map,
  myProperties
});

export default rootReducer;

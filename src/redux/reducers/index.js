import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";
import savedtripReducer from "./savedtripReducer";

const rootReducer = combinedReducers({
  search: searchReducer,
  user: userReducer,
  savedtrip: savedtripReducer,
});

export default rootReducer;

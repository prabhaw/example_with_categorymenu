import { combineReducers } from "redux";
import reducer from "./fetchdata.reducer";
import search_hint from "./hint.reducer";

const combinedReducer = combineReducers({
  reducer,
  search_hint,
});

export default combinedReducer;

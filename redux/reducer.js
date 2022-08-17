import { authReducer } from "./reducers";
import { combineReducers } from "redux";

export default combineReducers({ auth: authReducer });

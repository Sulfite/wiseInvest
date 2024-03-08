import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./User/UserReducer";

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
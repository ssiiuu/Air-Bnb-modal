import { combineReducers } from "redux";
import { roomReducer } from "./roomReducer";

import { userReducer } from "./UserReducer";


export const rootReducer=combineReducers({
   userReducer,
   roomReducer,
})
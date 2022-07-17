import { combineReducers } from "redux";
import { roomReducer } from "./roomReducer";
import { spinnerReducer } from "./spinnerReducer";

import { userReducer } from "./UserReducer";


export const rootReducer=combineReducers({
   userReducer,
   roomReducer,
   spinnerReducer,
})
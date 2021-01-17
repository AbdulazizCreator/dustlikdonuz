import { combineReducers } from "redux";
import { toggle } from "./toggle";
import { toggle2 } from "./toggle2";

export const allReducer = combineReducers({
   open: toggle,
   open2: toggle2,
})
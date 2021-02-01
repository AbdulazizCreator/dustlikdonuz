import { combineReducers } from "redux";
import { adminMenuReducer } from "./adminMenuReducer";
import { adminNewsReducer } from "./adminNewsReducer";
import { loginReducer } from "./loginReducer";
import { toggle } from "./toggle";

export const allReducer = combineReducers({
   open: toggle,
   login: loginReducer,
   news: adminNewsReducer,
   menu: adminMenuReducer
})
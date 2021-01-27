import { combineReducers } from "redux";
import { adminMenuReducer } from "./adminMenuReducer";
import { adminNewsReducer } from "./adminNewsReducer";
import { loginReducer } from "./loginReducer";
import { toggle } from "./toggle";
import { toggle2 } from "./toggle2";

export const allReducer = combineReducers({
   open: toggle,
   open2: toggle2,
   login: loginReducer,
   news: adminNewsReducer,
   menu: adminMenuReducer
})
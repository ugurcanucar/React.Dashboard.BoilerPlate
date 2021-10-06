import { combineReducers } from "redux";
import Auth from "./Auth";
import SubHeader from "./sub-header";
const reducers = combineReducers({
  auth: Auth,
  subheader: SubHeader,
});

export default reducers;

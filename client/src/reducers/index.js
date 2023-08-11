import { combineReducers } from "redux";

import lolGroups from './lolGroups';
import auth from './auth'

export default combineReducers({ lolGroups, auth });
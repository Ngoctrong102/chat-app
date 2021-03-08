import { combineReducers } from 'redux';

import navState from './nav';
import messageState from './message';
import authState from './auth';

export default combineReducers({
    navState,
    messageState,
    authState
})
import { combineReducers } from 'redux';

import navState from './nav';
import messageState from './message';

export default combineReducers({
    navState,
    messageState
})
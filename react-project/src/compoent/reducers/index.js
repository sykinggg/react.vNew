import { combineReducers } from 'redux';

import todo from './todos';
import counter from './counter';

export default combineReducers({
	todo,
	counter
})
import { combineReducers } from 'redux';
import github from './github';
import search from './search';

const reducers = combineReducers({
  github,
  search
});

export default reducers;

import { combineReducers } from 'redux';
import github from './github';
import searchAndFilter from './searchAndFilter';

const reducers = combineReducers({
  github,
  searchAndFilter
});

export default reducers;

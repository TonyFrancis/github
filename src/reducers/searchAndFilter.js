import {
  ON_SEARCH_CHANGE,
  ON_FILTER_CHANGE,
} from '../actions/constants';

// default state
const data = {
  search: '',
  filter: 'ALL'
}

// reducer
const searchAndFilter = (state=data, action) => {
  switch (action.type) {
    case ON_SEARCH_CHANGE:
      // update search with payload
      return { ...state, search: action.payload }
    case ON_FILTER_CHANGE:
      // update filter with payload
      return { ...state, filter: action.payload }
    default:
      return state;
  }
}

export default searchAndFilter;

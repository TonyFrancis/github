import {
  ON_SEARCH_CHANGE,
  ON_FILTER_CHANGE,
} from '../actions/constants';

const data = {
  search: '',
  filter: 'ALL'
}
const searchAndFilter = (state=data, action) => {
  switch (action.type) {
    case ON_SEARCH_CHANGE:
      return { ...state, search: action.payload }
    case ON_FILTER_CHANGE:
      return { ...state, filter: action.payload }
    default:
      return state;
  }
}

export default searchAndFilter;

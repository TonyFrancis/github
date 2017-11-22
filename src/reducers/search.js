import { ON_SEARCH_CHANGE } from '../actions/constants';

const search = (state='', action) => {
  switch (action.type) {
    case ON_SEARCH_CHANGE:
      return action.payload
    default:
      return state;
  }
}

export default search;

import { ON_SEARCH_CHANGE } from './constants';

const onSearchChange = (search) => ({
  type: ON_SEARCH_CHANGE,
  payload: search,
});

export {
  onSearchChange,
};

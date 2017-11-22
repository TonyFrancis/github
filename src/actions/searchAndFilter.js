import {
  ON_SEARCH_CHANGE,
  ON_FILTER_CHANGE,
} from './constants';

const onSearchChange = (search) => ({
  type: ON_SEARCH_CHANGE,
  payload: search,
});

const onFilterChange = (filter) => ({
  type: ON_FILTER_CHANGE,
  payload: filter,
});

export {
  onSearchChange,
  onFilterChange
};

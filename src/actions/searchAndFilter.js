import {
  ON_SEARCH_CHANGE,
  ON_FILTER_CHANGE,
} from './constants';


/**
  onSearchChange
  update state on search change
  @arg search string to search
**/
const onSearchChange = (search) => ({
  type: ON_SEARCH_CHANGE,
  payload: search,
});


/**
 onFilterChange
 update filter on filter chagne
 @arg filter string to filter tab
**/
const onFilterChange = (filter) => ({
  type: ON_FILTER_CHANGE,
  payload: filter,
});

export {
  onSearchChange,
  onFilterChange
};

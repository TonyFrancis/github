import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { getAll } from '../../actions/github';

/**
  RepoList
    Create list of repos
    renders ul with array of li elements
**/
class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onFilter(elem, filter) {
      if (filter === 'ALL') {
        return true;
      } else if (filter === 'PUBLIC' && elem.isPublic) {
        return true;
      } else if (filter === 'PRIVATE' && !elem.isPublic) {
        return true;
      } else if (filter === 'CREATED' && elem.source === 'created') {
        return true;
      } else if (filter === 'FORK' && elem.source === 'fork') {
        return true;
      }
    return false;
  }
  render() {
    const listItems = this.props.github
      .filter(elem => this.onFilter(elem,this.props.searchAndFilter.filter)) // filter tag
      .filter(elem => elem.title.toLowerCase().indexOf(this.props.searchAndFilter.search.toLowerCase()) !== -1)  // filter search
      .map((elem) => (
        // creating component
      <ListItem
        key={elem.id}
        isPublic={elem.isPublic}
        title={elem.title}
        source={elem.source}
        link={elem.link}
      />
    ))
    return (
      <ul className="mini-repo-list" data-filterable-for="your-repos-filter" data-filterable-type="substring">
          {listItems}
      </ul>
    );
  }
}

RepoList.propTypes = {
  searchAndFilter: PropTypes.shape({
    search: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
  }).isRequired,
  github: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPublic: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  getAll: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const { github, searchAndFilter } = state;
  return {
    github,
    searchAndFilter
  };
};
const mapDispatchToProps = {
  getAll
}

RepoList = connect(mapStateToProps, mapDispatchToProps)(RepoList);

export default RepoList;

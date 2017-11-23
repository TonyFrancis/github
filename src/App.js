import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onSearchChange, onFilterChange } from './actions/searchAndFilter';
import RepoList from './components/LayOut/RepoList';
import './App.css';

/**

  App
  create App github which is related to media query.
  on 500px mobile-view will be visiable
  on click the link redirect to new page
**/

class App extends Component {
  constructor(props){
    super(props);
    this.state ={};
    this.onResponsive = this.onResponsive.bind(this);
  }
  onResponsive() {
    var x = document.getElementById("myTopnav");
    console.log("responsive")
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
  render() {
    let filterSelected = "btn-link repo-filter js-repo-filter-link text-small text-gray filter-selected";
    let filterNotSelected = "btn-link repo-filter js-repo-filter-link text-small text-gray";
    const { filter } = this.props.searchAndFilter;
    const content = <RepoList />
    return (
      <div>
      <div id="your_repos" className="js-repos-container" data-pjax-container="">
        <div className="boxed-group flush repos user-repos" role="navigation">
          <div className="boxed-group-action">
            <a className="btn btn-sm btn-primary" data-ga-click="Dashboard, click, Sidebar header new repo button - context:user">New repository</a>
          </div>
          <h3>
            Your repositories
            <span className="Counter">{this.props.github.length}</span>
          </h3>
          <div className="boxed-group-inner">
            <div className="filter-repos filter-bar" role="search">
              <input type="text" value={this.props.searchAndFilter.search} className="form-control input-sm input-block js-filterable-field js-your-repositories-search" id="your-repos-filter" placeholder="Find a repository…" aria-label="Find a repository…" tabindex="2" data-url="https://github.com/" data-query-name="q"
                onChange={ e => this.props.onSearchChange(e.target.value)}
                />
              <ul className="repo-filterer">
                <li><a data-pjax="" data-pjax-preserve-scroll="" className={filter === 'ALL' ? filterSelected : filterNotSelected}  onClick={() => this.props.onFilterChange('ALL')}>All</a></li>
                <li><a data-pjax="" data-pjax-preserve-scroll="" className={filter === 'PUBLIC' ? filterSelected : filterNotSelected}  onClick={() => this.props.onFilterChange('PUBLIC')}>Public</a></li>
                <li><a data-pjax="" data-pjax-preserve-scroll="" className={filter === 'PRIVATE' ? filterSelected : filterNotSelected}  onClick={() => this.props.onFilterChange('PRIVATE')}>Private</a></li>
                <li><a data-pjax="" data-pjax-preserve-scroll="" className={filter === 'CREATED' ? filterSelected : filterNotSelected}  onClick={() => this.props.onFilterChange('CREATED')}>Sources</a></li>
                <li><a data-pjax="" data-pjax-preserve-scroll="" className={filter === 'FORK' ? filterSelected : filterNotSelected}  onClick={() => this.props.onFilterChange('FORK')}>Forks</a></li>
              </ul>
            </div>
            {content}
          </div>
        </div>
      </div>
      <div className="mobile-view">
        <div className="topnav" id="myTopnav">
          <a className="active">
            Your repositories
            <span className="Counter">{this.props.github.length}</span>
          </a>
          <a
            style={{
              fontSize: '25px'
            }}
            className="btn btn-primary"
          >
            New repository
          </a>
          <a>
            <input
              type="text"
              value={this.props.searchAndFilter.search}
              style={{
                fontSize: '25px'
              }}
              className="form-control input-sm input-block js-filterable-field js-your-repositories-search"
              placeholder="Find a repository…"
              onChange={ e => this.props.onSearchChange(e.target.value)}
            />
          </a>
          <a>
            <select
              className="select-menu-modal"
              style={{width: '100%', fontSize: '25px'}}
              id="selectFilter"
              value={filter}
              onChange={e => this.props.onFilterChange(e.target.value)}
            >
              <option>ALL</option>
              <option>PUBLIC</option>
              <option>PRIVATE</option>
              <option>CREATED</option>
              <option>FORK</option>
            </select>
          </a>
          <a style={{ fontSize:"25px"}} className="icon" onClick={() => this.onResponsive()}>&#9776;</a>
        </div>
          {content}
        </div>
      </div>
    )
  }
}

App.propTypes = {
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
  onSearchChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  const { github, searchAndFilter}  = state;
  return {
    searchAndFilter,
    github,
  };
};
const mapDispatchToProps = {
  onSearchChange,
  onFilterChange,
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;


// <form accept-charset="UTF-8" action="/dashboard/ajax_your_repos" className="more-repos ajax-pagination-form js-ajax-pagination js-more-repos-form" data-remote="true" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"></div>
//   <input name="your_repos_cursor" type="hidden" value="Y3Vyc29yOnYyOpK5MjAxNy0xMC0yN1QxMTozNjo1NyswNTozMM4Gb0RC">
//   <button type="submit" className="btn-link width-full more-repos-link js-more-repos-link" data-disable-with="Loading more…" data-ga-click="Dashboard, click, Ajax more repos link - context:user">Load more…</button>
// </form>

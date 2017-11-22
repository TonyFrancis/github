import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onSearchChange, onFilterChange } from './actions/searchAndFilter';
import RepoList from './components/LayOut/RepoList';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {


  render() {
    let filterSelected = "btn-link repo-filter js-repo-filter-link text-small text-gray filter-selected";
    let filterNotSelected = "btn-link repo-filter js-repo-filter-link text-small text-gray";
    const { filter } = this.props.searchAndFilter;
    return (
      <div id="your_repos" className="js-repos-container" data-pjax-container="">

<div className="boxed-group flush repos user-repos" role="navigation">
  <div className="boxed-group-action">
    <a href="/new" className="btn btn-sm btn-primary" data-ga-click="Dashboard, click, Sidebar header new repo button - context:user">New repository</a>
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

<RepoList />




  </div>
</div>

        </div>
    )
  }
}
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

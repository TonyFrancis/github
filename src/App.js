import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onSearchChange } from './actions/searchAndFilter';
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
    return (
      <div id="your_repos" className="js-repos-container" data-pjax-container="">

<div className="boxed-group flush repos user-repos" role="navigation">
  <div className="boxed-group-action">
    <a href="/new" className="btn btn-sm btn-primary" data-ga-click="Dashboard, click, Sidebar header new repo button - context:user">New repository</a>
  </div>
  <h3>
    Your repositories
    <span className="Counter">40</span>
  </h3>
  <div className="boxed-group-inner">
    <div className="filter-repos filter-bar" role="search">
  <input type="text" value={this.props.searchAndFilter.search} className="form-control input-sm input-block js-filterable-field js-your-repositories-search" id="your-repos-filter" placeholder="Find a repository…" aria-label="Find a repository…" tabindex="2" data-url="https://github.com/" data-query-name="q"
    onChange={ e => this.props.onSearchChange(e.target.value)}
    />
  <ul className="repo-filterer">
    <li><a data-pjax="" data-pjax-preserve-scroll="" className="btn-link repo-filter js-repo-filter-link text-small text-gray filter-selected" href="https://github.com/dashboard" data-ga-click="Dashboard, click, Repo list filter - context:user filter:all">All</a></li>
    <li><a data-pjax="" data-pjax-preserve-scroll="" className="btn-link repo-filter js-repo-filter-link text-small text-gray" href="https://github.com/dashboard?privacy=PUBLIC" data-ga-click="Dashboard, click, Repo list filter - context:user filter:public">Public</a></li>
    <li><a data-pjax="" data-pjax-preserve-scroll="" className="btn-link repo-filter js-repo-filter-link text-small text-gray" href="https://github.com/dashboard?privacy=PRIVATE" data-ga-click="Dashboard, click, Repo list filter - context:user filter:private">Private</a></li>
    <li><a data-pjax="" data-pjax-preserve-scroll="" className="btn-link repo-filter js-repo-filter-link text-small text-gray" href="https://github.com/dashboard?fork=0" data-ga-click="Dashboard, click, Repo list filter - context:user filter:sources">Sources</a></li>
    <li><a data-pjax="" data-pjax-preserve-scroll="" className="btn-link repo-filter js-repo-filter-link text-small text-gray" href="https://github.com/dashboard?fork=1" data-ga-click="Dashboard, click, Repo list filter - context:user filter:forks">Forks</a></li>
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
  const searchAndFilter = state.searchAndFilter;
  return {
    searchAndFilter,
  };
};
const mapDispatchToProps = {
  onSearchChange
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;


// <form accept-charset="UTF-8" action="/dashboard/ajax_your_repos" className="more-repos ajax-pagination-form js-ajax-pagination js-more-repos-form" data-remote="true" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"></div>
//   <input name="your_repos_cursor" type="hidden" value="Y3Vyc29yOnYyOpK5MjAxNy0xMC0yN1QxMTozNjo1NyswNTozMM4Gb0RC">
//   <button type="submit" className="btn-link width-full more-repos-link js-more-repos-link" data-disable-with="Loading more…" data-ga-click="Dashboard, click, Ajax more repos link - context:user">Load more…</button>
// </form>

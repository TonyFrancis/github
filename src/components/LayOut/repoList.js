import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { getAll } from '../../actions/github';

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(this.props.github)
    const listItems = this.props.github.map((elem) => (
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
          <li className="public source">
            <a className="mini-repo-list-item css-truncate" href="/TonyFrancis/PTRRN" data-ga-click="Dashboard, click, Repo list item click - context:user visibility:public fork:false">
                <svg aria-hidden="true" className="octicon octicon-repo repo-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
              <span className="repo-and-owner css-truncate-target" title="TonyFrancis/PTRRN">
                <span className="repo">PTRRN</span>
              </span>
            </a>
          </li>
          <li className="private source">
            <a className="mini-repo-list-item css-truncate" href="/achak1987/MySoMeDB" data-ga-click="Dashboard, click, Repo list item click - context:user visibility:private fork:false">
                <svg aria-hidden="true" className="octicon octicon-lock repo-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"></path></svg>
              <span className="repo-and-owner css-truncate-target" title="achak1987/MySoMeDB">
                <span className="owner css-truncate-target">achak1987</span>/<span className="repo">MySoMeDB</span>
              </span>
            </a>
          </li>
          <li className="private source">
            <a className="mini-repo-list-item css-truncate" href="/achak1987/mysome_sample_client_app" data-ga-click="Dashboard, click, Repo list item click - context:user visibility:private fork:false">
                <svg aria-hidden="true" className="octicon octicon-lock repo-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"></path></svg>
              <span className="repo-and-owner css-truncate-target" title="achak1987/mysome_sample_client_app">
                <span className="owner css-truncate-target">achak1987</span>/<span className="repo">mysome_sample_client_app</span>
              </span>
            </a>
          </li>
          <li className="private source">
            <a className="mini-repo-list-item css-truncate" href="/achak1987/MySoMeClientApp" data-ga-click="Dashboard, click, Repo list item click - context:user visibility:private fork:false">
                <svg aria-hidden="true" className="octicon octicon-lock repo-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"></path></svg>
              <span className="repo-and-owner css-truncate-target" title="achak1987/MySoMeClientApp">
                <span className="owner css-truncate-target">achak1987</span>/<span className="repo">MySoMeClientApp</span>
              </span>
            </a>
          </li>
          <li className="private fork">
            <a className="mini-repo-list-item css-truncate" href="/TonyFrancis/MySoMeClientApp" data-ga-click="Dashboard, click, Repo list item click - context:user visibility:private fork:true">
                <svg aria-hidden="true" className="octicon octicon-repo-forked repo-icon" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              <span className="repo-and-owner css-truncate-target" title="TonyFrancis/MySoMeClientApp">
                <span className="repo">MySoMeClientApp</span>
              </span>
            </a>
          </li>
          <li className="private fork">
            <a className="mini-repo-list-item css-truncate" href="/TonyFrancis/mysome_sample_client_app" data-ga-click="Dashboard, click, Repo list item click - context:user visibility:private fork:true">
                <svg aria-hidden="true" className="octicon octicon-repo-forked repo-icon" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              <span className="repo-and-owner css-truncate-target" title="TonyFrancis/mysome_sample_client_app">
                <span className="repo">mysome_sample_client_app</span>
              </span>
            </a>
          </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  const github = state.github;
  return {
    github,
  };
};
const mapDispatchToProps = {
  getAll
}

RepoList = connect(mapStateToProps, mapDispatchToProps)(RepoList);

export default RepoList;

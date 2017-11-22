import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListItem = ({title, isPublic, link, source}) => {
  let liClass = "private source";
  let iconSvg = (
    <svg aria-hidden="true" className="octicon octicon-lock repo-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
        <path fillRule="evenodd" d="M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"></path>
    </svg>
  )
  if (isPublic) {
    liClass = "public source";
    iconSvg = (
      <svg aria-hidden="true" className="octicon octicon-repo repo-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
        <path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
      </svg>)
  }
  return (
    <li className={liClass}>
      <Link className="mini-repo-list-item css-truncate" to={link} data-ga-click="Dashboard, click, Repo list item click - context:user visibility:public fork:false">
        {iconSvg}
        <span className="repo-and-owner css-truncate-target" title={title}>
          <span className="repo">{title}</span>
        </span>
      </Link>
    </li>
  );
}

export default ListItem;

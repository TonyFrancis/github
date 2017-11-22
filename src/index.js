import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import github from './reducers/github';
import registerServiceWorker from './registerServiceWorker';

const Hello = ({}) => (
  <div>
    Hello World
  </div>
)

const store = createStore(github);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <span>
        <Route exact path="/" component={App} />
        <Route path="/:name" component={Hello} />
      </span>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();

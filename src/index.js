import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const Hello = (props) => {
  const { name } = props.match.params;
  return (
    <div>
      {name}
    </div>
  )
}

const store = createStore(reducers);
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

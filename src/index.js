import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bugs from './Bugs'
import Fish from './Fish'
import Login from './Login'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'

import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(userReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/bugs" component={Bugs} />
      <Route exact path="/fish" component={Fish} />
      <Route exact path="/login" component={Login} />
    </Router>
  </Provider>,
  document.getElementById('root')
);


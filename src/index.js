import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Bugs from './pages/Bugs'
import Fish from './pages/Fish'
import Login from './pages/Login'
import Signup from './pages/Signup';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/NavBar';

const store = createStore(userReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/bugs" component={Bugs} />
      <Route exact path="/fish" component={Fish} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Router>
  </Provider>,
  document.getElementById('root')
);


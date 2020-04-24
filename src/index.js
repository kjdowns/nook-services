import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Bugs from './pages/Bugs'
import Fish from './pages/Fish'
import MysteryIslands from './pages/MysteryIslands';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Turnips from './pages/Turnips';
import Flowers from './pages/Flowers'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import appReducer from './reducers/appReducer'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/NavBar';

const store = createStore(appReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/bugs" component={Bugs} />
      <Route exact path="/fish" component={Fish} />
      <Route exact path='/flowers' component={Flowers} />
      <Route exact path="/islands" component={MysteryIslands} />
      <Route exact path="/turnips" component={Turnips} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Router>
  </Provider>,
  document.getElementById('root')
);


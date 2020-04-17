import React, { Component } from 'react';
import LinkContainer from '../containers/LinkContainer'
import {connect} from 'react-redux'

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Nook Services</h1>
        <LinkContainer />
      </div>
    )
  }
}

export default Home;

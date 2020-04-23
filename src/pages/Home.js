import React, { Component } from 'react';
import LinkContainer from '../containers/LinkContainer'

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Welcome To Nook Services!</h1>
        <p>Nook Services offers a variety of tracking and information services. Select from the options below to access a service.</p>
        <LinkContainer />
      </div>
    )
  }
}

export default Home

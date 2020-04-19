import React, { Component } from 'react';
import LinkContainer from '../containers/LinkContainer'
import {connect} from 'react-redux'
import { fetchIslands } from '../actions/islandActions';

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

const mapDispatchToProps = dispatch => {
    return {fetchIslands: () => {dispatch(fetchIslands())}}
}

export default connect(null, mapDispatchToProps) (Home)
